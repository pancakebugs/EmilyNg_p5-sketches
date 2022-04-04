function setup() {
	createCanvas(1000,1000)
	background(255)
	noStroke();
	fill(0)

}




function draw() {


	
randomY = height/2-100+random()*50
randomY1 = height/3-100+random()*50
randomY2 = height/1.4-100+random()*50
randomY3 = height/1.2-600+random()*435
randomY4 = height/3-100+random()*200
randomY5 = height/1.17-600+random()*400
randomY6 = height/2.9-100+random()*190
randomY7 = height/1.45-100+random()*50

frameRate(5000)
	// noiseY = height/2+100+noise(mouseX*0.1)*500

	
	// this circle's Y position is being determined randomly: line 14.  (the upper circle)
	
	if (mouseX > 300) {
		if (mouseX < 650) {
			circle(mouseX,randomY, 8*2)	
		}
	}

	if (mouseX > 300) {
		if (mouseX < 650) {
			circle(mouseX,randomY1, 8*2)		
		}
	}

	if (mouseX > 300) {
		if (mouseX < 700) {
			circle(mouseX,randomY2, 8*2)		
		}
	}

	if (mouseX > 250) {
		if (mouseX < 300) {
			circle(mouseX,randomY3, 8*2)		
		}
	}

		if (mouseX > 600) {
		if (mouseX < 650) {
			circle(mouseX,randomY4, 8*2)		
		}
	}

			if (mouseX > 200) {
		if (mouseX < 250) {
			circle(mouseX,randomY5, 8*2)		
		}
	}

			if (mouseX > 650) {
		if (mouseX < 700) {
			circle(mouseX,randomY6, 8*2)		
		}
	}

				if (mouseX > 600) {
		if (mouseX < 700) {
			circle(mouseX,randomY7, 8*2)		
		}
	}

	// if ((mouseX > 100) && (mouseX < 200))  {
		
	// 		circle(mouseX,randomY, 8)		
		
		
	// }


	
	
	
	//this circle's Y position is being determined by perlin noise:line 15.  (the upper circle)
	// circle(mouseX,noiseY, 5)


	
}