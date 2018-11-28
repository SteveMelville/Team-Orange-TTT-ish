//to run, use:    "node node_modules\qunit\bin\qunit tests.js"

var QUnit=require('qunit');
var board=require('./Board.js');
var PClass=require('./Player.js');

QUnit.test("hello test", function(assert){
	var test=true;
		assert.ok(test,"message to display when test goes wrong");
});

QUnit.test("makeBoard",function(assert){
	newBoard= new board.Board(1,5);
	assert.ok(newBoard.getWidth()==1&&newBoard.getHeight()==5);
});
	
	
	