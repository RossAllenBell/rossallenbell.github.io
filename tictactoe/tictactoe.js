function TTTBoard(boardSizeOrBoard) {
    
    this.reset = function() {
        this.board = [];
        for ( var i = 0; i < this.size * this.size; i++) {
            this.board.push(0);
        }
        
        return this;
    };
    
    this.size;
    this.board = [];
    
    if (typeof boardSizeOrBoard === 'undefined') {
        this.size = 3;
        this.reset();
    } else if (typeof boardSizeOrBoard === 'number') {
        this.size = boardSizeOrBoard;
        this.reset();
    } else if (typeof boardSizeOrBoard === 'object') {
        this.size = boardSizeOrBoard.getSize();
        this.board = JSON.parse(JSON.stringify(boardSizeOrBoard.getArray()));
    }
    
    this.getArray = function() {
        return this.board;
    };
    
    this.getSize = function() {
        return this.size;
    };
    
    this.inBounds = function(x, y) {
        return x >= 0 && y >= 0 && x < this.size && y < this.size;
    };
    
    this.isValidPlay = function(x, y) {
        return this.inBounds(x, y) && this.at(x, y) === 0 && this.getWinner() === 0;
    };
    
    this.getCurrentPlayer = function() {
        if (this.board.indexOf(0) === -1) {
            return 0;
        }
        
        return this.board.reduce(function(prev, curr) {
            if (curr === 1) {
                return prev + 1;
            }
            if (curr === 2) {
                return prev - 1;
            }
            return prev;
        }, 1);
    };
    
    this.getEmptySpaces = function() {
        return this.board.map(function(space, index) {
            return this.iToXY(index);
        }, this).filter(function(val, index) {
            return this.board[index] === 0;
        }, this);
    };
    
    this.iToXY = function(i) {
        return {
            x : i % this.size,
            y : Math.floor(i / this.size)
        };
    };
    
    this.play = function(x, y) {
        if (this.at(x, y) !== 0) {
            throw "Cannot play on a space already occupied";
        }
        
        if (this.getWinner() !== 0) {
            throw "Cannot play on a won board";
        }
        
        this.board[this.xyToI(x, y)] = this.getCurrentPlayer();
        
        return this;
    };
    
    this.at = function(x, y) {
        return this.board[this.xyToI(x, y)];
    };
    
    this.xyToI = function(x, y) {
        return x + (y * this.size);
    };
    
    this.getSequence = function(x, y, dir) {
        var seq = [];
        var curr = {
            x : x,
            y : y
        };
        
        if (this.inBounds(curr.x, curr.y) && this.at(curr.x, curr.y) !== 0) {
            seq.push(curr);
            
            while ((curr = {
                x : curr.x + dir.x,
                y : curr.y + dir.y
            }) && this.inBounds(curr.x, curr.y) && this.at(curr.x, curr.y) === this.at(x, y)) {
                seq.push(curr);
            }
        }
        
        return seq;
    };
    
    this.getWinningSequence = function() {
        for ( var x = 0; x < this.size; x++) {
            for ( var y = 0; y < this.size; y++) {
                var dirs = getSequenceDirs();
                for ( var i in dirs) {
                    var seq = this.getSequence(x, y, dirs[i]);
                    if (seq.length === this.size) {
                        return seq;
                    }
                }
            }
        }
        
        return [];
    };
    
    this.getWinner = function() {
        var winSeq = this.getWinningSequence();
        return winSeq.length === this.size ? this.at(winSeq[0].x, winSeq[0].y) : 0;
    };
    
    function getSequenceDirs() {
        return [ {
            x : 1,
            y : -1
        }, {
            x : 1,
            y : 0
        }, {
            x : 1,
            y : 1
        }, {
            x : 0,
            y : 1
        } ];
    }
    
}

function TTTAI() {
    
    this.getBestMove = function(aBoard) {
        var moves = aBoard.getEmptySpaces();
        
        var bestMove = undefined;
        if (moves.length === 0) {
            return bestMove;
        } else if (moves.length >= 8 && aBoard.getSize() === 3) {
            // performance optimization for standard 3x3 play
            return aBoard.at(1, 1) === 0 ? {
                x : 1,
                y : 1
            } : {
                x : 0,
                y : 0
            };
        }
        
        var bestScore = undefined;
        for ( var i in moves) {
            var score = this.scoreMove(aBoard, moves[i], aBoard.getCurrentPlayer());
            if (score === 1) {
                // 1 is best you can achieve
                return moves[i];
            } else if (typeof bestScore === 'undefined' || score > bestScore) {
                bestScore = score;
                bestMove = moves[i];
            }
        }
        
        return bestMove;
    };
    
    this.scoreMove = function(aBoard, move, playerInQuestion) {
        var newBoard = new TTTBoard(aBoard).play(move.x, move.y);
        var outcome = this.predictOutcome(newBoard, playerInQuestion);
        return outcome.win - outcome.loss;
    };
    
    this.predictOutcome = function(aBoard, playerInQuestion) {
        switch (aBoard.getWinner()) {
            case 0:
                var move = this.getBestMove(aBoard);
                if (typeof move === 'undefined') {
                    return {
                        win : 0,
                        loss : 0
                    };
                }
                return this.predictOutcome(new TTTBoard(aBoard).play(move.x, move.y), playerInQuestion);
            case playerInQuestion:
                return {
                    win : 1,
                    loss : 0
                };
            default:
                return {
                    win : 0,
                    loss : 1
                };
        }
    };
    
}

function TTTView(aTTTController, size) {
    
    this.controller = aTTTController;
    
    this.boardDiv = $('<div>', {
        id : 'boardDiv'
    });
    $('body').append(this.boardDiv);
    
    this.resetButton = $('<button>', {
        id : 'resetButton',
        text : 'Reset'
    });
    this.resetButton.click(this.controller, function(event) {
        event.data.resetClicked();
    });
    this.boardDiv.append(this.resetButton);
    this.boardDiv.append($('<br>'));
    
    this.computerCheckbox = $('<input/>', {
        id : 'computerCheckbox',
        type : 'checkbox',
        checked : true
    });
    this.computerCheckbox.click(this.controller, function(event) {
        event.data.setComputerPlayer(this.checked);
    });
    this.boardDiv.append($('<label />').html('Computer Player \'O\'').prepend(this.computerCheckbox));
    this.boardDiv.append($('<br>'));
    
    this.statusSpan = $('<span>', {
        text : 'Current Player: X',
        id : 'statusSpan'
    });
    this.boardDiv.append(this.statusSpan);
    
    this.boardTable = $('<table>', {
        id : 'boardTable'
    });
    this.boardDiv.append(this.boardTable);
    for ( var y = 0; y < size; y++) {
        var row = $('<tr>', {
            id : 'row' + y
        });
        this.boardTable.append(row);
        for ( var x = 0; x < size; x++) {
            var cell = $('<td>', {
                id : 'cell_' + x + '-' + y
            });
            cell.click({
                controller : this.controller,
                x : x,
                y : y
            }, function(event) {
                event.data.controller.tileClicked(event.data.x, event.data.y);
            });
            row.append(cell);
        }
    }
    
    this.update = function(aBoard) {
        for ( var y = 0; y < aBoard.getSize(); y++) {
            for ( var x = 0; x < aBoard.getSize(); x++) {
                var cell = $('#cell_' + x + '-' + y);
                cell.html(this.playerNumberToSymbol(aBoard.at(x, y)));
            }
        }
        
        var statusText = '';
        var winner = aBoard.getWinner();
        if (winner !== 0) {
            statusText = 'Winner: ' + this.playerNumberToSymbol(winner);
        } else {
            if (aBoard.getEmptySpaces().length > 0) {
                statusText = 'Current Player: ' + this.playerNumberToSymbol(aBoard.getCurrentPlayer());
            } else {
                statusText = 'Draw';
            }
        }
        this.statusSpan.html(statusText);
    };
    
    this.playerNumberToSymbol = function(playerNumber) {
        switch (playerNumber) {
            case 1:
                return 'X';
            case 2:
                return 'O';
            default:
                return '';
        }
    };
    
    this.destroy = function() {
        this.boardDiv.remove();
    };
    
}

function TTTController() {
    
    this.board = new TTTBoard();
    this.ai = new TTTAI();
    this.view = new TTTView(this, this.board.getSize());
    this.computerPlaying = true;
    
    this.resetClicked = function() {
        this.board.reset();
        this.view.update(this.board);
    };
    
    this.setComputerPlayer = function(isComputerPlaying) {
        this.computerPlaying = isComputerPlaying;
        if (this.computerPlaying && this.board.getCurrentPlayer() === 2) {
            this.computerMove();
        }
    };
    
    this.tileClicked = function(x, y) {
        if (this.board.isValidPlay(x, y) && (!this.computerPlaying || this.board.getCurrentPlayer() !== 2)) {
            this.board.play(x, y);
            this.view.update(this.board);
            
            if (this.computerPlaying && this.board.getCurrentPlayer() === 2) {
                this.computerMove();
            }
        }
    };
    
    this.computerMove = function() {
        // set a timeout so the player's move will render
        setTimeout(function(controller) {
            var computerMove = controller.ai.getBestMove(controller.board);
            controller.board.play(computerMove.x, computerMove.y);
            controller.view.update(controller.board);
        }, 50, this);
    };
    
}
