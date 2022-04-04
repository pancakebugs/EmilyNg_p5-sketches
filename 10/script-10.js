
var eImg;
var squareSize = 40;
var slipDistance = 10;

function preload() {
	eImg = loadImage('assets/Eimg.jpg');
}

function setup() {
	createCanvas(1000,1000);
	noStroke();

	frameRate(150)

	image(eImg,300,100)



}

function draw() {
		var randomLeft = random(0,width)
		var randomRight = random(0, height)
		square = eImg.get(randomLeft,randomRight,squareSize,squareSize);
		image(square,randomLeft+random(-slipDistance,slipDistance),randomRight+random(-slipDistance,slipDistance))


function mousePressed() {
saveCanvas("s10","png")	
}
}