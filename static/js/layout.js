"use strict";
/*jslint browser: true */
/*global ko: false, textile: false */
function each_item(obj, op) {
	for (var key in obj) {
		op(obj[key], key);
	}
}
function each_elt(arr, op) {
	for (var i = 0, m = arr.length; i < m; ++i) {
		op(arr[i], i);
	}
}
function map_item(obj, op, create_fn) {
	create_fn = create_fn || empty_instance_of_same_class;
	var result = create_fn(obj);
	for (var key in obj) {
		result[key] = op(obj[key], key);
	}
	return result;
}
function map_elt(arr, op) {
	var result = [];
	for (var i = 0, m = arr.length; i < m; ++i) {
		result.push(op(arr[i], i));
	}
	return result;
}
function filter_map(arr, op) {
	var result = [];
	for (var i = 0, m = arr.length; i < m; ++i) {
		var r = op(arr[i], i);
		if (r !== null) { result.push(r); }
	}
	return result;
}
function find_elt(arr, pred) {
	for (var i = 0, m = arr.length; i < m; ++i) {
		if (pred(arr[i], i)) {
			return arr[i];
		}
	}
	return null;
}

function Clone() { }
function clone(obj) {
	Clone.prototype = obj;
	return new Clone();
}
function empty_instance_of_same_class(obj) {
	return clone(obj.prototype);
}
function decorate(obj, decorator) {
	var result = clone(obj);
	for (var key in decorator) {
		result[key] = decorator[key];
	}
	return result;
}
function base_class(constructor, methods) {
	for (var key in methods) {
		constructor.prototype[key] = methods[key];
	}
}
function extend(superclass, subclass, methods) {
	subclass.prototype = clone(superclass.prototype);
	subclass.prototype.constructor = subclass;
	for (var key in methods) {
		subclass.prototype[key] = methods[key];
	}
}

function is_blank(str) {
	return (!str || /^\s*$/.test(str));
}

function create_items(inputs, constructor, options) {
	return _wrap_items(inputs, function (input) { return new constructor(input, options); });
}

function _wrap_items(inputs, wrap_item) {
	return map_item(inputs, function (input, key) {
		var elt = wrap_item(input);
		elt._id = key;
		return elt;
	});
}

function hash_to_array(hash) {
	var result = [];
	each_item(hash, function (item) {
		result.push(item);
	});
	return result;
}

function if_err(fn, with_err, no_err) {
	var result;
	try {
		result = fn.call(this);
	} catch (err) {
		with_err.call(this, err);
		return;
	}
	no_err.call(this, result);
}

function make_multiline(input) {
	return input.split("\n");
}

function parse_multiline(input) {
	return input.join("\n");
}


var format_for_display = function format_for_display(markup) {
	var result = textile(markup);
	return result;
};

var UrlData = function () {
	function UrlData(skill, show_all, components, ask_for_help, level, active_focus_name) {
		this.skill = skill;
		this.level = level;
		this.show_all = show_all;
		this.components_to_show = components;
		this.ask_for_help = ask_for_help;
		this.title = (active_focus_name ? active_focus_name + " | Agile Engineering Stages" : "Agile Engineering Stages");
	}
	base_class(UrlData, {
		to_url: function () {
			var args = [];
			if (this.skill) {
				args.push("stage=" + this.skill);
			}
			if (this.level) {
				args.push("era=" + this.level);
			}
			if (!this.show_all) {
				args.push("show=" + this.components_to_show.join(","));
			}
			if (this.ask_for_help) {
				args.push("ask_for_help=" + this.ask_for_help);
			}
			return "?" + args.join("&");
		},
	});
	UrlData.from_url = function (url) {
		var result = new UrlData(null, true, [], false);
		if (!url) return result;
		var parts = url.replace("?", "").split("&");
		each_elt(parts, function (p) {
			var name_value = p.split("=");
			if (name_value[0] === "stage") {
				result.skill = name_value[1];
			}
			if (name_value[0] === "era") {
				result.level = name_value[1];
			}
			if (name_value[0] === "show") {
				result.show_all = false;
				result.components_to_show = name_value[1].split(",");
			}
			if (name_value[0] === "ask_for_help") {
				result.ask_for_help = name_value[1];
			}
		});
		return result;
	};
	UrlData.from_vms = function (skill, show_all, components, ask_for_help, level) {
		components = filter_map(components, function (c) {
			return c.show_dependencies() ? c.slug : null;
		});
		return new UrlData((skill ? skill.slug : null), show_all, components, ask_for_help, (level ? level.slug : null), (skill ? skill.name() : (level ? level.name() : null)));
	};
	return UrlData;
}();

function add_help_display_capability(self, data, app) {
	self.help_needed = ko.observableArray(data.help_needed);
	self.help_to_request = ko.computed({
		read: function () {
			var values = self.help_needed();
			var offer = app.ask_for_help();
			var requests = filter_map(values, function (h) {
				return (h._id === offer || offer === "ALL") ? h.name() : null;
			});
			if (!requests) return null;
			return requests.join(', ');
		},
	});
	self.help_unwrap = function (unwrap) {
		return map_elt(unwrap(self.help_needed), function (h) {
			return h._id;
		});
	};
	self.help_resolve_references = function (lookup, mark_invalid, err, skill_id) {
		self.help_needed(map_elt(self.help_needed(), function (help) {
			return lookup.kinds_of_help[help] || mark_invalid(err, "help", help, skill_id);
		}));
	};
}

function ViewModel() {
	var vm = this;
	this._id = "whole_app";
	this.close_options = function () {
		vm.expanded(false);
	};
	this.open_options = function () {
		vm.expanded(true);
	};
	this.app = new StagesVm(layout);
	this.expanded = ko.observable(false);
	this.json_blob = ko.computed({
		read: function () {
			var info = this.app.to_JS();
			return "function load_data() {\n\treturn "
				+ JSON.stringify(info, undefined, '\t').replace(/(\r\n|\n|\r)/gm, "\n\t")
				+ ";\n}\n";
		},
		owner: vm
	}).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 1000 } });
	this.begin_tracking_history = function () {
		vm.app.handle_navigation();
		window.addEventListener('popstate', function () {
			vm.app.handle_navigation()
		});
	};
	this.reset_data_to = function (data) {
		this.app.update_data(data, true);
	};
}

var StagesVm = function () {
	function StagesVm(layout) {
		var self = this;
		this.valid = ko.observable(true);
		this.error_message = ko.observable("");
		this.skills = ko.observableArray([]);
		this.levels = ko.observableArray([]);
		this.kinds = ko.observableArray([]);
		this.components = ko.observableArray([]);
		this._id = "stages";
		this.show_all_dependencies = ko.observable(true);
		this.focal_skill = ko.observable(null);
		this.focal_level = ko.observable(null);
		this.show_skill_details = function (skill) {
			self.focal_level(null);
			self.focal_skill(skill);
			self.update_url();
		};
		this.hide_details = function () {
			self.focal_skill(null);
			self.focal_level(null);
			self.update_url();
		};
		this.show_level_details = function (level) {
			self.focal_skill(null);
			self.focal_level(level);
			self.update_url();
		};
		this.editing = ko.observable(false);
		this.ask_for_help = ko.observable("");
		this.kinds_of_help = ko.observableArray([]);
		this.version = ko.observable("");
	}
	base_class(StagesVm, {
		to_JS: function () {
			return {
				version: this.version(),
				file_format_version: "2.0.0",
				levels: unwrap_to_hash(this.levels),
				components: unwrap_to_hash(this.components, function (l, r) { return l.min - r.min; }),
				dependency_kinds: unwrap_to_hash(this.kinds),
				help_kinds: unwrap_to_hash(this.kinds_of_help),
				skills: unwrap_to_hash(this.skills, function (l, r) { return l.x * 1000 - r.x * 1000 + l.y - r.y; }),
			};
		},
		set_data_error: function (reason) {
			this.valid(false);
			this.error_message(reason);
		},
		update_url: function () {
			var data = UrlData.from_vms(this.focal_skill(), this.show_all_dependencies(), this.components(), this.ask_for_help(), this.focal_level());
			History.pushState(null, data.title, data.to_url());
		},
		handle_navigation: function () {
			var url = History.getState().url.split("?")[1];
			var data = UrlData.from_url(url);
			this.focal_skill(find_by_slug(data.skill, this.skills()));
			this.focal_level(find_by_slug(data.level, this.levels()));
			this.show_all_dependencies(data.show_all);
			each_elt(this.components(), function (c) {
				c.show_dependencies(data.components_to_show.indexOf(c.slug) >= 0);
			});
			this.ask_for_help(data.ask_for_help);
		},
		update_data: function (data, is_initial_data) {
			if (this.prev_data === data) return;
			this.valid(true);
			this.error_message("");
			var self = this;
			function mark_invalid(msg_fn) {
				self.valid(false);
				var args = Array.prototype.slice.call(arguments, 1);
				self.error_message(msg_fn.apply(null, args));
				return null;
			}
			var lookup = {
				levels: create_items(data.levels, LevelVm, { layout: layout, app: self }),
				components: create_items(data.components, ComponentVm, self),
				kinds: create_items(data.dependency_kinds, KindVm),
				skills: create_items(data.skills, SkillVm, { layout: layout, app: self }),
				kinds_of_help: create_items(data.help_kinds, HelpKindVm),
			};
			each_item(lookup.skills, function (skill) {
				skill.resolve_obj_references(lookup, mark_invalid);
			});
			each_item(lookup.levels, function (level) {
				level.resolve_obj_references(lookup, mark_invalid);
			});
			if (is_initial_data) {
				var do_updates = function (obj) {
					obj.do_one_time_data_updates();
				};
				each_item(lookup.skills, do_updates);
				each_item(lookup.components, do_updates);
				each_item(lookup.levels, do_updates);
				each_item(lookup.kinds, do_updates);
			}
			if (!this.valid()) { return; }
			this.prev_data = data;
			this.version(data.version);
			this.skills(hash_to_array(lookup.skills));
			this.levels(hash_to_array(lookup.levels));
			this.kinds(hash_to_array(lookup.kinds));
			this.components(hash_to_array(lookup.components));
			this.kinds_of_help(hash_to_array(lookup.kinds_of_help));
			var update_url = function () { self.update_url(); };
			each_elt(this.components(), function (c) {
				c.show_dependencies.subscribe(update_url);
			});
			this.ask_for_help.subscribe(update_url);
			this.show_all_dependencies.subscribe(update_url);
		},
	});

	function find_by_slug(slug, items) {
		if (is_blank(slug)) { return null; }
		return find_elt(items, function (item) { return item.slug === slug; });
	};

	function unwrap_to_hash(arr, sort_fn) {
		var result = {};
		var clean = map_elt(ko.utils.unwrapObservable(arr), function (vm) {
			return [vm._id, vm.to_JS(ko.utils.unwrapObservable)];
		});
		if (sort_fn) {
			clean.sort(function (l, r) { return sort_fn(l[1], r[1]); });
		}
		each_elt(clean, function (obj) {
			result[obj[0]] = obj[1];
		});
		return result;
	}

	return StagesVm;
}();

var HelpKindVm = function () {
	function HelpKindVm(data) {
		this.name = ko.observable(data);
	}
	base_class(HelpKindVm, {
		to_JS: function (unwrap) {
			return unwrap(this.name);
		},
	});
	return HelpKindVm;
}();

var LevelVm = function () {
	function LevelVm(data, options) {
		var self = this;
		function format_desc(new_value) {
			self.description_display(format_for_display(new_value));
		}
		this.name = ko.observable(data.name);
		this.min = data.min;
		this.max = data.max;
		this.color = data.color;
		this.slug = data.slug;
		this.description_display = ko.observable("");
		this.description = ko.observable("");
		this.description.subscribe(format_desc);
		this.description(parse_multiline(data.description));
		add_help_display_capability(this, data, options.app);
		this.label_position = layout.place_level_label(this);
	}
	base_class(LevelVm, {
		to_JS: function (unwrap) {
			return {
				name: unwrap(this.name),
				slug: unwrap(this.slug),
				min: unwrap(this.min),
				max: unwrap(this.max),
				color: unwrap(this.color),
				description: make_multiline(unwrap(this.description)),
				help_needed: this.help_unwrap(unwrap),
			};
		},
		resolve_obj_references: function (lookup, mark_invalid) {
			this.help_resolve_references(lookup, mark_invalid, error_failed_to_find_key, this._id);
		},
		do_one_time_data_updates: function () {
			this.label_position = layout.place_level_label(this);
		},
	});
	function error_failed_to_find_key(type, key, my_key) {
		return "I could not find the " + type + " " + key + ", as referenced in the level " + my_key + ".";
	}
	return LevelVm;
}();

var ComponentVm = function () {
	function ComponentVm(data, app) {
		this.name = ko.observable(data.name);
		this.techniques = ko.observable(data.techniques);
		this.color = data.color;
		this.slug = data.slug;
		this.show_dependencies = ko.observable(false);
		this.app = app;
	}
	base_class(ComponentVm, {
		to_JS: function (unwrap) {
			return {
				name: unwrap(this.name),
				techniques: unwrap(this.techniques),
				color: unwrap(this.color),
				slug: unwrap(this.slug),
			};
		},
		do_one_time_data_updates: function () {
		},
		should_draw: function () {
			return this.show_dependencies() || this.app.show_all_dependencies();
		},
	});
	return ComponentVm;
}();

var KindVm = function () {
	function KindVm(data) {
		this.name = data.name;
		this.description = ko.observable(data.description);
		this.dash_style = data.dash_style;
		this.border_style = data.border_style;
	}
	base_class(KindVm, {
		to_JS: function (unwrap) {
			return {
				name: unwrap(this.name),
				description: unwrap(this.description),
				dash_style: unwrap(this.dash_style),
				border_style: unwrap(this.border_style),
			};
		},
		do_one_time_data_updates: function () {
		},
	});
	return KindVm;
}();

var SkillVm = function () {
	function SkillVm(data, options) {
		var layout = options.layout;
		var app = options.app;
		var self = this;
		function format_desc(new_value) {
			self.description_display(format_for_display(new_value));
		}
		this.description_display = ko.observable("");
		this.description = ko.observable("");
		this.description.subscribe(format_desc);
		this.description(parse_multiline(data.description));
		add_help_display_capability(this, data, app);
		this.name = ko.observable(data.name);
		this.x = data.x;
		this.y = data.y;
		this.level = data.level;
		this.component = data.component;
		this.requires = data.requires;
		this.layout = layout;
		this.label_position = layout.place_label(this);
		this.enables = [];
		this.obsoletes = data.obsoletes;
		this.slug = data.slug;
		this.is_key = data.is_key;
	}
	base_class(SkillVm, {
		to_JS: function (unwrap) {
			return {
				name: unwrap(this.name),
				x: unwrap(this.x),
				y: unwrap(this.y),
				level: unwrap(this.level)._id,
				component: unwrap(this.component)._id,
				requires: map_elt(unwrap(this.requires), function (link) {
					return {
						skill: link.skill._id,
						kind: link.kind._id,
					};
				}),
				obsoletes: map_elt(unwrap(this.obsoletes), function (link) {
					return link.skill._id;
				}),
				description: make_multiline(unwrap(this.description)),
				help_needed: this.help_unwrap(unwrap),
				slug: unwrap(this.slug),
				is_key: unwrap(this.is_key),
			};
		},
		resolve_obj_references: function (lookup, mark_invalid) {
			var skill_id = this._id;
			var build_relation = function (skill, kind) {
				return {
					skill: lookup.skills[skill] || mark_invalid(error_failed_to_find_key, "skill", skill, skill_id),
					kind: lookup.kinds[kind] || mark_invalid(error_failed_to_find_key, "dependency kind", kind, skill_id),
				};
			};
			this.component = lookup.components[this.component] || mark_invalid(error_failed_to_find_key, "component", this.component, skill_id);
			this.level = lookup.levels[this.level] || mark_invalid(error_failed_to_find_key, "level", this.level, skill_id);
			var self = this;
			this.requires = map_elt(this.requires, function (link) {
				var requirement = build_relation(link.skill, link.kind);
				requirement.skill.enables.push({ skill: self, kind: requirement.kind });
				return requirement;
			});
			this.obsoletes = map_elt(this.obsoletes, function (skill_id) {
				return build_relation(skill_id, "IS_REQUIRED");
			});
			this.help_resolve_references(lookup, mark_invalid, error_failed_to_find_key, skill_id);
			if (this.level && (this.x < this.level.min || this.x > this.level.max)) {
				mark_invalid(error_skill_not_in_range, this.x, this.level, this._id);
			}
		},
		do_one_time_data_updates: function () {
			this.label_position = layout.place_label(this);
		},
	});
	function error_failed_to_find_key(type, key, skill_key) {
		return "I could not find the " + type + " " + key + ", as referenced in the skill " + skill_key + ".";
	}
	function error_skill_not_in_range(x, level, skill_key) {
		return "The skill " + skill_key + " is positioned incorrectly. It should be in level " + level._id + ", with x in the range [" + level.min + ", " + level.max + "], but x = " + x + ".";
	}
	return SkillVm;
}();

function Painter(canvas) {
	var ctx = canvas.getContext("2d");

	this.prepare = function () {
		ctx.translate(0.5, 0.5);
	};

	this.erase = function () {
		ctx.clearRect(-0.5, -0.5, canvas.width, canvas.height);
	};

	this.draw_filled_circle = function (point, radius, border_thickness, color) {
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = color;
		ctx.lineWidth = border_thickness;
		ctx.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.stroke();
	};

	this.draw_bezier_curve = function (bezierPoints, color, thickness, dash_style) {
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = thickness;
		ctx.setLineDash(dash_style);
		ctx.moveTo(bezierPoints.start.x, bezierPoints.start.y);
		ctx.bezierCurveTo(bezierPoints.cp1.x, bezierPoints.cp1.y,
			bezierPoints.cp2.x, bezierPoints.cp2.y,
			bezierPoints.end.x, bezierPoints.end.y);
		ctx.stroke();
		ctx.setLineDash([]);
	};

	this.draw_open_circle = function (center, radius) {
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = "1";
		ctx.arc(center.x, center.y, radius, 0, Math.PI, true);
		ctx.arc(center.x, center.y, radius, Math.PI, Math.PI * 2, true);
		ctx.stroke();
	};

	this.draw_text = function (text, font, where) {
		ctx.font = font;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "black";

		ctx.beginPath();
		ctx.fillText(text, where.x, where.y);
		ctx.fill();
	};

	this.draw_vertical_bar = function (x1, x2, color) {
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.fillRect(x1 - 1, -1, x2 - x1 + 3, canvas.height + 2);
	};

	this.draw_dashed_line = function (start, end) {
		ctx.beginPath();
		ctx.strokeStyle = "gray";
		ctx.setLineDash([3]);
		ctx.lineWidth = "0.5";
		ctx.moveTo(start.x, start.y);
		ctx.lineTo(end.x, end.y);
		ctx.stroke();
		ctx.setLineDash([]);
	};
}

function LayoutSpecialist() {
	var PIXELS_BETWEEN_LOGICAL_GRID_POSITIONS = { x: 120, y: 80 };
	var OFFSET_TO_GRID_ORIGIN = { x: 40, y: 120 };
	var self = this;

	this.translatePoint = function (point) {
		return {
			x: self.translate_position_x(point.x),
			y: self.translate_position_y(point.y)
		};
	};

	this.translate_position_x = function (pos) {
		return (pos * PIXELS_BETWEEN_LOGICAL_GRID_POSITIONS.x) + OFFSET_TO_GRID_ORIGIN.x;
	};

	this.translate_position_y = function (pos) {
		return (pos * PIXELS_BETWEEN_LOGICAL_GRID_POSITIONS.y) + OFFSET_TO_GRID_ORIGIN.y;
	};

	this.curve_connecting = function (start, end) {
		return new Bezier(layout.translatePoint(start), layout.translatePoint(end));
	};

	this.place_label = function (skill) {
		return {
			left: this.translate_position_x(skill.x) + 9 + "px",
			top: this.translate_position_y(skill.y) - 26 + "px",
		};
	};

	this.place_level_label = function (level) {
		var left = this.translate_position_x(Math.max(level.min, 0));
		return {
			left: left - 28 + "px",
			width: this.translate_position_x(level.max) - left + 40 + "px",
			top: 8 + "px",
		};
	};
}
var layout = new LayoutSpecialist();

var Bezier = function () {
	var X_BIAS = 0.6; // controls how much the curves should be "pulled" on the x-axis
	var Y_BIAS = 0.0; // controls how much the curves should be "pulled" on the y-axis
	function Bezier(start, end) {
		var dx = end.x - start.x;
		var dy = end.y - start.y;

		this.start = start;
		this.end = end;
		this.cp1 = { x: start.x + dx * X_BIAS, y: start.y + dy * Y_BIAS };
		this.cp2 = { x: end.x - dx * X_BIAS, y: end.y - dy * Y_BIAS };
	}
	base_class(Bezier, {
		draw: function (painter, color, thickness, dash_style) {
			if (this.start.x >= this.end.x) {
				painter.draw_bezier_curve(this, "red", thickness + 4, []);
			}
			painter.draw_bezier_curve(this, color, thickness, dash_style);
		},
		draw_debug_info: function (painter) {
			draw_indicator_lines(this, painter);
			draw_control_point(this.cp1, "cp1", painter);
			draw_control_point(this.cp2, "cp2", painter);
			draw_point_coords_label(this.start, "start", painter);
			draw_point_coords_label(this.end, "end", painter);
		},
	});

	function draw_indicator_lines(self, painter) {
		painter.draw_dashed_line(self.start, self.cp1);
		painter.draw_dashed_line(self.end, self.cp2);
	}

	function draw_control_point(where, label, painter) {
		painter.draw_open_circle(where, 4);
		draw_point_coords_label(where, label, painter);
	}

	function draw_point_coords_label(point, text, painter) {
		painter.draw_text(text + ": (" + point.x + "," + point.y + ")", "10px segui", { x: point.x + 10, y: point.y });
	}
	return Bezier;
}();

function extend_ko() {
	var MARKER_RADIUS = 6;
	var MARKER_BORDER_THICKNESS = 2;
	var CONNECTOR_THICKNESS = 3;

	var mainCanvas = document.getElementById("skillsCanvas");
	var debugCanvas = document.getElementById("debugCanvas");

	var prepare_canvas = function () {
		debugCanvas.width = mainCanvas.width;
		debugCanvas.height = mainCanvas.height;
		new Painter(mainCanvas).prepare();
		new Painter(debugCanvas).prepare();
	};

	var populate_canvas = function (parsedData) {
		var draw_context = {
			skills: parsedData.skills(),
			levels: parsedData.levels(),
			mainPainter: new Painter(mainCanvas),
			debugPainter: new Painter(debugCanvas),
		};

		draw_context.mainPainter.erase();
		draw_context.debugPainter.erase();

		for (var level_id in draw_context.levels) {
			draw_level_background(draw_context, draw_context.levels[level_id]);
		}

		for (var skill_id in draw_context.skills) {
			draw_prereq_links(draw_context.skills[skill_id], draw_context);
		}

		for (var skill_id in draw_context.skills) {
			draw_skill_marker(draw_context.mainPainter, draw_context.skills[skill_id]);
		}
	};

	function draw_level_background(draw_context, level) {
		draw_context.mainPainter.draw_vertical_bar(
			layout.translate_position_x(level.min - 0.5),
			layout.translate_position_x(level.max + 0.5),
			level.color);
	}

	function draw_skill_marker(painter, skill) {
		var where = layout.translatePoint(skill);
		painter.draw_filled_circle(where, MARKER_RADIUS, MARKER_BORDER_THICKNESS, skill.component.color);
	}

	function draw_prereq_links(skill, draw_context) {
		if (!skill.component.should_draw()) return;
		for (var i = 0, m = skill.requires.length; i < m; i++) {
			var requirement = skill.requires[i];
			var prereq = requirement.skill;
			var link = layout.curve_connecting(prereq, skill);
			link.draw(draw_context.mainPainter, skill.component.color, CONNECTOR_THICKNESS, requirement.kind.dash_style);
			link.draw_debug_info(draw_context.debugPainter);
		}
	}

	ko.bindingHandlers.stages = {
		init: function (element, value_accessor, all_bindings, view_model, binding_context) {
			prepare_canvas();
		},
		update: function (element, value_accessor, all_bindings, view_model, binding_context) {
			populate_canvas(ko.unwrap(value_accessor()));
		},
	};
}
