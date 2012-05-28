if(typeof jQuery == 'undefined') {
    console.error("TangibleJS depends on jQuery having been included.");
}

function Tangible(div, width, height, sceneWidth, sceneHeight) {
	window.TangibleObject = this;
	
    var DEFAULT_GRAVITY = 9.8;
    var DEFAULT_TERMINAL_VELOCITY = Number.MAX_VALUE;
    var DEFAULT_FRICTION = DEFAULT_GRAVITY;
    var DEFAULT_STEADY_GROUND_SLOPE = 2;
	
    var GRID_WIDTH = 10;
    var ENVIRONMENT_THICKNESS = 4;
    var SCENE_OBJECT_THICKNESS = 1;

    var containerDiv = $(div);
    containerDiv.empty();
    var canvas = $('<canvas>', {id: 'canvas'});
    containerDiv.append(canvas);
    canvas = document.getElementById('canvas'); 
    canvas.width = sceneWidth;
    canvas.height = sceneHeight;
    var context = canvas.getContext('2d');
    
    this.gravity = DEFAULT_GRAVITY;
    this.terminalVelocity = DEFAULT_TERMINAL_VELOCITY;
    this.friction = DEFAULT_FRICTION;
    this.steadyGroundSlope = DEFAULT_STEADY_GROUND_SLOPE;

    this.worldWidth = width;
    this.worldHeight = height;
    this.scene = {width: sceneWidth, height: sceneHeight, x: 0, y: 0};
    this.environment = [[[0,0], [width,0]],[[width,0], [width,height]],[[width,height], [0,height]],[[0,height], [0,0]]];
    this.sceneObjects = [];
    this.povObject = {coords: [0,0]};
    
    this.drawDebugInfo = true;
    this.collisionSegmentsDebug = [];
    this.lastUpdate = new Date().getTime();
    this.lastSecondFramesDrawn = [];
    
    this.update = function(){
    	this.collisionSegmentsDebug = [];
    	var secondsSinceLastUpdate = (new Date().getTime() - this.lastUpdate)/1000;
    	this.updateAcceleration(0, secondsSinceLastUpdate);
    	this.updateAcceleration(1, secondsSinceLastUpdate);
    	//friction
    	for(var i in this.sceneObjects){
	    	if (this.sceneObjects[i].acceleration[0] == 0 && Math.abs(this.sceneObjects[i].velocity[0]) > 0 && this.onTopOfSurface(this.sceneObjects[i])){
	    		var frictionEffect = this.friction*secondsSinceLastUpdate;
	    		if(this.sceneObjects[i].velocity[0] > 0) frictionEffect = -frictionEffect;
	    		if(Math.abs(this.sceneObjects[i].velocity[0]) < Math.abs(frictionEffect)) frictionEffect = -this.sceneObjects[i].velocity[0];
				this.sceneObjects[i].velocity[0]+=frictionEffect;
			}
    	}
    	this.updateMovement(0, secondsSinceLastUpdate);
    	this.updateMovement(1, secondsSinceLastUpdate);
    	this.draw();
    	
    	this.lastUpdate = new Date().getTime();
    };
    
    this.updateAcceleration = function (xyIndex, secondsSinceLastUpdate){
    	for(var i in this.sceneObjects){
    		if(this.sceneObjects[i].acceleration){
    			if(this.sceneObjects[i].acceleration[xyIndex] != 0){
	    			this.sceneObjects[i].velocity[xyIndex]+=this.sceneObjects[i].acceleration[xyIndex]*secondsSinceLastUpdate;
    			}
    			//gravity
    			if(xyIndex == 1){
    				if(!this.sceneObjects[i].noGravity){
    		    		this.sceneObjects[i].velocity[xyIndex]+=this.gravity*secondsSinceLastUpdate;
    		    		if(this.sceneObjects[i].velocity[xyIndex] > this.terminalVelocity){
    		    			this.sceneObjects[i].velocity[xyIndex] = this.terminalVelocity;
    		    		}
    	    		}
    			}
    		}
    	}
    };
    
    this.updateMovement = function (xyIndex, secondsSinceLastUpdate){
    	for(var i in this.sceneObjects){
	    	if(this.sceneObjects[i].velocity[xyIndex] != 0){
	    		var direction = this.sceneObjects[i].velocity[xyIndex] > 0? 1 : -1;
	    		var travelDistanceThisUpdate = Math.abs(this.sceneObjects[i].velocity[xyIndex]*secondsSinceLastUpdate);
	    		for(;travelDistanceThisUpdate > 0;travelDistanceThisUpdate--){
	    			var movementOffset = [0,0];
	    			movementOffset[xyIndex] = direction * Math.min(travelDistanceThisUpdate, 1);
	    			var collisionSegments = this.collision(this.offsetSegments(this.offsetSegments(this.sceneObjects[i].segments, this.sceneObjects[i].coords), movementOffset), this.environment);
	    			this.collisionSegmentsDebug = this.collisionSegmentsDebug.concat(collisionSegments);
	    			if(collisionSegments.length){
//	    				var maxCollisionSlope = 0;
//	    				for(var j in collisionSegments){
//	    					var slope = this.slope(collisionSegments[j]);
//	    					if(xyIndex == 1){
//	    						if(slope == 0){
//	    							slope = Number.MAX_VALUE;
//	    						} else {
//	    							slope = 1/slope;
//	    						}
//	    					}
//	    					maxCollisionSlope = Math.max(maxCollisionSlope, Math.abs(slope));
//	    				}
//	    				if(maxCollisionSlope <= this.steadyGroundSlope && xyIndex == 0 && maxCollisionSlope != 0){
//	    					var newY = -Math.sqrt(1/(1+Math.pow(1/maxCollisionSlope,2)));
//	    					var newX = newY/maxCollisionSlope;
//	    					
//	    					if(direction == 1){
//	    						newX = -newX;
//	    					}
//	    					
//	    					movementOffset = [newX,newY];
//	    					if(!this.collision(this.offsetSegments(this.offsetSegments(this.sceneObjects[i].segments, this.sceneObjects[i].coords), movementOffset), this.environment).length){
//	    						this.sceneObjects[i].coords[xyIndex]+=Math.min(travelDistanceThisUpdate, movementOffset[xyIndex]);
//	    						this.sceneObjects[i].coords[xyIndex^1]+=Math.min(travelDistanceThisUpdate, movementOffset[xyIndex^1]);
//	    					} else {
//	    						this.sceneObjects[i].velocity[xyIndex] = 0;
//			    				break;
//	    					}
//	    				} else {
//		    				this.sceneObjects[i].velocity[xyIndex] = 0;
//		    				break;
//	    				}
	    			} else {
	    				this.sceneObjects[i].coords[xyIndex]+=direction * Math.min(travelDistanceThisUpdate, 1);
	    			}
	    		}
			}
    	}
    };
    
    this.draw = function(){
        context.clearRect(0,0,this.scene.width,this.scene.height);
        
        var povCoords = this.getCenterPoint(this.povObject);
        this.scene.x = povCoords[0] - (this.scene.width / 2);
        if(this.scene.x < 0) this.scene.x = 0;
        if(this.scene.x > this.worldWidth - this.scene.width - 1) this.scene.x = this.worldWidth - this.scene.width - 1;
        this.scene.y = povCoords[1] - (this.scene.height / 2);
        if(this.scene.y < 0) this.scene.y = 0;
        if(this.scene.y > this.worldHeight - this.scene.height - 1) this.scene.y = this.worldHeight - this.scene.height - 1;
        
        if(this.drawDebugInfo){        	
            context.strokeStyle = '#CFCFCF';
            context.lineWidth = 1;
            for(var i=(GRID_WIDTH-this.scene.x)%GRID_WIDTH; i<this.scene.width; i+=GRID_WIDTH){
                context.beginPath();
                context.moveTo(i,0);
                context.lineTo(i,this.scene.height);
                context.stroke();
                context.closePath();
            }
            for(var i=(GRID_WIDTH-this.scene.y)%GRID_WIDTH; i<this.scene.height; i+=GRID_WIDTH){
                context.beginPath();
                context.moveTo(0,i);
                context.lineTo(this.scene.width,i);
                context.stroke();
                context.closePath();
            }
        }
        
        context.strokeStyle = '#000000';
    	context.lineWidth = ENVIRONMENT_THICKNESS;
    	this.drawSegments(this.environment);
    	
    	context.strokeStyle = '#0000FF';
    	context.lineWidth = SCENE_OBJECT_THICKNESS;
    	for(var i in this.sceneObjects){
    		this.drawSegments(this.offsetSegments(this.sceneObjects[i].segments, this.sceneObjects[i].coords));
    	}
        
        if(this.drawDebugInfo){
        	context.strokeStyle = '#FF8800';
        	context.lineWidth = ENVIRONMENT_THICKNESS;
        	this.drawSegments(this.collisionSegmentsDebug);
        	
        	context.strokeStyle = '#888888';
        	context.lineWidth = 1;
        	for(var i in this.sceneObjects){
        		this.drawSegments(this.getBoundingBox(this.offsetSegments(this.sceneObjects[i].segments, this.sceneObjects[i].coords)));
        	}
        	
        	context.fillStyle="#FF0000";
        	context.beginPath();
        	context.arc(povCoords[0] - this.scene.x,povCoords[1] - this.scene.y,3,0,Math.PI*2,true);
        	context.closePath();
        	context.fill();
        	
        	context.fillStyle = '#FF0000';
        	context.font = "12pt Calibri";
        	this.lastSecondFramesDrawn.push(this.lastUpdate);
        	while(this.lastSecondFramesDrawn[0] && this.lastSecondFramesDrawn[0] <= new Date().getTime() - 1000){
        		this.lastSecondFramesDrawn.shift();
        	}
        	var coordsText = 'FPS: [' + this.lastSecondFramesDrawn.length + '] POV Object: coords[' + Math.round(this.povObject.coords[0]) + ',' + Math.round(this.povObject.coords[1]) + '] xV[' + Math.round(this.povObject.velocity[0]) + '] yV[' + Math.round(this.povObject.velocity[1]) + '] Scene: [' + Math.round(this.scene.x) + ',' + Math.round(this.scene.y) + ']';
        	context.fillText(coordsText, this.scene.width - context.measureText(coordsText).width - 5, this.scene.height - 5);
        }
    };
    
    this.drawSegments = function(segments){
    	for(var i in segments){
    		this.drawSegment(segments[i]);
    	}
    };
    
    this.drawSegment = function(segment){
    	if(this.segmentIsInView(segment)){
    		segment = this.getDrawableSegment(segment);
        	context.beginPath();
            context.moveTo(segment[0][0] - this.scene.x,segment[0][1] - this.scene.y);
            context.lineTo(segment[1][0] - this.scene.x,segment[1][1] - this.scene.y);
            context.stroke();
            context.closePath();
		}
    };
    
    this.segmentIsInView = function(segment){
    	return true;
    };
    
    this.getDrawableSegment = function(segment){
    	return segment;
    };
    
    this.getSceneWindowSegments = function(){
    	return [
    	        [[this.scene.x,this.scene.y],[this.scene.x + this.scene.width,this.scene.y]],
    	        [[this.scene.x + this.scene.width,this.scene.y],[this.scene.x + this.scene.width,this.scene.y + this.scene.height]],
    	        [[this.scene.x + this.scene.width,this.scene.y + this.scene.height],[this.scene.x,this.scene.y + this.scene.height]],
    	        [[this.scene.x,this.scene.y + this.scene.height],[this.scene.x,this.scene.y]]];
    };
    
    this.setPointOfView = function(coordedObject){
    	if(coordedObject.coords){
    		this.povObject = coordedObject;
    	} else {
    		console.error("Attempted to set POV to: " + JSON.stringify(coordedObject));
    	}
    };
    
    this.addObject = function(segmentedObject){
    	if(segmentedObject.segments){
    		if(typeof segmentedObject.coords == 'undefined') segmentedObject.coords = [0,0];
    		if(typeof segmentedObject.velocity == 'undefined') segmentedObject.velocity = [0,0];
    		if(typeof segmentedObject.acceleration == 'undefined') segmentedObject.acceleration = [0,0];
    		this.sceneObjects.push(segmentedObject);
    	} else {
    		console.error("Attempted to add object without segments: " + JSON.stringify(segmentedObject));
    	}
    };
    
    this.moveSceneNorth = function(pixels) {
        if(this.scene.y > 0) {
            this.scene.y-=typeof pixels == 'undefined'? 1 : pixels;
        }
    };

    this.moveSceneEast = function(pixels) {
        if(this.scene.x < this.worldWidth - this.scene.width - 1) {
            this.scene.x+=typeof pixels == 'undefined'? 1 : pixels;
        }
    };
    
    this.moveSceneSouth = function(pixels) {
        if(this.scene.y < this.worldHeight - this.scene.height - 1) {
            this.scene.y+=typeof pixels == 'undefined'? 1 : pixels;
        }
    };
    
    this.moveSceneWest = function(pixels) {
        if(this.scene.x > 0) {
            this.scene.x-=typeof pixels == 'undefined'? 1 : pixels;
        }
    };
    
    this.addEnvironment = function(someEnvironment) {
    	this.environment = this.environment.concat(someEnvironment.segments);
    };
    
    this.getBoundingBox = function(segments){
    	var north = Number.MAX_VALUE;
    	var south = -Number.MAX_VALUE;
    	var east = -Number.MAX_VALUE;
    	var west = Number.MAX_VALUE;
    	for(var i in segments){
    		north = Math.min(north,segments[i][0][1]);
    		north = Math.min(north,segments[i][1][1]);
    		south = Math.max(south,segments[i][0][1]);
    		south = Math.max(south,segments[i][1][1]);
    		east = Math.max(east,segments[i][0][0]);
    		east = Math.max(east,segments[i][1][0]);
    		west = Math.min(west,segments[i][0][0]);
    		west = Math.min(west,segments[i][1][0]);
    	}
    	return [[[west,north],[east,north]],[[east,north],[east,south]],[[east,south],[west,south]],[[west,south],[west,north]]];
    };
    
    this.getCenterPoint = function(sceneObject){
    	var boundingBox = this.getBoundingBox(sceneObject.segments);
    	return [(boundingBox[0][0][0]+boundingBox[0][1][0])/2+sceneObject.coords[0],(boundingBox[0][0][1]+boundingBox[1][1][1])/2+sceneObject.coords[1]];
    };
    
    this.offsetSegments = function(segments, offset){
    	var newSegments = [];
    	for(var i in segments){
    		newSegments.push(this.offsetSegment(segments[i], offset));
    	}
    	return newSegments;
    };
    
    this.offsetSegment = function(segment, offset){
    	return [[segment[0][0]+offset[0],segment[0][1]+offset[1]],[segment[1][0]+offset[0],segment[1][1]+offset[1]]];
    };
    
    this.getVectorOfSegment = function(segment){
    	return [segment[1][0]-segment[0][0],segment[1][1]-segment[0][1]];
    };
    
    this.addVectors = function(vectorA, vectorB){
    	return [vectorA[0]+vectorB[0],vectorA[1]+vectorB[1]];
    };
    
    this.subtractVectors = function(vectorA, vectorB){
    	return [vectorA[0]-vectorB[0],vectorA[1]-vectorB[1]];
    };
    
    this.scaleVector = function(vector, scalar){
    	return [vector[0] * scalar, vector[1] * scalar];
    };
    
    this.crossProduct = function(vectorA, vectorB){
    	return (vectorA[0]*vectorB[1])-(vectorA[1]*vectorB[0]);
    };
    
    this.slope = function(segment){
    	if(segment[1][0] - segment[0][0] == 0){
    		return Number.MAX_VALUE;
    	}
    	return (segment[1][1] - segment[0][1])/(segment[1][0] - segment[0][0]);
    };
    
    this.intersection = function(segmentA, segmentB){
    	if(this.parallel(segmentA, segmentB)){
    		return undefined;
    	}
    	var t = this.crossProduct(this.subtractVectors(segmentB[0], segmentA[0]), this.getVectorOfSegment(segmentB)) / this.crossProduct(this.getVectorOfSegment(segmentA), this.getVectorOfSegment(segmentB));
    	var u = this.crossProduct(this.subtractVectors(segmentB[0], segmentA[0]), this.getVectorOfSegment(segmentA)) / this.crossProduct(this.getVectorOfSegment(segmentA), this.getVectorOfSegment(segmentB));
    	if(t >= 0 && t <= 1 && u >= 0 && u <= 1){
    		return this.addVectors(segmentA, this.scaleVector(this.getVectorOfSegment(segmentA), t));
    	} else {
    		return undefined;
    	}
    };
    
    this.parallel = function(segmentA, segmentB){
    	return this.crossProduct(this.getVectorOfSegment(segmentA), this.getVectorOfSegment(segmentB)) == 0;
    };
    
    this.collinear = function(segmentA, segmentB){
    	return this.parallel(segmentA, segmentB) && this.crossProduct(this.subtractVectors(segmentB[0], segmentA[0]), this.getVectorOfSegment(segmentA)) == 0;
    };
    
    this.collision = function(segmentsA, segmentsB){
    	var segments = [];
    	for(var i in segmentsB){
    		for(var j in segmentsA){
    			if(this.collinear(segmentsA[j], segmentsB[i])){
    				segments.push(segmentsB[i]);
    				break;
    			}
    			if(this.intersection(segmentsA[j], segmentsB[i])){
    				segments.push(segmentsB[i]);
    				break;
    			}
    		}
    	}
    	return segments;
    };
    
    this.onTopOfSurface = function(sceneObject){
		return this.collision(this.offsetSegments(this.offsetSegments(sceneObject.segments, sceneObject.coords), [0,1]), this.environment).length;
    };
    
}