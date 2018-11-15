//to run, use:    "node node_modules\qunit\bin\qunit tests.js"

var QUnit=require('qunit');
QUnit.test("hello test", function(assert){
	var test=true;
		assert.ok(test,"message to display when test goes wrong");
});
