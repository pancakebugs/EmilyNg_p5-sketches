function setup() {


    var hue =random(255)

    createCanvas(1000,1000)
    background(215,90,30)
    noStroke();
    // fill(randomRed,randomGreen,randomBlue)

}




function draw() {

var randomRed = random(50,255)
var randomGreen = random(200,255)
var randomBlue = random(200,255)
    
randomY = height/2-100+random()*100
randomY1 = height/3.6-100+random()*100
randomY2 = height/1.2-100+random()*100
randomY3 = height/1.3-600+random()*655



frameRate(2000)
    // noiseY = height/2+100+noise(mouseX*0.1)*500

    
    // this circle's Y position is being determined randomly: line 14.  (the upper circle)
    
    if (mouseX > 300) {
        if (mouseX < 650) {
            fill(randomRed,randomGreen,randomBlue)
            square(mouseX,randomY, 8*4) 
        }
    }

    if (mouseX > 300) {
        if (mouseX < 650) {
            fill(randomRed,randomGreen,randomBlue)
            square(mouseX,randomY1, 8*4)        
        }
    }

    if (mouseX > 300) {
        if (mouseX < 650) {
            fill(randomRed,randomGreen,randomBlue)
            square(mouseX,randomY2, 8*4)        
        }
    }

    if (mouseX > 290) {
        if (mouseX < 400) {
            fill(randomRed,randomGreen,randomBlue)
            square(mouseX,randomY3, 8*4)        
        }
    }



    // if ((mouseX > 100) && (mouseX < 200))  {
        
    //      circle(mouseX,randomY, 8)       
        
        
    // }


    
    
    
    //this circle's Y position is being determined by perlin noise:line 15.  (the upper circle)
    // circle(mouseX,noiseY, 5)


    
}