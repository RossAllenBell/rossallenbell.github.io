function TicTacToe() {
    
    var board = [];
    var currentPlayer = 0;
    var computer = true;
    
    function reset() {
        board = [[0,0,0],[0,0,0],[0,0,0]];
        currentPlayer = 1;
        
        $('body').empty();
        $('body').append(createNewGameBoard());
        
        updateBoard();
    };
    
    function toggleComputer() {
        computer = !computer;
        $('computerCheckbox').prop('checked', computer);
        if (computer && currentPlayer === 2 && getAvailableMoves(board).length > 0) {
            setTimeout(computerMove, 0);
        }
    };
    
    function clicked(x, y) {
        if (board[x][y] === 0 && getWinner(board) === 0) {
            board[x][y] = currentPlayer;
            currentPlayer = nextPlayer(currentPlayer);
            updateBoard();
            
            if (computer && currentPlayer === 2 && getAvailableMoves(board).length > 0 && getWinner(board) === 0) {
                setTimeout(computerMove, 0);
            }
        }
    };
    
    function updateBoard() {
        for (var y=0; y<3; y++) {
            for (var x=0; x<3; x++) {
                var cell = $('#cell_' + x + '-' + y);
                cell.html(playerNumberToSymbol(board[x][y]));
            }
        }
        
        var statusText = '';
        var winner = getWinner(board);
        if (getWinner(board) !== 0) {
            statusText = 'Winner: ' + playerNumberToSymbol(winner);
        } else {
            if (getAvailableMoves(board).length > 0) {
                statusText = 'Current Player: ' + playerNumberToSymbol(currentPlayer);
            } else {
                statusText = 'Draw';
            }
        }
        $('#statusSpan').html(statusText);
    }

    function computerMove() {
        var move = getBestMove(board, currentPlayer);
        clicked(move.x, move.y);
    }

    function createNewGameBoard() {
        var boardDiv = $('<div>', {id: 'boardDiv'});
        var resetButton = $('<button>', {id: 'resetButton', text: 'Reset'});
        resetButton.click(reset);
        boardDiv.append(resetButton);
        boardDiv.append($('<br>'));
        var computerCheckbox = $('<input/>', {id: 'computerCheckbox', type: 'checkbox', checked: computer});
        computerCheckbox.click(toggleComputer);
        var computerLabel = $('<label />').html('Computer Player \'O\'').prepend(computerCheckbox);
        boardDiv.append(computerLabel);
        boardDiv.append($('<br>'));
        var statusSpan = $('<span>', {id: 'statusSpan'});
        boardDiv.append(statusSpan);
        var boardTable = $('<table>', {id: 'boardTable'});
        boardDiv.append(boardTable);
        for (var y=0; y<3; y++) {
            var row = $('<tr>', {id: 'row' + y});
            boardTable.append(row);
            for (var x=0; x<3; x++) {
                var cell = $('<td>', {id: 'cell_' + x + '-' + y});
                cell.click({x:x,y:y}, function(e){clicked(e.data.x,e.data.y);});
                row.append(cell);
            }
        }        
        return boardDiv;
    }
    
    reset();
    
}

function playerNumberToSymbol(playerNumber) {
    switch (playerNumber) {
        case 1: return 'X';
        case 2: return 'O';
        default: return '&nbsp;';
    }
}

function getBestMove(aBoard, playerNumber) {
    var moves = getAvailableMoves(aBoard);
    
    var bestMove = undefined;
    if (moves.length === 0) {
        return bestMove;
    }
    
    var bestScore = undefined;
    for (var i in moves) {
        var score = scoreMove(aBoard, moves[i], playerNumber);
        if (typeof bestScore === 'undefined' || score > bestScore) {
            bestScore = score;
            bestMove = moves[i];
        }
    }
    
    return bestMove;
}

function nextPlayer(currentPlayer) {
    return (currentPlayer % 2) + 1;
}

function scoreMove(aBoard, move, playerNumber){
    var potentialBoard = createNewBoardWithMove(aBoard, move, playerNumber);
    var outcomes = countOutcomes(potentialBoard, playerNumber, nextPlayer(playerNumber));
    return outcomes.win - outcomes.loss;
}

function countOutcomes(aBoard, playerNumber, nextPlayerNumber) {
    var winner = getWinner(aBoard);
    if (winner === 0) {
        var nextMove = getBestMove(aBoard, nextPlayerNumber);
        if (typeof nextMove === 'undefined') {
            return {win:0,loss:0};
        }
        var newBoard = createNewBoardWithMove(aBoard, nextMove, nextPlayerNumber);
        return countOutcomes(newBoard, playerNumber, nextPlayer(nextPlayerNumber));
    } else if (winner === playerNumber) {
        return {win:1,loss:0};
    } else {
        return {win:0,loss:1};
    }
}

function getChildBoards(aBoard, playerNumber) {
    var moves = getAvailableMoves(aBoard);
    var newBoards = [];
    for (var i in moves) {
        newBoards.push(createNewBoardWithMove(aBoard, moves[i], playerNumber));
    }
    return newBoards;
}

function getWinner(aBoard) {
    winner = 0;
    
    //there's only 8 possibilities, so let's not over-complicate this with procedural detection
    
    //rows
    if      (aBoard[0][0] !== 0 && aBoard[0][0] === aBoard[1][0] && aBoard[0][0] === aBoard[2][0]) winner = aBoard[0][0];
    else if (aBoard[0][1] !== 0 && aBoard[0][1] === aBoard[1][1] && aBoard[0][1] === aBoard[2][1]) winner = aBoard[0][1];
    else if (aBoard[0][2] !== 0 && aBoard[0][2] === aBoard[1][2] && aBoard[0][2] === aBoard[2][2]) winner = aBoard[0][2];
    
    //columns
    else if (aBoard[0][0] !== 0 && aBoard[0][0] === aBoard[0][1] && aBoard[0][0] === aBoard[0][2]) winner = aBoard[0][0];
    else if (aBoard[1][0] !== 0 && aBoard[1][0] === aBoard[1][1] && aBoard[1][0] === aBoard[1][2]) winner = aBoard[1][0];
    else if (aBoard[2][0] !== 0 && aBoard[2][0] === aBoard[2][1] && aBoard[2][0] === aBoard[2][2]) winner = aBoard[2][0];
    
    //diags
    else if (aBoard[0][0] !== 0 && aBoard[0][0] === aBoard[1][1] && aBoard[0][0] === aBoard[2][2]) winner = aBoard[0][0];
    else if (aBoard[0][2] !== 0 && aBoard[0][2] === aBoard[1][1] && aBoard[0][2] === aBoard[2][0]) winner = aBoard[0][2];
    
    return winner;
}

function createNewBoardWithMove(aBoard, move, playerNumber) {
    var newBoard= JSON.parse(JSON.stringify(aBoard));
    newBoard[move.x][move.y] = playerNumber;
    return newBoard;
}

function getAvailableMoves(aBoard) {
    var moves = [];
    for (var y=0; y<3; y++) {
        for (var x=0; x<3; x++) {
            if (aBoard[x][y] === 0) {
                moves.push({x:x,y:y});
            }
        }
    }
    return moves;
}