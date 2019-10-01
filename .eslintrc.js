module.exports = {
	extends: ["airbnb-base", "plugin:react/recommended"],
	parser: "babel-eslint",
	env: {
		browser: true
	},
	rules: {
		indent: [2, "tab"],
		"no-tabs": 0,
	},
	"settings": {
		// iqnore import that not include js/jsx file extension
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx"]
			}
		}
	},
};
