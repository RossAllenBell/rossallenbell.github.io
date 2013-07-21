test("ai predict outcome", function(){
    var board = new TTTBoard();
    var ai = new TTTAI();
    
    board.play(0,0);
    board.play(1,1);
    board.play(0,2);
    deepEqual(ai.predictOutcome(board, 1), {win:0,loss:0});
    deepEqual(ai.predictOutcome(board, 2), {win:0,loss:0});
    
    board.reset();
    board.play(1,1);
    board.play(0,0);
    board.play(2,0);
    board.play(1,0);
    deepEqual(ai.predictOutcome(board, 1), {win:1,loss:0});
    deepEqual(ai.predictOutcome(board, 2), {win:0,loss:1});
    
    board.reset();
    board.play(0,0);
    board.play(1,1);
    board.play(2,2);
    board.play(0,2);
    deepEqual(ai.predictOutcome(board, 1), {win:1,loss:0});
    deepEqual(ai.predictOutcome(board, 2), {win:0,loss:1});
    
    board.reset();
    board.play(0,0);
    board.play(1,1);
    board.play(1,0);
    board.play(2,0);
    board.play(0,1);
    deepEqual(ai.predictOutcome(board, 1), {win:0,loss:1});
    deepEqual(ai.predictOutcome(board, 2), {win:1,loss:0});
});

test("ai score move", function(){
    var board = new TTTBoard();
    var ai = new TTTAI();
    
    board.play(1,1);
    board.play(0,0);
    board.play(2,0);
    board.play(1,0);
    equal(ai.scoreMove(board, {x:0,y:2}, 1), 1);
    equal(ai.scoreMove(board, {x:0,y:2}, 2), -1);
    equal(ai.scoreMove(board, {x:2,y:1}, 1), 1);
    equal(ai.scoreMove(board, {x:2,y:1}, 2), -1);
    equal(ai.scoreMove(board, {x:1,y:2}, 1), 0);
    equal(ai.scoreMove(board, {x:1,y:2}, 2), 0);
    
    board.reset();
    board.play(1,0);
    board.play(1,1);
    board.play(1,2);
    board.play(0,0);
    equal(ai.scoreMove(board, {x:0,y:2}, 1), -1);
    equal(ai.scoreMove(board, {x:0,y:2}, 2), 1);
    equal(ai.scoreMove(board, {x:2,y:2}, 1), -1);
    equal(ai.scoreMove(board, {x:2,y:2}, 2), 1);
    board.play(2,2);
    equal(ai.scoreMove(board, {x:2,y:1}, 1), 1);
    equal(ai.scoreMove(board, {x:2,y:1}, 2), -1);
    equal(ai.scoreMove(board, {x:2,y:0}, 1), 1);
    equal(ai.scoreMove(board, {x:2,y:0}, 2), -1);
});

test("ai best move", function(){
    var board = new TTTBoard();
    var ai = new TTTAI();
    
    board.play(0,0);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    board.play(2,2);
    deepEqual(ai.getBestMove(board), {x:1,y:0});
    board.play(1,0);
    deepEqual(ai.getBestMove(board), {x:1,y:2});
    board.play(1,2);
    deepEqual(ai.getBestMove(board), {x:0,y:2});
    board.play(0,2);
    deepEqual(ai.getBestMove(board), {x:2,y:0});
    board.play(2,0);
    deepEqual(ai.getBestMove(board), {x:2,y:1});
    board.play(2,1);
    deepEqual(ai.getBestMove(board), {x:0,y:1});
    board.play(0,1);
    equal(ai.getBestMove(board), undefined);
    
    board.reset();
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:0,y:0});
    board.play(0,0);
    deepEqual(ai.getBestMove(board), {x:1,y:0});
    board.play(1,0);
    deepEqual(ai.getBestMove(board), {x:1,y:2});
    board.play(1,2);
    deepEqual(ai.getBestMove(board), {x:0,y:1});
    board.play(0,1);
    deepEqual(ai.getBestMove(board), {x:2,y:1});
    board.play(2,1);
    deepEqual(ai.getBestMove(board), {x:2,y:0});
    board.play(2,0);
    deepEqual(ai.getBestMove(board), {x:0,y:2});
    board.play(0,2);
    deepEqual(ai.getBestMove(board), {x:2,y:2});
    board.play(2,2);
    deepEqual(ai.getBestMove(board), undefined);
    
    board.reset();
    board.play(0,0);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:1,y:0});
    board.play(1,0);
    deepEqual(ai.getBestMove(board), {x:2,y:0});
    board.play(2,0);
    deepEqual(ai.getBestMove(board), {x:0,y:2});
    board.play(0,2);
    deepEqual(ai.getBestMove(board), {x:0,y:1});
    board.play(0,1);
    deepEqual(ai.getBestMove(board), {x:2,y:1});
    board.play(2,1);
    deepEqual(ai.getBestMove(board), {x:1,y:2});
    board.play(1,2);
    deepEqual(ai.getBestMove(board), {x:2,y:2});
    board.play(2,2);
    deepEqual(ai.getBestMove(board), undefined);
    
    board.reset();
    board.play(1,0);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:0,y:0});
    board.play(0,0);
    deepEqual(ai.getBestMove(board), {x:2,y:0});
    board.play(2,0);
    deepEqual(ai.getBestMove(board), {x:0,y:2});
    board.play(0,2);
    deepEqual(ai.getBestMove(board), {x:0,y:1});
    board.play(0,1);
    deepEqual(ai.getBestMove(board), {x:2,y:1});
    board.play(2,1);
    deepEqual(ai.getBestMove(board), {x:1,y:2});
    board.play(1,2);
    deepEqual(ai.getBestMove(board), {x:2,y:2});
    board.play(2,2);
    deepEqual(ai.getBestMove(board), undefined);
    
    board.reset();
    board.play(2,2);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:0,y:0});
    
    board.reset();
    board.play(0,2);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:0,y:0});
    
    board.reset();
    board.play(2,0);
    deepEqual(ai.getBestMove(board), {x:1,y:1});
    board.play(1,1);
    deepEqual(ai.getBestMove(board), {x:0,y:0});
});