//SOME BASIC MOVEMENT EXAMPlES

function setup() {
	createCanvas(1000,1000)
	angleMode(DEGREES)
}

function draw() {
	background(0) //COMMENT OUT THIS LINE TO SEE HOW MOVEMENT IS LOOKS WITHOUT REWRITING THE BACKGROUND FOR EVERY FRAME





	noStroke();
	fill(245,195,110)
	var circleSize = map(noise(frameCount*0.002),0,1,600,1100);
	circle(500,500,circleSize);

	noFill();
	stroke(255)
	strokeWeight(4)

	push();
		translate(500,500)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();

push();
	translate(550,500)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(600,350)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();
		
push();
	translate(450,500)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(400,500)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();

push();
	translate(400,550)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(400,600)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();
		
push();
	translate(400,650)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(400,450)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();

push();
	translate(400,400)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(400,350)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();
		
push();
	translate(450,350)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(500,350)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();

push();
	translate(550,350)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(450,650)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();
		
push();
	translate(500,650)
	rotate(frameCount)
	rect(0,0,20,60)
pop();

	push();
		translate(550,650)
		rotate(frameCount)
		rect(0,0,20,60)
	pop();

push();
	translate(600,650)
	rotate(frameCount)
	rect(0,0,20,60)
pop();


	// fill(30,50,20)
	// noStroke()
	

	// circleXPos = map(sin(frameCount),-1,1,50,950)
	
	// circle(circleXPos,800,100);

	

	
}



function mousePressed() {
	saveCanvas("s1","png")
}