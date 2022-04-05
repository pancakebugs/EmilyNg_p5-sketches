function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {

push();
  translate(-100,-20)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.0);
  // cylinder(30, 150);

    translate(-100,250)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.0);
  cylinder(20, 100);
pop();

push();
  translate(0,20)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  // cylinder(30, 150);

    translate(200,250)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  cylinder(20, 50);
pop();

push();
  translate(0,0)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  // cylinder(30, 150);

    translate(200,0)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  cylinder(20, 50);
pop();

push();
  translate(0,-20)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  // cylinder(30, 150);

    translate(200,-250)
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  cylinder(20, 50);
pop();

}