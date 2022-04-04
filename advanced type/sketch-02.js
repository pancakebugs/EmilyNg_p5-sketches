var ourFont; //create an empty global variable.

function preload() {
	ourFont = loadFont("assets/SansitaSwashed-VariableFont_wght.ttf")
}


function setup() {
	createCanvas(1000,1000);
	background(255,235,255); 
	textSize(100)
	textFont(ourFont)
	text("hello world",50,180)

}

// CLICK ON GO-LIVE
// http://127.0.0.1:5500/