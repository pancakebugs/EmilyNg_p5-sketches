var noiseTime


function setup() {
	createCanvas(1000,1000);
	background(190,80,90);
	noStroke();
frameRate(15)



}

function mousePressed() {
	saveCanvas("s5","png")
}

function draw(){
		var x = 0; //this is the value on the x axis of our sketch
	
	for(var x = 0; x < width; x=x+1)
	while(x < width) {
	var randomRed = random (190,255)
	var randomGreen = random (150,255)
	var randomBlue = random (90,255)
	var randomSize = random(5,15)

	var hue =random(255)

		fill(randomRed,randomGreen,randomBlue)
		circle(random(width),random(height),35,randomSize)
		x++;
	}
fill(190,80,90) 
	noStroke()
		rect(0,0, 250,1000)
	rect(0,0, 1000,150)
		rect(750,0, 300,1000)
	rect(0,850, 1000,150)
	rect(400,300, 450,130)
	rect(400,560, 450,130)
	rect(700,430, 150,130)




}


	