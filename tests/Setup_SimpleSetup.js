//Setup_SimpleSetup.js: Testing logic.

define([
	"Setup"
], function(
	Setup
) {
	return {
		"Name":"Setup_SimpleSetup",
		"Input": function() {
			return function() {
				return true;
			};
		},
		"Function": Setup,
		"ExpectedOutput": true
	};
});
