function Parkaos() {
    var keys = {};    
    $(document).keydown(function (e) {
	    keys[e.which] = true;
	    processInput(e.which);
	});	
	$(document).keyup(function (e) {
	    delete keys[e.which];
	});
    
    var DESIRED_FPS = Number.MAX_VALUE;
    var MILLIS_PER_FRAME = 1000/DESIRED_FPS;
    
    var MAX_RUN_SPEED = 200;
    var RUN_ACCEL = 1000;
    
    var game = {};
    var tangible = {};
    
    function newGame() {
        if(typeof game.latestTimeoutId != 'undefined'){
            clearTimeout(game.latestTimeoutId);
        }
        if($('#containerDiv').length != 0){
            $('#containerDiv').remove();
        }
    
        var containerDiv = $('<div>', {id: 'containerDiv'});
        $('body').append(containerDiv);
        tangible = new Tangible(containerDiv, 1000, 1000, 600, 400);        
        tangible.addEnvironment(LEVEL_1);
        tangible.gravity = 2000;
        tangible.friction = 2000;
        tangible.terminalVelocity = 1500;
    
        game = {};
        game.player = {coords: [50,50], segments: PLAYER_SHAPE.segments};
        tangible.addObject(game.player);
        tangible.setPointOfView(game.player);
        game.active = true;
        game.paused = false;
        game.latestTimeoutId = setTimeout(gameLoop, MILLIS_PER_FRAME);
        game.lastFrameTime = new Date().getTime();
    }
    
    function gameLoop() {
        var loopStartTime = new Date().getTime();
        if(!game.paused) {
        	game.player.acceleration[0] = 0;
            if(keys[38] || keys[87]) northKey();
            if(keys[39] || keys[68]) eastKey();
            if(keys[40] || keys[83]) southKey();
            if(keys[37] || keys[65]) westKey();
        
            tangible.update();
            game.lastFrameTime = new Date().getTime();
        }
        if(game.active) {
            game.latestTimeoutId = setTimeout(arguments.callee, MILLIS_PER_FRAME - (new Date().getTime() - loopStartTime));
        }
    }
    
    function processInput(keyCode) {
        switch(keyCode){
	        case 32: pauseKey(); break;
	        case 113: case 78: newGameKey(); break;
        }
    }
    
    function newGameKey() {
	    if(game.active) {
	        clearTimeout(game.latestTimeoutId);
	    }
	    newGame();
	}
	
	function northKey() {
		if(tangible.onTopOfSurface(game.player)){
			if(game.player.velocity[1] > 0){
				game.player.velocity[1] = 0;
			}
			game.player.velocity[1] += -500;
		}
	}
	
	function runAccelModifier(){
		return tangible.onTopOfSurface(game.player)? 1 : 0.1;
	}
	
	function eastKey() {
		if(Math.abs(game.player.velocity[0]) < MAX_RUN_SPEED){
			game.player.acceleration[0] = RUN_ACCEL * runAccelModifier();
		}
	}
	
	function southKey() {

	}
	
	function westKey() {
		if(Math.abs(game.player.velocity[0]) < MAX_RUN_SPEED){
			game.player.acceleration[0] = -RUN_ACCEL * runAccelModifier();
		}
	}
	
	function pauseKey() {
	    game.paused = !game.paused;
	}
    
    newGame();
}

var PLAYER_SHAPE = {segments: [[[0,0],[20,0]],[[20,0],[20,30]],[[20,30],[0,30]],[[0,30],[0,0]]]};
//var PLAYER_SHAPE = [[[0,0],[20,30]],[[20,0],[0,30]]];
var LEVEL_1 = {segments: [[[100,980],[100,930]],[[100,930],[200,930]],[[200,930],[200,980]],[[0,980],[500,900]],[[500,900],[999,980]],[[200,930],[200,875]],[[200,875],[150,875]],[[200,900],[250,900]],[[250,900],[260,999]]]};