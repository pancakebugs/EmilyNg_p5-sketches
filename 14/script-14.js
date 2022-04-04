
function setup() {
    createCanvas(1000,1000)
    angleMode(DEGREES)
}

function draw() {
    background(0) 




    // noStroke();
    // fill(245,195,110)
    // var circleSize = map(noise(frameCount*0.002),0,1,600,1100);
    // circle(500,500,circleSize);


    fill(230,10,150);
    stroke(230,10,150)
    strokeWeight(9)

 push();
        translate(650,220)
        rotate(frameCount)
       triangle(90, 85, 58, 10, 86, 75);
    pop();

push();
    translate(570,220)
    rotate(frameCount)
    triangle(80, 85, 58, 10, 86, 75);
pop();

push();
        translate(490,220)
        rotate(frameCount)
        triangle(70, 85, 58, 10, 86, 75);
    pop();
        
push();
        translate(410,220)
        rotate(frameCount)
        triangle(60, 85, 58, 10, 86, 75);
    pop();

push();
        translate(330,220)
        rotate(frameCount)
        triangle(40, 85, 58, 10, 86, 75);
    pop();

        fill(230,100,130);
    stroke(230,100,130)
    strokeWeight(7)

push();
    translate(330,300)
    rotate(frameCount)
    triangle(30, 85, 58, 10, 86, 75);
pop();

        fill(230,130,120);
    stroke(230,130,120)
    strokeWeight(5)

    push();
        translate(330,380)
        rotate(frameCount)
        triangle(10, 85, 58, 10, 86, 75);
    pop();

        fill(250,180,70);
    stroke(250,180,70)
    strokeWeight(4)

push();
         translate(570,460)
         rotate(frameCount)
         triangle(50, 85, 58, 10, 86, 75);
    pop();


push();
        translate(490,460)
        rotate(frameCount)
        triangle(30, 85, 58, 10, 86, 75);
    pop();
        
push();
    translate(330,460)
    rotate(frameCount)
    triangle(0, 85, 58, 10, 86, 85);
pop();

push();
    translate(410,460)
    rotate(frameCount)
    triangle(20, 85, 58, 10, 86, 75);
pop();

        fill(220,190,90);
    stroke(220,190,90)
    strokeWeight(5)

push();
        translate(330,540)
        rotate(frameCount)
        triangle(10, 85, 58, 10, 86, 75);
    pop();

        fill(190,200,120);
    stroke(190,200,120)
    strokeWeight(7)

push();
    translate(330,620)
    rotate(frameCount)
    triangle(30, 85, 58, 10, 86, 75);
pop();

        fill(130,200,150);
    stroke(130,200,150)
    strokeWeight(9)

    push();
        translate(330,700)
        rotate(frameCount)
        triangle(40, 85, 58, 10, 86, 75);
    pop();
        

    push();
        translate(410,700)
        rotate(frameCount)
        triangle(60, 85, 58, 10, 86, 75);
    pop();
        
push();
    translate(490,700)
    rotate(frameCount)
    triangle(70, 85, 58, 10, 86, 75);
pop();

    push();
        translate(570,700)
        rotate(frameCount)
        triangle(80, 85, 58, 10, 86, 75);
    pop();

push();
    translate(650,700)
    rotate(frameCount)
    triangle(90, 85, 58, 10, 86, 75);
pop();


    // fill(30,50,20)
    // noStroke()
    

    // circleXPos = map(sin(frameCount),-1,1,50,950)
    
    // circle(circleXPos,800,100);


    
}