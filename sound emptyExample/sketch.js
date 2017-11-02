
var mySound; 
var x = 100
var y = 200
var xRate = 10
var yRate = 5
//var img ;


function preload(){

mySound = loadSound("assets/jacket.mp3");

}


function setup(){

createCanvas(500,500);

//img = loadImage("assets/zipper.jpg");

//mySound.play();

}

function draw() {

background(mouseX,mouseY,0);

//mySound.play();
fill(mouseX,mouseY,180);

//texture(img);
ellipse(x,y,mouseX, mouseX);

x += xRate;
y += yRate;

if( x > width  || x < 40){
	xRate *= -1;
mySound.play();


}
if(y > height  || y < 40){
	yRate *= -1;
mySound.play();

}

	}

//	fill(255,0,0);
//	ellipse(mouseX,mouseY, 20,20);


//ellipse()

//}
//}

/*
function(ballBouncy){
if(x>width || x < 0){
	xVel *= -1;
}
if(y>height || y < 0){
	yVel *= -1;

	}
	ellipse(mouseX,mouseY, 20,20);
}
*/


