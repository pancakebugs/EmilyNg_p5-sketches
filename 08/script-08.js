var font;
var vehicles = [];
function preload () {
    font = loadFont("assets/BodoniFLF-Bold.ttf")

}

function setup() {

    createCanvas (1000,1000);
    background(0)
    // textFont (font);
    // textSize(800)
    // fill(255);
    // noStroke();
    // text('E', 250, 750);

    var points = font.textToPoints('E', 250, 750, 800)


    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y)
    }
}

function draw(){
    background(0);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}

function mousePressed() {
saveCanvas("s8","png")
}
