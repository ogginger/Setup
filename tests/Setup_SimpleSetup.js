//Setup_SimpleSetup.js: Testing logic.

define([
	"Setup"
], function(
	Setup
) {
	return {
		"Name":"Setup_SimpleSetup",
		"Input": function() {
			return true
		},
		"Function": function( Input ) {
			Setup( Input );
			return Input;
		},
		"ExpectedOutput": true
	};
});
