let arrowImg;

function preload() {
	arrowImg = loadImage('assets/Eimg.png');
}

function setup() {
	createCanvas(1000,1000);
	noStroke();
	// console.log(arrowImg)

	// var xPos;
	// var yPos;



}

function draw() {
	background(200,240,250)


	push()
	translate(500,500)

	push()
	// rotate(frameCount/100)
	translate(-500,-500)
	for (xPos = 0;xPos < width; xPos=xPos+10) {
		for(yPos=0;yPos < height;yPos=yPos+10) {
			newFill = arrowImg.get(xPos,yPos);

			
			fill(newFill)


			var circleSize = map(sin(frameCount/10),-1,1,5,10);

			circleSize = 12;

			if (newFill != [0,0,0,0]) {


				circle(xPos+map(noise(frameCount/50+20+yPos),0,1,-50,70),yPos+map(noise(frameCount/10+40+xPos),0,1,-30,70),circleSize);	
			}
			
		}
		

	}
	pop()
	pop()


}