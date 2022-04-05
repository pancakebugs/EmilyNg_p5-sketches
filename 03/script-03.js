
var fr = 0


function setup() {
	createCanvas(1000,1000)
	background(0)

fill(255)

}

function draw() { 
	// console.log(fr)
	// fr = fr + 1; 
stroke(80,200,255)
noFill()

//this variable is based on the X position of the mouse

if (mouseIsPressed === true) {
var circleRadius = 50
}

//mouseX = x-coordinate of the mouse
//mouseY = y-coordinate of the mouse
//circleRadius = custom variable made up
	circle(mouseX, mouseY, circleRadius)

}



// function mousePressed() {
// saveCanvas("s1","png")
								//to save image when clicked

// }



