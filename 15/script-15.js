function setup() {
  createCanvas(1000, 1000, WEBGL);
}


function draw() {

push();
blendMode(OVERLAY);
  translate(50,-200)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(255,240,240);

  box(300,50);
    pop();

push();
blendMode(OVERLAY);
  translate(50,0)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(240,240,255);
  box(300,50);
    pop();

push();
blendMode(OVERLAY);
  translate(50,200)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(220,240,255);
  box(300,50);
    pop();

push();
blendMode(OVERLAY);
  translate(-125,0)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);
  box(50,500,50);
    pop();

}