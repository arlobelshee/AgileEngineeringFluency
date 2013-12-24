function stages_data() {
	return {
		"levels": {
			"L_TRADITIONAL": {
				"name": "Traditional done well",
				"min": -1,
				"max": 5,
				"color": "#e0e0ff"
			},
			"L_CORE": {
				"name": "Core modern engineering",
				"min": 6,
				"max": 11,
				"color": "#ffe0d0"
			},
			"L_LEVERAGE": {
				"name": "Leverage new capabilities",
				"min": 12,
				"max": 13,
				"color": "#ffe0ff"
			},
			"L_NO_DEBT": {
				"name": "Eliminate debt and change the rules",
				"min": 14,
				"max": 16,
				"color": "#e0ffe0"
			},
			"L_AWESOME": {
				"name": "Take advantage of being awesome",
				"min": 17,
				"max": 22,
				"color": "#ffffc0"
			}
		},
		"components": {
			"V_CHECK_WORK": {
				"name": "Check your work",
				"color": "cornflowerblue"
			},
			"V_CODE": {
				"name": "Write good code",
				"color": "limegreen"
			},
			"V_SHIP": {
				"name": "Ship",
				"color": "mediumpurple"
			},
			"V_REQUIREMENTS": {
				"name": "Know what to build",
				"color": "orange"
			},
			"V_LEARN": {
				"name": "Discipline and learning",
				"color": "fuchsia"
			},
			"V_IMPROVE": {
				"name": "Improve as a Team",
				"color": "darkred"
			},
			"V_SUSTAINABLE": {
				"name": "Not hurried",
				"color": "rosybrown"
			}
		},
		"dependency_kinds": {
			"IS_REQUIRED": {
				"name": "required",
				"description": "Doing A is nearly required to do B",
				"dash_style": []
			},
			"IS_HELPFUL": {
				"name": "helpful",
				"description": "Doing A helps a lot when doing B",
				"dash_style": [
					8
				]
			}
		},
		"skills": {
			"SK_HELP_AD_HOC": {
				"name": "Ad-hoc helping",
				"x": 0,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [],
				"description": ""
			},
			"SK_COWBOY": {
				"name": "Cowboy coding",
				"x": 0,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [],
				"description": ""
			},
			"SK_QA": {
				"name": "Quality Assurance",
				"x": 0,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [],
				"description": ""
			},
			"SK_STASIS": {
				"name": "Stasis",
				"x": 0,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"description": ""
			},
			"SK_MANUAL_PACKAGE": {
				"name": "Manual build and package",
				"x": 0,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [],
				"description": ""
			},
			"SK_BUILD_FOR_ME": {
				"name": "Build for myself",
				"x": 0,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [],
				"description": ""
			},
			"SK_DEATH_MARCH": {
				"name": "Death marches",
				"x": 0,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": ""
			},
			"SK_TEAMS": {
				"name": "Single-assignment teams",
				"x": 1,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"description": ""
			},
			"SK_TEAM_LEADS": {
				"name": "Team leads",
				"x": 1,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_BDUF": {
				"name": "Big design up front",
				"x": 1,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_COWBOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_DEV_CHECK": {
				"name": "Developer Checking",
				"x": 1,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_QA",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_CENTRAL_PROCESS": {
				"name": "Centralized improvement",
				"x": 1,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_STASIS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_AUTO_PACKAGE": {
				"name": "Automated package",
				"x": 1,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_MANUAL_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_REQUIREMENTS": {
				"name": "Product requirements",
				"x": 1,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_BUILD_FOR_ME",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_WATERFALL_MILESTONES": {
				"name": "Waterfall milestones",
				"x": 1,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_DEATH_MARCH",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SIT_TOGETHER": {
				"name": "Sit together",
				"x": 2,
				"y": 1,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_CODE_REVIEW": {
				"name": "Code review",
				"x": 2,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_FORMAL_TRAINING": {
				"name": "Formal training",
				"x": 2,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_DESIGN_PATTERNS": {
				"name": "Pattern-oriented design",
				"x": 2,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_BDUF",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_POST_MORTEM": {
				"name": "Post-mortems",
				"x": 2,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_CENTRAL_PROCESS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SLACK": {
				"name": "Build slack in",
				"x": 2,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": ""
			},
			"SK_PAIR_OCCASIONAL": {
				"name": "Pairing to solve hard problems",
				"x": 3,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_CODE_PREVIEW": {
				"name": "Code preview",
				"x": 3,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_B_ARCHI_UF": {
				"name": "Just architecture up front",
				"x": 3,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SMALL_SPECS": {
				"name": "Small specs",
				"x": 3,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REQUIREMENTS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_PREDICTIVE_WITH_SMELLS": {
				"name": "Smell-based predictive design",
				"x": 4,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_B_ARCHI_UF",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_ITERATED_PREDICTIVE": {
				"name": "Iterated predictive design",
				"x": 5,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_PREDICTIVE_WITH_SMELLS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_RETROS": {
				"name": "Retrospectives",
				"x": 6,
				"y": 0,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SHARED_CODE": {
				"name": "Shared code responsibility",
				"x": 6,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_PAIR_REGULARLY": {
				"name": "Pairing to learn",
				"x": 6,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_LOCAL_REFACTORING": {
				"name": "Local refactoring",
				"x": 6,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [],
				"description": ""
			},
			"SK_AUTO_DEV_TEST": {
				"name": "Automated developer testing",
				"x": 6,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_DEV_CHECK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_TRACK_CAPACITY": {
				"name": "Track capacity",
				"x": 6,
				"y": 10,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": ""
			},
			"SK_ITERATION": {
				"name": "Iterations with self",
				"x": 6,
				"y": 11,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_WATERFALL_MILESTONES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_ACTION_RETROS": {
				"name": "Action-based retrospectives",
				"x": 7,
				"y": 0,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_T_SHAPED": {
				"name": "T-shaped people",
				"x": 7,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_DRY": {
				"name": "Don't repeat yourself",
				"x": 7,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_AUTO_BUILD_VERIFY": {
				"name": "Automated build verification",
				"x": 7,
				"y": 7,
				"level": "L_CORE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"name": "Collective ownership",
				"x": 8,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_T_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_PAIR_PRODUCTION": {
				"name": "Pairing for productivity",
				"x": 9,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_WRITE_UNITS": {
				"name": "Code in units",
				"x": 9,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_TEST_FIRST": {
				"name": "Test first",
				"x": 9,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_PAIR_ALWAYS": {
				"name": "Pairing for discipline",
				"x": 10,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_STORIES": {
				"name": "Stories",
				"x": 10,
				"y": 8,
				"level": "L_CORE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_REFLECTIVE_DESIGN": {
				"name": "Reflective design",
				"x": 11,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DRY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_TEST_UNITS": {
				"name": "Test units",
				"x": 11,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WRITE_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_AUTO_DEPLOY": {
				"name": "Automated deploy",
				"x": 12,
				"y": 6,
				"level": "L_LEVERAGE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_STORY_CLUSTERING": {
				"name": "Story clustering",
				"x": 12,
				"y": 8,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_ADAPTIVE_PLANNING": {
				"name": "Adaptive planning",
				"x": 12,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_RELATIVE_ESTIMATES": {
				"name": "Relative based estimation",
				"x": 12,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"name": "Limit work to estimated capacity",
				"x": 12,
				"y": 11,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_PULL": {
				"name": "Pull systems",
				"x": 12,
				"y": 12,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"description": ""
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"name": "Rolling-wave planning",
				"x": 13,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_LIMIT_WORK_CONTINUOUS": {
				"name": "WIP limits",
				"x": 13,
				"y": 11,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_LEARN_LOCALLY": {
				"name": "Learn from local cmm'ty",
				"x": 14,
				"y": 0,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_TEST_LEGACY": {
				"name": "Legacy code under test",
				"x": 14,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_RGR": {
				"name": "Red, green, refactor",
				"x": 14,
				"y": 5,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"name": "Automated deploy verification",
				"x": 14,
				"y": 6,
				"level": "L_NO_DEBT",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_VERIFY_EXAMPLES": {
				"name": "Verify examples",
				"x": 14,
				"y": 7,
				"level": "L_NO_DEBT",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_LEARN_ALL": {
				"name": "Learn from everyone",
				"x": 15,
				"y": 0,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_PROCESS_EXPERIMENTS": {
				"name": "Process experiments",
				"x": 15,
				"y": 1,
				"level": "L_NO_DEBT",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_FIX_LEGACY": {
				"name": "Legacy code recovery",
				"x": 15,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TEST_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SIMUL_PHASES": {
				"name": "Simultaneous Phases",
				"x": 15,
				"y": 9,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_GREENFIELD": {
				"name": "Greenfield project",
				"x": 16,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [],
				"description": ""
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"name": "Use data to determine capacity",
				"x": 16,
				"y": 10,
				"level": "L_NO_DEBT",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_RELATIVE_ESTIMATES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_MOBS": {
				"name": "Mobbing",
				"x": 17,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_M_SHAPED": {
				"name": "M-shaped people",
				"x": 17,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_EVO_DESIGN": {
				"name": "Evolutionary Design",
				"x": 17,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_FIX_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_GREENFIELD",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_FEATURE_ISOLATION": {
				"name": "Feature isolation",
				"x": 17,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_AUTO_ROLLBACK": {
				"name": "Automated rollback",
				"x": 17,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_HYPOTHESIS_STORIES": {
				"name": "Hypothesis stories",
				"x": 17,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_EXPERIENCE_FOCUS": {
				"name": "Experience focus",
				"x": 17,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_CONT_PLAN": {
				"name": "Effective pull system",
				"x": 17,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"name": "Full-product specialization",
				"x": 18,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_MOBS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_NO_BUGS": {
				"name": "No bugs",
				"x": 18,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_MOBS",
						"kind": "IS_HELPFUL"
					}
				],
				"description": ""
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"name": "Whole team business innovation",
				"x": 18,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_YAGNI": {
				"name": "YAGNI and simplest thing",
				"x": 19,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_TIP": {
				"name": "Testing in production",
				"x": 19,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_HYPOTHESIS_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_SINGLE_PIECE_FLOW": {
				"name": "Single piece flow",
				"x": 19,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_CONT_PLAN",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_PROCESS_INNOVATION": {
				"name": "Useful process innovation",
				"x": 20,
				"y": 0,
				"level": "L_AWESOME",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_PROCESS_EXPERIMENTS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_ALL",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_RADICAL_COLLABORATE": {
				"name": "Radical collaboration",
				"x": 20,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SINGLE_PIECE_FLOW",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_TDDESIGN": {
				"name": "Test-driven design",
				"x": 20,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_CONT_SHIP": {
				"name": "Continuous delivery",
				"x": 20,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FEATURE_ISOLATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_METRICS_FOCUS": {
				"name": "Business metric focus",
				"x": 20,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_LISTEN_TO_CODE": {
				"name": "Code whispering",
				"x": 21,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_YAGNI",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TDDESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_CONT_DEPLOY": {
				"name": "Continuous deployment",
				"x": 21,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_CONT_SHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_ROLLBACK",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			},
			"SK_LEAN_STARTUP": {
				"name": "Lean startup",
				"x": 21,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_METRICS_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WHOLE_TEAM_BUSINESS",
						"kind": "IS_REQUIRED"
					}
				],
				"description": ""
			}
		}
	};
}
