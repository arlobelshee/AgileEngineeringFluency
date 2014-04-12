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
				"max": 8,
				"color": "#ffe0d0"
			},
			"L_ADAPTIVE": {
				"name": "Adaptive engineering",
				"min": 9,
				"max": 12,
				"color": "#d0ffff"
			},
			"L_LEVERAGE": {
				"name": "Leverage capabilities",
				"min": 13,
				"max": 14,
				"color": "#ffe0ff"
			},
			"L_NO_DEBT": {
				"name": "Eliminate debt and change the rules",
				"min": 15,
				"max": 17,
				"color": "#e0ffe0"
			},
			"L_AWESOME": {
				"name": "Take advantage of being awesome",
				"min": 18,
				"max": 23,
				"color": "#ffffc0"
			}
		},
		"components": {
			"V_CHECK_WORK": {
				"name": "Check your work",
				"techniques": "TDD, Exploratory Testing",
				"color": "cornflowerblue"
			},
			"V_CODE": {
				"name": "Write good code",
				"techniques": "Refactoring, Design, Recovering legacy code",
				"color": "limegreen"
			},
			"V_SHIP": {
				"name": "Ship at will",
				"techniques": "Continuous Integration, Continuous Deployment, Dev Ops",
				"color": "#A825D3"
			},
			"V_REQUIREMENTS": {
				"name": "Know what to build",
				"techniques": "Stories, Vertical Decomposition, Planning",
				"color": "orange"
			},
			"V_LEARN": {
				"name": "Discipline and learning",
				"techniques": "Pairing, Mobbing",
				"color": "fuchsia"
			},
			"V_IMPROVE": {
				"name": "Improve as a Team",
				"techniques": "Teams, Retrospectives",
				"color": "#cf4040"
			},
			"V_SUSTAINABLE": {
				"name": "Not hurried",
				"techniques": "Velocity, Planning to Capacity",
				"color": "#bc8f8f"
			}
		},
		"dependency_kinds": {
			"IS_REQUIRED": {
				"name": "required",
				"description": "Doing A is nearly required to do B",
				"dash_style": [],
				"border_style": "solid"
			},
			"IS_HELPFUL": {
				"name": "helpful",
				"description": "Doing A helps a lot when doing B",
				"dash_style": [
					8
				],
				"border_style": "dashed"
			}
		},
		"skills": {
			"SK_WORK_GROUPS": {
				"name": "Matrixed pseudo-teams",
				"x": 0,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_HELP_AD_HOC": {
				"name": "Ad-hoc helping",
				"x": 0,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_COWBOY": {
				"name": "Cowboy coding",
				"x": 0,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. Programmer acting alone, without consulting or informing anyone else of their actions.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_QA": {
				"name": "Quality Assurance",
				"x": 0,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STASIS": {
				"name": "Stasis",
				"x": 0,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [],
				"description": "No improvement. May actually be regression, as \"capability decays over time\":http://web.mit.edu/nelsonr/www/Repenning%3DSterman_CMR_su01_.pdf.\n\nbq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_MANUAL_PACKAGE": {
				"name": "Manual build and package",
				"x": 0,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_BUILD_FOR_ME": {
				"name": "Build for myself",
				"x": 0,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DEATH_MARCH": {
				"name": "Death marches",
				"x": 0,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEAMS": {
				"name": "Single-assignment teams",
				"x": 1,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [
					"SK_WORK_GROUPS"
				],
				"description": "bq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nModern software development is done by teams, not by groups of individuals. A well-functioning team is more flexible and has more capacity than the sum of the individuals who make it up.\n\nThe critical elements are:\n\n* **Single assignment:** each individual is assigned to exactly one team at a time. No one is assigned to multiple teams; no one works as a loner (without a team).\n* **Cross-functional:** the team contains all skills, disciplines, or other specialties that are needed to deliver customer value to the marketplace. It can take an idea from concept to cash. Most such efforts do not require coordinating with other teams (or individuals).\n* **8 people:** 6-10 are OK. Numbers larger than this break trust formation (exceeds human family-scale trust boundary). Smaller numbers make it hard to cross-train (not enough heterogeneity).\n\nThere are 2 known-good techniques for forming these teams. Other approaches may work, but these are the ones that have been tested in hundreds of industries.\n\n**Durable teams**. Add:\n\n* **Person-centric identity:** the team is a set of people that takes on work / projects. Identity is defined by the set of people on the team. It likely has a name like \"team Bluefish\" not like \"the Security team\" (a definition based on technical component) or \"the Pay by card project team\" (team identity based on project.\n* **Durable:** when a project finishes, the same team takes on a new project--which may be entirely unrelated. Team membership does not change very often; the team should commonly go years between any changes of members.\n\n**Rotational teams**. Add:\n\n* **Part of a 100-person team:** use this when you want people to associate to the 100-person group and are willing to lose some capacity in order to gain uniformity / consistency. The larger team should not exceed about 150 people, or tribe-scale identity will not form.\n* **Constant rotation:** all teams should constantly be forming and dissolving. Rotate in 2-3 people per week, or create teams for 2-10 weeks out of a larger pool.\n* **Strong culture of fun:** the whole point of this model is to enable tribe identity. So make sure that the tribe plays together--successful teams with the rotational model play together as part of work.\n\nh2. How it helps\n\nThe team collaborates and reinforces each other.\n\n* The team can make a decision and then everyone helps everyone else hold to it.\n* The team can share skills.\n* The team members help each other and maximize overall throughput, rather than attempting to maximize their individual efficiency.\n\nh2. Mindshifts\n\nFor managers:\n\n* Humans are not resources.\n* Stop allocating specialists to projects.\n\nFor doers:\n\nNone. Support your manager.\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": ""
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SLACK": {
				"name": "Build slack in",
				"x": 2,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_OCCASIONAL": {
				"name": "Pairing on hard problems",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CHARTER": {
				"name": "Team agreement / charter",
				"x": 4,
				"y": 1,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. My team has a written agreement that describes how we work.\n\nh1. What this is\n\nThe charter is a written contract that describes the team's ways of working. It makes explicit the ways we treat each other.\n\nCharters often include:\n\n* *Working agreements*: specific rules that we agree to follow when they apply.\n* *Simple rules*: context-free rules that we will try to apply at all times.\n* *Values*: beliefs we all hold to be true and will try to express whenever possible.\n* *Aim*: the purpose for the group. What it is intended to accomplish. Optimally this is a completable objective, not an open-ended condition.\n* *Scope*: any externally-imposed constraints on our resources and decisions. We are allowed to do anything we want to within this scope. We have to ask someone else if we need to change something outside this scope.\n\nExample charter:\n\n* *Working agreements*\n** Everyone will be in the office from 9-4\n** Standup is at 10\n** We agree to make all decisions by consent unless we have explicitly chosen otherwise for a specific decision\n* *Simple rules*\n** If you are neither learning nor contributing, then go somewhere you can\n** Care and feed the team\n** First be disciplined, then be awesome\n** Be transparent, open, and honest\n** When you see a problem, fix the system that caused it.\n* *Values*\n** We trust each other\n** Work of all specialties is equal in status, value, and complexity\n** 95% of any person's behavior and results is due to the system in which they find themselves, not the person\n* *Aim*\n** Reduce bugs written, across all teams in the company, by 95%\n** Find a product like {our current vision} for which there is a market, or demonstrate that one does not exist\n** Expand {our service} to {adjacent market segment}, earning at least $xxx in revenue from that segment per month\n* *Scope*\n** No more than 10 people\n** The team must be profitable on revenues from its own products\n** Must participate in quarterly budgeting\n** The team is not allowed to do its own hiring and firing, but is expected to grow its people.\n\nOptimally, a team has one Aim, as few Scope constraints as possible, and as many values, simple rules, and working agreements as it needs right now.\n\nThe charter is always kept up to date. Items are retired as soon as they are no longer useful. They are also retired if team behavior does not match the agreement: the charter describes what we do, not what we wish we did.\n\nA charter MUST always have a working agreement about how the team will make decisions. This MUST cover the conditions required to make a decision valid (such as what constitutes quorum) and the kinds of agreement that constitute binding decisions (tradition, authority, simple majority democracy, consent, or consensus).\n\nA charter SHOULD have a set of working agreements about the schedule. My team should be explicit about its schedule assumptions.\n\nh2. How it helps\n\n* Making agreements explicit allows them to be changed. Retrospectives often update working agreements.\n* Writing a charter together helps bring a team together.\n* Reinforces the team's identity.\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nYou just need to get an initial charter in place.\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nPerform an initial chartering session. Schedule 2 hours and pick a facilitator. Then do something like:\n\n# Find common ground\n## Ask each person: remember the best working or team experience you have ever had. Just remember and picture that team.\n## Go around the team. Each person state two characteristics that made that experience awesome. Write them down.\n## Go around again. Each person pick one item from the list that is not yours. Build on or extend it in some way.\n## Ask: does anyone see any commonalities? Circle or write those. Ask: do each of us want to dedicate yourself to ensuring that this team expresses those traits?\n# Define parts of a charter; give examples.\n# Decide how we will make decisions.\n#* Define the possible decision-making mechanisms if necessary.\n#* Record this as the team's first working agreement.\n# Invite the team members to propose additional charter components.\n#* Invite them to farm the list created at the beginning. This will mostly generate simple rules and perhaps a value or two.\n#* Invite them to remember problems they've had before and see if they can make a working agreement that would fix that.\n#* Use your agreed decision-making process to agree to each one.\n#* Do not expect to \"finish.\" In particular, it can often take months before a team's true values become apparent.\n# Define the team's Aim.\n## Bring in the person who sponsored the team (usually a manager).\n## Sponsor describes his aspirations for the team.\n## Team proposes Aims one at a time. Agree to each within the team using the agreed decision-making process. Sponsor is silent.\n## After team agrees, sponsor can ratify or veto (but cannot modify). If sponsor vetoes, he can state why he vetoed but cannot propose a change that would make him happy.\n## Team chooses when to stop. Can then ask sponsor if he still wants to sponsor the team given that Aim.\n# Define the team's Scope.\n## Keep sponsor present.\n## Sponsor states any scope restrictions he is aware of. Write them down.\n## Team can ask questions or posit additional constraints. Sponsor decides which are real scope constraints. Team cannot veto, but can ask for clarification and for reasons.\n# Choose whether to launch the team.\n#* Team decides whether it wants to commit to attempting to achieve the Aim while operating within this Scope. If not, then Scope and Aim must be renegotiated before team can form.\n\nh1. Attaining fluency\n\nThe team modifies its charter any time its circumstances change. It always lives according to the current charter; the current charter is always a good representation of what matters to the team.\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nPost the charter publicly.\n\nReview it regularly. Every few days at first, then every few weeks, and eventually every month or two. Increase cadence any time the team has a major change (gain or lose a member, change scope or aim, change in key stakeholder). Decrease it as the charter stabilizes once more.\n\nIf you do retrospectives, then record any changed working agreements into the charter.\n\nEvery day (likely at standup), pick one of your simple rules. That day, everyone on the team looks for every way they can possibly exercise that simple rule. Don't correct others for breaking the rule. Instead notice when people apply the rule and celebrate a success. See how many different ways you can find to apply that one rule by the end of the day.\n\nh2. Further resources\n\nbook: Liftoff\n\n",
				"help_needed": ""
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RETROS": {
				"name": "Retrospectives with outcomes",
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
					},
					{
						"skill": "SK_CHARTER",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"description": "bq>. My team improves itself iteratively.\n\nh1. What this is\n\nWe get the team together on a regular cadence to make things better. We solve some problems and we celebrate some successes. If we are really good, we find ways to make lucky successes become repeatable.\n\nEach time we get together, we have all the right people in the room. Any decision we make is made: this group makes decisions, not recommendations. Therefore it is critical that all people impacted by a decision be present.\n\nOur retrospectives generally consist of 3 steps:\n\n# Gather data.\n# Problem solve.\n# Agree on action items and take-aways.\n\nFor example, one retro may use Timeline, then 2-4-All, then facilitator-assigned action items. Another may use +/-/keep/change, then open discussion, then everyone create one action item for yourself. These are two instances of the same structure.\n\nEach iteration we implement our action items.\n\nh2. What it is not\n\nMany teams mistakenly do the following things and think of them as retros:\n\n* *Gather data for someone else*. The retro consists of some data gathering exercise. This data is presented to someone else (a manager or a virtual team) who will then make decisions and drive change. The team does not change itself; it just asks to be changed.\n* *Run less often than once per week*. The team waits too long between retros. Too many issues will build up between retros. The meeting take much longer. The team cannot address things in a timely fashion. People become unwilling to allow an issue to wait until next time so that we can get something done this time.\n* *Don't do the action items*. If you don't execute the changes, then the retro is a waste of time. It still provides a modicum of value by letting people complain. At this point it is just a post-mortem done during the project. Shorten it or drop it altogether--or finish the action items.\n* *Invite too many people*. The most common form is to invite multiple teams just because they all report to the same higher-level manager. The team doesn't all work tightly together every hour, so they all have different problems. They will be unable to make progress on important issues because they don't share the same issues.\n* *Invite the wrong people*. This commonly happens in functional / matrixed reporting structures. A retrospective among people who happen to share the same discipline is useless, even if they report to the same manager. Retros happen within the groups that work together tightly, which are the cross-functional teams that get stuff done.\n\nh2. How it helps\n\nThe team is able to resolve its own problems. This builds team identity and empowerment: the team starts to own its own process, product, and destiny.\n\nThis is a great way to update the team's charter as the team learns. It is also a great way to make progress through the stages of proficiency.\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nh3. Build slack in\n\nTBD\n\nh3. Team agreement / charter\n\nTBD\n\nh3. Single-assignment teams\n\nTBD\n\nh2. Recipes to follow\n\nStart by doing retrospectives every other day, for 30 minutes each day. Your goal isn't to solve all of your problems, but to find a couple of actions that will make things better. You will iterate and make the next set of improvements in a couple more days.\n\nAs you gain skill, you will likely reduce frequency to once per week, and time will stay the same or reduce to 20 minutes.\n\nDo not reduce frequency to anything slower than once per week.\n\nEven if you are using iterative planning, there is no reason that your retrospective frequency must match your planning cadence. Separate them.\n\nHave the same person facilitate each of your first 3-4 retros. Retro facilitation is a skill and takes iteration to learn.\n\nThe facilitator should pick the retro activities in advance. Pick one activity for gathering data. Pick another for problem solving. And make sure to allow time for making action items. Write an agenda with timings so that you can avoid getting stuck in rat holes.\n\nh1. Attaining fluency\n\nWhen you are fluent, you will never miss a retro. Your retros will keep on agenda throughout. The action items will help with the issues discussed and will get completed soon after the meeting.\n\nEveryone on your team will be able to facilitate the retro for your team.\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nRotate the retro facilitator. Everyone on the team should have a chance to facilitate a couple of retros. People will learn from watching each other, but have to do it at least 2 times to really get it.\n\nTry a variety of techniques for each part of the agenda. Different ones will result in different types of discussion. Pick techniques from the resources below.\n\nThe key skill to learn is meeting facilitation. The facilitator is not a leader. He should not be strongly present in the meeting. If he has a strong opinion, he should hand over facilitation temporarily to someone who is not involved.\n\nMuch of facilitation involves making sure everyone is heard and that conversations don't spiral into a narrow topic that is only interesting to a couple of members. One good technique to avoid this problem is conversation fingers.\n\nAnother good structure to try is Lean Coffee. This will generally result in a broader discussion with less focus in any one area. Use it when that is useful.\n\nh2. Further resources\n\nbook: Retrospectives\n\nbook: Innovation Games\n\nwebsite: Liberating Structures\n\nwebsite: conversation fingers\n\nwebsite: Lean Coffee\n\n",
				"help_needed": ""
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LOCAL_REFACTORING": {
				"name": "Local transform-based refactoring",
				"x": 6,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. We can execute local, named transformations on our code. Rather than typing edits within a function, we execute transforms.\n\nh1. What this is\n\nThere are a set of code transformations that can be guaranteed to change code without altering its behaviors. They have names. Tools perform these transformations with guaranteed safety.\n\nThe important refactorings to learn first are:\n\n# Extract method.\n# Introduce variable.\n# Introduce parameter.\n# Introduce field.\n# Inline {anything}.\n# Rename {anything}.\n\nWe can execute these 6 refactorings using an automated tool. Each takes less than 5 seconds to perform and requires no conscious thought.\n\nh2. How it helps\n\nWe can make simple, local changes to our code without introducing errors or having to think. This raises the level of abstraction in our editing, making it easier to keep slightly more complex changes in mind at once.\n\nBoth of these effects reduce the probability of introducing bugs when editing code.\n\nh2. Mindshifts\n\nWhile typing new code is OK, editing existing code is not. Instead, use the editor to transform the code in known-safe ways.\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nBasic levels of this skill allow you to perform refactorings with labor. You will have to use menu navigation and memory aids to remember what is possible and to execute it.\n\nh2. Recipes to follow\n\nGrab a copy of the cheat sheet for your refactoring tool. Print it and tape it to your screen.\n\nEach tool offers suggestions about refactorings it can do in a particular context. Find out how your tool offers these suggestions. Find out where it shows you the hot key to use for each refactoring.\n\nWhen editing code, keep the list of refactorings in front of you. Rather than just editing code, ask yourself whether you are trying to do any of the refactorings. If so, use the tool instead of typing the code--even if that feels silly and slow.\n\nh1. Attaining fluency\n\nFluency is all about how quickly you can perform these refactorings and how little you think about the refactoring while doing so.\n\nYou should be able to perform every refactoring without using a mouse or menu (using only hot keys).\n\nh2. Measuring proficiency\n\nProficiency is the number of refactorings that you can perform without conscious thought.\n\nh2. Recipes to follow\n\nEach day, pick one refactoring to make fluent. Look up its hot key (on the sheet or via menus). Use it at least 50 times that day. Find excuses if necessary. You are trying to train finger memory.\n\nMake sure to continue to use refactorings from previous days as well. Otherwise you will lose them as you add new ones.\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": ""
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
				"obsoletes": [],
				"description": "When developers becomes responsible for the quality of their own work, it makes sense that they would want to use their programming skills to eliminate tedious repetitive manual testing.\n\nbq>. Cross-functional teams are the heart of modern software development.\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ACTION_RETROS": {
				"name": "Iterative team improvement",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_REGULARLY": {
				"name": "Code together to learn",
				"x": 7,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [
					"SK_CODE_REVIEW"
				],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_T_SHAPED": {
				"name": "T-shaped people",
				"x": 8,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DRY": {
				"name": "Don't repeat yourself",
				"x": 8,
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
				"obsoletes": [],
				"description": "bq>. Each piece of knowledge should be expressed in exactly one place. \n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\n* \"DRY in Pragmatic Programmer (book)\":http://pragmatictips.com/11\n\n",
				"help_needed": "Needs description"
			},
			"SK_GREAT_NAMES": {
				"name": "Great names",
				"x": 8,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_FIRST": {
				"name": "Test as spec",
				"x": 8,
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
				"obsoletes": [],
				"description": "bq>. The most detailed form of my spec is the set of automated tests. The tests are the spec for the code.\n\nh1. What this is\n\nI treat my tests as my detailed spec. As they are a spec, aspects of good specifications apply.\n\nThe tests:\n\n* SHOULD be written before the code,\n* MAY be extracted from legacy code if the spec is lost (or was never written),\n* MUST NOT overspecify (specify any behavior beyond the intent),\n* SHOULD NOT specify the same thing in multiple places (be duplicitive),\n* SHOULD NOT be ambiguous in either intent or verification,\n* MAY underspecify if necessary,\n* MUST be legible (intended to be read more often than written),\n* and SHOULD provide tracability (point directly at the code they specify).\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nh3. Automated developer testing\n\nThe spec requires constant maintenance as the code changes. This will only happen if the whole team of developers is creating and running tests constantly. Any test suite maintained by a third party will fall out of date, preventing its use as a spec.\n\nh3. Code together to learn\n\nLearning to write clear specifications in test form takes time and effort. This is greatly reduced if the team members code together to transfer knowledge around the team.\n\nThis is especially true if cross-role sharing happens. Developers, testers, product managers, operations people, and customer support people all have different understandings of specs and provide different insights about how to make a useful spec.\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": ""
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"name": "Collective ownership",
				"x": 9,
				"y": 1,
				"level": "L_ADAPTIVE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DONE_DEFINITION": {
				"name": "Done Definition",
				"x": 9,
				"y": 5,
				"level": "L_ADAPTIVE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_LOCALLY": {
				"name": "Learn from local cmm'ty",
				"x": 10,
				"y": 0,
				"level": "L_ADAPTIVE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_PRODUCTION": {
				"name": "Code together for productivity",
				"x": 10,
				"y": 2,
				"level": "L_ADAPTIVE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_WRITE_UNITS": {
				"name": "Code in units",
				"x": 10,
				"y": 4,
				"level": "L_ADAPTIVE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_GREAT_NAMES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TRACK_CAPACITY": {
				"name": "Track capacity",
				"x": 10,
				"y": 10,
				"level": "L_ADAPTIVE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ITERATION": {
				"name": "Iterations within plan",
				"x": 10,
				"y": 11,
				"level": "L_ADAPTIVE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PAIR_ALWAYS": {
				"name": "Code together for discipline",
				"x": 11,
				"y": 2,
				"level": "L_ADAPTIVE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STORIES": {
				"name": "Stories",
				"x": 11,
				"y": 8,
				"level": "L_ADAPTIVE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_REFLECTIVE_DESIGN": {
				"name": "Reflective design",
				"x": 12,
				"y": 3,
				"level": "L_ADAPTIVE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DRY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_GREAT_NAMES",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_UNITS": {
				"name": "Test units",
				"x": 12,
				"y": 4,
				"level": "L_ADAPTIVE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_ALL": {
				"name": "Learn from everyone",
				"x": 13,
				"y": 0,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PROCESS_EXPERIMENTS": {
				"name": "Process experiments",
				"x": 13,
				"y": 1,
				"level": "L_LEVERAGE",
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEARN_VS_PROVE": {
				"name": "Learning / Proving Distinction",
				"x": 13,
				"y": 5,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_DONE_DEFINITION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_DEPLOY": {
				"name": "Automated deploy",
				"x": 13,
				"y": 7,
				"level": "L_LEVERAGE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_STORY_CLUSTERING": {
				"name": "Story clustering",
				"x": 13,
				"y": 8,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ADAPTIVE_PLANNING": {
				"name": "Adaptive planning",
				"x": 13,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RELATIVE_ESTIMATES": {
				"name": "Relative based estimation",
				"x": 13,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"name": "Limit work to estimated capacity",
				"x": 13,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PULL": {
				"name": "Pull systems",
				"x": 13,
				"y": 12,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SESSION_MANUAL_TESTING": {
				"name": "Session-based manual testing",
				"x": 14,
				"y": 6,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_VS_PROVE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"name": "Rolling-wave planning",
				"x": 14,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LIMIT_WORK_CONTINUOUS": {
				"name": "WIP limits",
				"x": 14,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_IMPROVING_PROOF": {
				"name": "Improving levels of proof",
				"x": 15,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SESSION_MANUAL_TESTING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TEST_LEGACY": {
				"name": "Legacy code under test",
				"x": 15,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RGR": {
				"name": "Red, green, refactor",
				"x": 15,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"name": "Automated deploy verification",
				"x": 15,
				"y": 6,
				"level": "L_NO_DEBT",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_VERIFY_EXAMPLES": {
				"name": "Verify examples",
				"x": 15,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_FIX_LEGACY": {
				"name": "Legacy code recovery",
				"x": 16,
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
					},
					{
						"skill": "SK_IMPROVING_PROOF",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SIMUL_PHASES": {
				"name": "Simultaneous Phases",
				"x": 16,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_GREENFIELD": {
				"name": "Greenfield project",
				"x": 17,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"name": "Use data to determine capacity",
				"x": 17,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_M_SHAPED": {
				"name": "M-shaped people",
				"x": 18,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_EVO_DESIGN": {
				"name": "Evolutionary Design",
				"x": 18,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_FEATURE_ISOLATION": {
				"name": "Feature isolation",
				"x": 18,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_AUTO_ROLLBACK": {
				"name": "Automated rollback",
				"x": 18,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_HYPOTHESIS_STORIES": {
				"name": "Hypothesis stories",
				"x": 18,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_EXPERIENCE_FOCUS": {
				"name": "Experience focus",
				"x": 18,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_PLAN": {
				"name": "Effective pull system",
				"x": 18,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"name": "Full-product specialization",
				"x": 19,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_NO_BUGS": {
				"name": "No bugs",
				"x": 19,
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
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TELL_VS_ASK": {
				"name": "Tell / ask distinction",
				"x": 19,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"name": "Whole team business innovation",
				"x": 19,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_YAGNI": {
				"name": "YAGNI and simplest thing",
				"x": 20,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TIP": {
				"name": "Testing in production",
				"x": 20,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_SINGLE_PIECE_FLOW": {
				"name": "Single piece flow",
				"x": 20,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_CONT_PLAN",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_PROCESS_INNOVATION": {
				"name": "Useful process innovation",
				"x": 21,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_RADICAL_COLLABORATE": {
				"name": "Radical collaboration",
				"x": 21,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_TDDESIGN": {
				"name": "Test-driven design",
				"x": 21,
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
					},
					{
						"skill": "SK_TELL_VS_ASK",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_SHIP": {
				"name": "Continuous delivery",
				"x": 21,
				"y": 6,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_METRICS_FOCUS": {
				"name": "Business metric focus",
				"x": 21,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LISTEN_TO_CODE": {
				"name": "Code whispering",
				"x": 22,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_CONT_DEPLOY": {
				"name": "Continuous deployment",
				"x": 22,
				"y": 6,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			},
			"SK_LEAN_STARTUP": {
				"name": "Lean startup",
				"x": 22,
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
				"obsoletes": [],
				"description": "bq>. 1-sentence mindset quote goes here\n\nh1. What this is\n\nTBD\n\nh2. How it helps\n\nTBD\n\nh2. Mindshifts\n\nTBD\n\nh2. Measuring impact\n\nIf you are doing this well, you should see improvements in:\n\n* TBD\n\nYou may also see:\n\n* TBD\n\nh2. Side effects\n\nTBD (list side effects and practices / stages that can be used to counter them).\n\nh1. Acquiring the skill\n\nTBD\n\nh2. Role during transition\n\nTBD\n\nh2. Why these prereqs help\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh1. Attaining fluency\n\nTBD\n\nh2. Measuring proficiency\n\nTBD\n\nh2. Recipes to follow\n\nTBD\n\nh2. Further resources\n\nTBD\n\n",
				"help_needed": "Needs description"
			}
		}
	};
}
