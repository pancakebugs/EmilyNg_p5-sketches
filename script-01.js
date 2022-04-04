var fr = 0


function setup() {
	createCanvas(1000,1000)
	background(200,100,100)

fill(215,200,190)
	noStroke()
	//X, Y, Width, Height
//	rect(100,200, 100,400)
//	rect(195,200,150,30)
//	rect(195,570,150,30)

//	circle(350,280, 160,160)
//	circle(260,400,100,100)
//	circle(350,520, 160,160)


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



//function mousePressed() {
	//saveCanvas("s1","png")
								//to save image when clicked

//}