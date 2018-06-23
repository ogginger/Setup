//test_Setup.js.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Setup",
  "tests/Setup_SimpleSetup"
], function(
  TestSuite,
  log,
  Setup,
  Setup_SimpleSetup
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Setup.js initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Setup" );
          
	xTestSuite.add( Setup_SimpleSetup );
  
      xTestSuite.test();
    }
  });
});
