test("board size", function(){
    var board;

    board = new TTTBoard();
    equal(board.getSize(), 3);
    board = new TTTBoard(5);
    equal(board.getSize(), 5);
});

test("board x,y to index", function(){
    var board;
    
    board = new TTTBoard();
    equal(board.xyToI(0,0), 0);
    board = new TTTBoard(5);
    equal(board.xyToI(0,0), 0);
    board = new TTTBoard(5);
    equal(board.xyToI(1,1), 6);
    equal(board.xyToI(1,0), 1);
    equal(board.xyToI(0,1), 5);
});

test("board index to x,y", function(){
    var board;
    
    board = new TTTBoard();
    deepEqual(board.iToXY(0), {x:0,y:0});
    deepEqual(board.iToXY(1), {x:1,y:0});
    deepEqual(board.iToXY(3), {x:0,y:1});
    deepEqual(board.iToXY(4), {x:1,y:1});
    deepEqual(board.iToXY(8), {x:2,y:2});
});

test("board array", function(){
    var board;

    board = new TTTBoard();
    equal(board.getArray().length, 9);
    board = new TTTBoard(4);
    equal(board.getArray().length, 16);
});

test("board valid move", function(){
    var board;

    board = new TTTBoard();
    equal(board.isValidPlay(0,0), true);
    equal(board.isValidPlay(2,2), true);
    equal(board.isValidPlay(1,2), true);
    equal(board.isValidPlay(1,1), true);
    equal(board.isValidPlay(3,3), false);
    equal(board.isValidPlay(2,3), false);
    equal(board.isValidPlay(3,2), false);
    equal(board.isValidPlay(-1,-1), false);
    equal(board.isValidPlay(0,-1), false);
    equal(board.isValidPlay(-1,0), false);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,0);
    equal(board.isValidPlay(0,0), false);
    equal(board.isValidPlay(2,2), false);
    equal(board.isValidPlay(1,2), false);
    equal(board.isValidPlay(1,1), false);
    equal(board.isValidPlay(3,3), false);
    equal(board.isValidPlay(2,3), false);
    equal(board.isValidPlay(3,2), false);
    equal(board.isValidPlay(-1,-1), false);
    equal(board.isValidPlay(0,-1), false);
    equal(board.isValidPlay(-1,0), false);
});

test("board bounds checking", function(){
    var board;

    board = new TTTBoard();
    equal(board.inBounds(0,0), true);
    equal(board.inBounds(2,2), true);
    equal(board.inBounds(1,2), true);
    equal(board.inBounds(1,1), true);
    equal(board.inBounds(3,3), false);
    equal(board.inBounds(2,3), false);
    equal(board.inBounds(3,2), false);
    equal(board.inBounds(-1,-1), false);
    equal(board.inBounds(0,-1), false);
    equal(board.inBounds(-1,0), false);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,0);
    equal(board.inBounds(0,0), true);
    equal(board.inBounds(2,2), true);
    equal(board.inBounds(1,2), true);
    equal(board.inBounds(1,1), true);
    equal(board.inBounds(3,3), false);
    equal(board.inBounds(2,3), false);
    equal(board.inBounds(3,2), false);
    equal(board.inBounds(-1,-1), false);
    equal(board.inBounds(0,-1), false);
    equal(board.inBounds(-1,0), false);
});

test("board play function", function(){
    var board;

    board = new TTTBoard(2);
    board.play(0,1);
    board.play(1,0);
    equal(board.at(0,1), 1);
    equal(board.at(1,0), 2);
    throws(function() {board.play(1,0);});

    board = new TTTBoard();
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,0);
    throws(function() {board.play(2,1);});
});

test("board current player", function(){
    var board;
    
    board = new TTTBoard(4);
    equal(board.getCurrentPlayer(), 1);
    board.play(0,0);
    equal(board.getCurrentPlayer(), 2);
    board.play(1,0);
    equal(board.getCurrentPlayer(), 1);
    board = new TTTBoard(3);
    board.play(0,0);
    board.play(1,0);
    board.play(2,0);
    board.play(0,1);
    board.play(2,1);
    board.play(1,1);
    board.play(0,2);
    board.play(2,2);
    board.play(1,2);
    equal(board.getCurrentPlayer(), 0);
});

test("board at function", function(){
    var board;
    
    board = new TTTBoard(4);
    equal(board.at(1,0), 0);
    board.play(1,0);
    equal(board.at(1,0), 1);
    equal(board.at(1,1), 0);
});

test("board reset", function(){
    var board;
    
    board = new TTTBoard(4);
    equal(board.at(1,0), 0);
    equal(board.getCurrentPlayer(), 1);
    board.play(1,0);
    equal(board.at(1,0), 1);
    equal(board.at(0,0), 0);
    equal(board.getCurrentPlayer(), 2);
    board.reset();
    equal(board.at(1,0), 0);
    equal(board.at(0,0), 0);
    equal(board.getCurrentPlayer(), 1);
});

test("board sequence detection", function(){
    var board;
    
    board = new TTTBoard();
    deepEqual(board.getSequence(0,0,{x:1,y:0}), []);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,0);
    deepEqual(board.getSequence(0,0,{x:1,y:0}), [{x:0,y:0},{x:1,y:0},{x:2,y:0}]);
    deepEqual(board.getSequence(0,1,{x:1,y:0}), [{x:0,y:1},{x:1,y:1}]);
    deepEqual(board.getSequence(0,0,{x:0,y:1}), [{x:0,y:0}]);
    deepEqual(board.getSequence(0,1,{x:0,y:-1}), [{x:0,y:1}]);
});

test("board win detection", function(){
    var board;
    
    board = new TTTBoard();
    equal(board.getWinner(), 0);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    equal(board.getWinner(), 0);
    board.play(2,0);
    equal(board.getWinner(), 1);
    
    board = new TTTBoard();
    equal(board.getWinner(), 0);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,2);
    equal(board.getWinner(), 0);
    board.play(2,1);
    equal(board.getWinner(), 2);
});

test("board win sequence", function(){
    var board;
    
    board = new TTTBoard();
    deepEqual(board.getWinningSequence(), []);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    deepEqual(board.getWinningSequence(), []);
    board.play(2,0);
    deepEqual(board.getWinningSequence(), [{x:0,y:0},{x:1,y:0},{x:2,y:0}]);
    
    board = new TTTBoard();
    deepEqual(board.getWinningSequence(), []);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    deepEqual(board.getWinningSequence(), []);
    board.play(2,2);
    deepEqual(board.getWinningSequence(), []);
    board.play(2,1);
    deepEqual(board.getWinningSequence(), [{x:0,y:1},{x:1,y:1},{x:2,y:1}]);
});

test("board empty spaces", function(){
    var board;
    
    board = new TTTBoard();
    equal(board.getEmptySpaces().length, 9);
    board.play(0,0);
    board.play(0,1);
    board.play(1,0);
    board.play(1,1);
    board.play(2,2);
    board.play(2,1);
    deepEqual(board.getEmptySpaces(), [{x:2,y:0},{x:0,y:2},{x:1,y:2}]);
});

test("board copy constructor", function(){
    var board;
    var otherBoard;
    
    board = new TTTBoard();
    otherBoard = new TTTBoard();
    deepEqual(board.getArray(), otherBoard.getArray());
    board.play(0,0);
    board.play(1,2);
    notDeepEqual(board.getArray(), otherBoard.getArray());
    otherBoard.play(0,0);
    otherBoard.play(1,2);
    deepEqual(board.getArray(), otherBoard.getArray());
    otherBoard = new TTTBoard(board);
    deepEqual(board.getArray(), otherBoard.getArray());
    board.play(1,1);
    notDeepEqual(board.getArray(), otherBoard.getArray());
    otherBoard.play(1,1);
    deepEqual(board.getArray(), otherBoard.getArray());
    board.reset();
    notDeepEqual(board.getArray(), otherBoard.getArray());
    otherBoard.reset();
    deepEqual(board.getArray(), otherBoard.getArray());
});
