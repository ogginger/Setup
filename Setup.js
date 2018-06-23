//Setup.js: Functional Logic.

//if the input is of type function then, run the function and set the input as the output.
define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	if ( _.isFunction( Input ) ) {
		Input = Input();
	}
  };
});
