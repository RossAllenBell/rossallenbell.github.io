$(document).keydown(function(e) {
    processInput(e.keyCode);
});

var SNAKE_WIDTH = 10;
var GAME_WIDTH_TILES = 40;
var DIRECTIONS = {
    NORTH: {id: "NORTH", transform: [0,-1]},
    EAST: {id: "EAST", transform: [1,0]},
    SOUTH: {id: "SOUTH", transform: [0,1]},
    WEST: {id: "WEST", transform: [-1,0]}};
var INITIAL_SPEED_MILLIS = 1000;
var DESIRED_FPS = 60;
var MILLIS_PER_FRAME = 1000/DESIRED_FPS;
var SNAKE_COLOR = "#00992E";
var APPLE_COLOR = "#FF2222";
var BACKGROUND_COLOR = "#FFFFFF";
var BORDER_WIDTH = 3;

var game;

function main(){

    game = {};
	game.snakeCoords = [[GAME_WIDTH_TILES / 2, GAME_WIDTH_TILES / 2,]];
	game.snakeDir = DIRECTIONS.EAST;
	game.paused = false;
	game.active = true;
	game.moveSpeed = INITIAL_SPEED_MILLIS;
	game.lastMoveTime = new Date().getTime();
	game.score = 0;
	
	var testForOldDiv = document.getElementById("containerDiv");
	if(testForOldDiv) {
	    document.body.removeChild(testForOldDiv);
	}

    var containerDiv = document.createElement("div");
    containerDiv.id = "containerDiv";
    document.body.appendChild(containerDiv);
    
    var lengthSpan = document.createElement("span");
    lengthSpan.id = "lengthSpan";
    lengthSpan.innerHTML = "Length: " + game.snakeCoords.length;
    var scoreSpan = document.createElement("span");
    scoreSpan.id = "scoreSpan";
    scoreSpan.innerHTML = "Score: " + game.score;
    
    var statsDiv = document.createElement("div");
    containerDiv.appendChild(statsDiv);
    statsDiv.appendChild(lengthSpan);
    statsDiv.appendChild(scoreSpan);    
    
    game.canvas = document.createElement("canvas");
    containerDiv.appendChild(game.canvas);
    document.body.appendChild(containerDiv);
    
    game.canvas.width = SNAKE_WIDTH * GAME_WIDTH_TILES + (BORDER_WIDTH * 2);
    game.canvas.height = SNAKE_WIDTH * GAME_WIDTH_TILES + (BORDER_WIDTH * 2);
    game.canvas.id = "snakeCanvas";
        
    game.context = game.canvas.getContext("2d");
	game.context.strokeStyle = '#000';
	game.context.lineWidth = BORDER_WIDTH;
	game.context.strokeRect(BORDER_WIDTH / 2, BORDER_WIDTH / 2, SNAKE_WIDTH * GAME_WIDTH_TILES + BORDER_WIDTH, SNAKE_WIDTH * GAME_WIDTH_TILES + BORDER_WIDTH);
    
    fillSegment(headCoord());
    
    makeApple();
    
    $('#scoreSpan').css('float', 'right');
    $('#containerDiv').width(SNAKE_WIDTH * GAME_WIDTH_TILES + (BORDER_WIDTH * 2));
    
    game.latestTimeoutId = setTimeout(gameLoop, MILLIS_PER_FRAME);
	
}

function makeApple() {
    var coord = randomCoord();
    while(snakeOnCoord(coord)) {
        coord = randomCoord();
    }
    game.apple = coord;
    drawSegment(coord, APPLE_COLOR);
}

function randomCoord() {
    return [Math.floor(Math.random() * GAME_WIDTH_TILES), Math.floor(Math.random() * GAME_WIDTH_TILES)];
}

function processInput(keyCode) {
    switch(keyCode){
        case 38: case 87: northKey(); break;
        case 39: case 68: eastKey(); break;
        case 40: case 83: southKey(); break;
        case 37: case 65: westKey(); break;
        case 32: pauseKey(); break;
        case 113: case 78: newGameKey(); break;
        default: console.log(keyCode);
    }
}

function newGameKey() {
    if(game.active) {
        clearTimeout(game.latestTimeoutId);
    }
    main();
}

function northKey() {
    if(game.snakeDir.id != DIRECTIONS.SOUTH.id) {
        game.snakeDir = DIRECTIONS.NORTH; moveNextFrame();
    }
}

function eastKey() {
    if(game.snakeDir.id != DIRECTIONS.WEST.id) {
        game.snakeDir = DIRECTIONS.EAST; moveNextFrame();
    }
}

function southKey() {
    if(game.snakeDir.id != DIRECTIONS.NORTH.id) {
        game.snakeDir = DIRECTIONS.SOUTH; moveNextFrame();
    }
}

function westKey() {
    if(game.snakeDir.id != DIRECTIONS.EAST.id) {
        game.snakeDir = DIRECTIONS.WEST; moveNextFrame();
    }
}

function pauseKey() {
    game.paused = !game.paused;
    if(!game.paused) {
    	game.lastMoveTime = new Date().getTime();
    }
}

function moveNextFrame() {
    game.lastMoveTime = 0;
}

function gameLoop() {
    if(!game.paused) {
	    var loopStartTime = new Date().getTime();
	    
	    if(loopStartTime - game.lastMoveTime >= game.moveSpeed){
	        var newHead = [headCoord()[0] + game.snakeDir.transform[0], headCoord()[1] + game.snakeDir.transform[1]];
	        var tail = game.snakeCoords[game.snakeCoords.length-1];
	        if(!checkForDeath(newHead)) {
		        game.snakeCoords.unshift(newHead);
		        fillSegment(headCoord());
		        if(coordsEqual(newHead, game.apple)) {
		            game.score += 100;
		            makeApple();
		            game.moveSpeed *= 0.9;
		        } else {
		            clearSegment(game.snakeCoords.pop());
		        }
		        game.lastMoveTime = loopStartTime;
	        }
	        game.score += 1;
	        $('#scoreSpan').html("Score: " + game.score)
	        $('#lengthSpan').html("Length: " + game.snakeCoords.length)
	    }
    }
    if(game.active) {
        game.latestTimeoutId = setTimeout(arguments.callee, MILLIS_PER_FRAME - (new Date().getTime() - loopStartTime));
    }
}

function checkForDeath(coord) {
    if(coord[0] < 0
        || coord[0] >= GAME_WIDTH_TILES
        || coord[1] < 0
        || coord[1] >= GAME_WIDTH_TILES
        || snakeOnCoord(coord)) {
        death();
        return true;
    }
    
    return false;
}

function snakeOnCoord(coord) {
    for(i=0; i<game.snakeCoords.length; i++) {
        if(coordsEqual(coord, game.snakeCoords[i])) {
            return true;
        } 
    }
    return false;
}

function death() {
    game.active = false;
}

function headCoord(){
    return game.snakeCoords[0];
}

function fillSegment(coordinate) {
    drawSegment(coordinate, SNAKE_COLOR);
}

function clearSegment(coordinate) {
    drawSegment(coordinate, BACKGROUND_COLOR);
}

function drawSegment(coordinate, color) {
    game.context.fillStyle = color;
    game.context.fillRect(coordinate[0] * SNAKE_WIDTH + BORDER_WIDTH, coordinate[1] * SNAKE_WIDTH + BORDER_WIDTH, SNAKE_WIDTH, SNAKE_WIDTH);
}

function coordsEqual(coordA, coordB) {
    return coordA[0] == coordB[0] && coordA[1] == coordB[1];
}