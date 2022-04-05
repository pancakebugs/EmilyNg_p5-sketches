
var eImg;
var squareSize = 10;
var slipDistance = 0;

function preload() {
	eImg = loadImage('assets/Eimg2.png');
}

function setup() {
	createCanvas(1000,1000);
	background(0);
	noStroke();

	frameRate(150)

	image(eImg,370,160)



}

function draw() {
		var randomLeft = random(0,width)
		var randomRight = random(0, height)
		square = eImg.get(randomLeft,randomRight,squareSize,squareSize);
		image(square,randomLeft+random(-slipDistance,slipDistance),randomRight+random(-slipDistance,slipDistance))


}