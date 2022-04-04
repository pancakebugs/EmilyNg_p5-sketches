//SOME BASIC MOVEMENT EXAMPlES

function setup() {
	createCanvas(1000,1000)
	angleMode(DEGREES)
}

function draw() {
	background(0) //COMMENT OUT THIS LINE TO SEE HOW MOVEMENT IS LOOKS WITHOUT REWRITING THE BACKGROUND FOR EVERY FRAME





	// noStroke();
	// fill(245,195,110)
	// var circleSize = map(noise(frameCount*0.002),0,1,600,1100);
	// circle(500,500,circleSize);

	noFill();
	stroke(255)
	strokeWeight(4)

	push();
		translate(490,460)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();

push();
	translate(570,460)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(650,220)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();
		
push();
	translate(410,460)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(330,700)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();

push();
	translate(330,620)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(330,540)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();
		
push();
	translate(330,460)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(330,380)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();

push();
	translate(330,300)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(330,220)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();
		
push();
	translate(410,220)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(490,220)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();

push();
	translate(570,220)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(410,700)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();
		
push();
	translate(490,700)
	rotate(frameCount)
	rect(0,0,35,100)
pop();

	push();
		translate(570,700)
		rotate(frameCount)
		rect(0,0,35,100)
	pop();

push();
	translate(650,700)
	rotate(frameCount)
	rect(0,0,35,100)
pop();


	// fill(30,50,20)
	// noStroke()
	

	// circleXPos = map(sin(frameCount),-1,1,50,950)
	
	// circle(circleXPos,800,100);

	

	
}



function mousePressed() {
	saveCanvas("s1","png")
}