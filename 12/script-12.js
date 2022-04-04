function setup() {
	createCanvas(1000,1000)
	background(0)
	noStroke();
	fill(255)

}




function draw() {


	
randomY = height/2-100+random()*100
randomY1 = height/3.4-100+random()*100
randomY2 = height/1.4-100+random()*100
randomY3 = height/1.26-600+random()*520




frameRate(10000)
	// noiseY = height/2+100+noise(mouseX*0.1)*500

	
	// this circle's Y position is being determined randomly: line 14.  (the upper circle)
	
	if (mouseX > 320) {
		if (mouseX < 700) {
			circle(mouseX,randomY, 7*2)	
		}
	}

	if (mouseX > 320) {
		if (mouseX < 700) {
			circle(mouseX,randomY1, 5*2)		
		}
	}

	if (mouseX > 320) {
		if (mouseX < 700) {
			circle(mouseX,randomY2, 9*2)		
		}
	}

	if (mouseX > 250) {
		if (mouseX < 290) {
			circle(mouseX,randomY3, 8*2)		
		}
	}





}