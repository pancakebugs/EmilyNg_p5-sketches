var noiseTime

function setup() {
	createCanvas(1000,1000);
	background(100,100,65);
	noStroke();
	
	var x = 0; //this is the value on the x axis of our sketch
	
	for(var x = 0; x < width; x=x+1)
	while(x < width) {
	var randomRed = random (60,155)
	var randomGreen = random (155,255)
	var randomBlue = random (60,155)
	var randomSize = random(1,15)

	var hue =random(255)

		fill(randomRed,randomGreen,randomBlue)
		circle(random(width),random(height),10,randomSize)
		x++;
	}
}


function draw() { 
	// console.log(fr)
	// fr = fr + 1; 
stroke(255,255,255)
noFill()

//this variable is based on the X position of the mouse
var circleRadius = 50+mouseX/4

//mouseX = x-coordinate of the mouse
//mouseY = y-coordinate of the mouse
//circleRadius = custom variable made up
	circle(mouseX, mouseY, circleRadius)

}
