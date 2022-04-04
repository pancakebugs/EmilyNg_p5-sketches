let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r,g,b;

function preload() {
	dvd = loadImage("assets/dvdE.png");
}

function setup() {
	createCanvas(1000,800);
	x = random(width);
	y = random(height);
	xspeed = 5;
	yspeed = 5;
	pickColor();
}

function pickColor(){
	r = random (70, 256);
	g = random (70, 256);
	b = random (70, 256);
}

function draw() {
	background(0);
	tint(r,g,b);
	image(dvd, x, y, 250, 200);

	x = x + xspeed;
	y = y + yspeed;

	if (x + 250 >= width) {
		xspeed = -xspeed; 
		x = width - 250;
		pickColor();
	} else if (x <= 0) {
		xspeed = -xspeed;
		x = 0;
		pickColor();
	}

	if (y + 200 >= height) {
		yspeed = -yspeed;
		y = height - 200;
		pickColor();
	} else if (y <= 0) {
		yspeed = -yspeed;
		y = 0;
		pickColor();
	}

}