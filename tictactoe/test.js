test( "chooses correct moves", function() {
    expect(4);
    var board;
    
    board = [[0,0,0],[0,1,0],[0,0,0]];
    deepEqual(getBestMove(board,2), {x:0,y:0});
    
    board = [[2,0,0],[0,1,0],[1,0,0]];
    deepEqual(getBestMove(board,2), {x:0,y:2});
    
    board = [[0,0,0],[0,0,0],[0,0,1]];
    deepEqual(getBestMove(board,2), {x:1,y:1});
    
    board = [[1,0,0],[0,0,0],[0,0,0]];
    deepEqual(getBestMove(board,2), {x:1,y:1});
});