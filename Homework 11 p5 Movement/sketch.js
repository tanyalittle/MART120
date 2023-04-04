var headX = 250;
var headY = 150;
var headD = 150;
var headDirection = 1;

var lArcX = 250;
var lArcY = 155;
var arcDirection = 1;

var lEye = 0;
var rEye = 0;
var eyeDirection = 1;

var topMouthY = 180;
var topMouthDirection = 1;

var bodyW = 75;
var bodyH = 150;
var bodyDirection = 1;

var lHandX = 330;
var lHandY = 330;
var lHandDirection = 1;

var rHandX = 330;
var rHandY = 330;
var rHandDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 1;

var movement;

function setup() 
  {
    createCanvas(500, 500);
    movement = floor(random() * 10) + 1;
  }
  
  function draw() 
  {
    background('#16466C');
    
    // title
    fill('#912C5EA5');
    stroke('#230755');
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Perpetually Off-Kilter", 10, 30);
    
    // points
    fill('#64324BA5');
    strokeWeight(3);
    point(50, 50);
    point(100, 100);
    point(150, 150);
    point(200, 200);
    point(250, 250);
    point(300, 300);
    point(350, 350);
    point(400, 400);
    point(450, 450);
    
    // head
    stroke(0)
    fill(300);
    circle(headX, headY, headD);
    headD+=headDirection;
    if(headD >= 175 || headD <= 130)
    {
        headDirection *= -1;
    }
    
      noFill();
    stroke('#498825');
    arc(255, 160, 175, 175, 0, HALF_PI);
    arc(lArcX, lArcY, 170, 170, HALF_PI, PI);
    lArcX+=arcDirection;
    if(lArcX >= 300 || lArcX <= 200)
    {
        arcDirection *= -1;
    }
    lArcY+=arcDirection;
    if(lArcY >= 200 || lArcY <= 100)
    {
        arcDirection *= -1;
    }
    stroke('#230755');
    arc(250, 155, 180, 180, PI, PI + QUARTER_PI);
    arc(250, 155, 190, 90, PI + QUARTER_PI, TWO_PI);
    
    // eyes
    stroke(0);
    strokeWeight(10);
    //left eye
    arc(200, 130, lEye, 10, 0, PI + TWO_PI, CHORD);
    lEye+=eyeDirection;
    if(lEye >= 1 || lEye <= 5)
    {
        eyeDirection *= -1;
    }
    //right eye
    arc(285, 130, rEye, 10, 0, PI + TWO_PI, CHORD);
    rEye+=movement;
    if(rEye >= 1 || rEye <= 10)
    {
        movement *= -1;
    }
    
    // mouth
    strokeWeight(10);
    triangle(245, 190, 250, topMouthY, 255, 190);
    topMouthY+=topMouthDirection;
    if(topMouthY >= 181 || topMouthY <= 170)
    {
        topMouthDirection *= -1;
    }
    
    // body
    stroke(0);
    fill('#C5ECAD');
    strokeWeight(3);
    rect(230, 230, bodyW, bodyH);
    bodyH+=bodyDirection;
    if(bodyH >= 200 || bodyH <= 150)
    {
        bodyDirection *= -1;
    }
    
    //arms
    stroke(0);
    //left arm
    line(230, 275, lHandX, lHandY);
    lHandX+=lHandDirection;
    if(lHandX >= 331 || lHandX <= 200)
    {
        lHandDirection *= -1;
    }
    //right arm
    line(305, 275, rHandX, rHandY);
    rHandX+=rHandDirection;
    if(rHandX >= 331 || rHandX <= 200)
    {
        rHandDirection *= -1;
    }
    
    textSize(22);
    stroke('#230755');
    fill('#912C5EA5');
    text("Tanya Little", 365, 475);
  }