var prof="absent"
var exampleText = "In 2020, type designer Julius Hui flew back to his native Hong Kong. The previous year, he’d quit his “too comfortable and steady” job at Monotype, one of the world’s largest type foundries, and moved to Munich. Now, forced to head home by the pandemic after only six months, he found himself with little paid work, but finally able pursue a passion project that he’d been sitting on for more than six years: Ku Mincho, a radical rethinking of Chinese type."

function setup() {
	createCanvas(1000,1000);
	background(70,75,10); 
	textSize(100)
	//blendMode(MULTIPLY)
	fill(255,0,0)
	text("hello world",50,150)
	noStroke()


	for (var i = 0; i<20;i++) {
		circle(random(1000), random(1000),10)
	}

	if (prof== "present") {
		alert("Ali is not in the classroom")
	} else {
		alert("Ali is not here")
	}
}
	

function draw () {
		background(70,75,10); 

	//circle (mouseX,mouseY,10);

	// if (mouseX >=500) {
	// 	circle(mouseX,mouseY,30);
	// } else {
	// 	rect(mouseX,mouseY, 30,30)
	// }
//VARIABLES
//Variables can be numbers:
var ourNumber = 20;
ourNumber = ourNumber+1000

//variables can be STRINGS;
var myName = "Emily";
myName = myName=2;


//variables can be ARRAYS:

textSize(20)
var leading = map(mouseY,0,height,50,300)
textLeading(leading)
text(exampleText,100,200,880,880)

	if (mouseIsPressed == true) {
		circle(mouseX,mouseY,20)
	}

}



function mousePressed() {

}















