    // VARIABLES
// character x and y
var heroX = 100;
var heroY = 100;

// letter key code variables
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// enemy 1 variables
var enemyX = 0;
var enemyY = 0;
var enemyXSpeed;
var enemyYSpeed;

// enemy 2 variables
var enemy2X = 500;
var enemy2Y = 500;
var enemy2XSpeed;
var enemy2YSpeed;

// mouse click shape
var mouseShapeX;
var mouseShapeY;




    // SETUP AND DRAW
function setup()
{
    // call createCanvas(width,height) function
    createCanvas(500, 500);
  
    // call createHero(x,y) function
    createHero(250,250);
}

function draw()
{
    // call createBackground(r,g,b) function
    createBackground(100,25,100);
    
    // call createBorders(thickness) function
    createBorders(10);

    // call createExit(message) function
    createExit("Run Here!");

    // call exitCheck(winMessage) function
    exitCheck("You're Saved!");
  
    // call drawHero(diameter) function
    drawHero(30);
  
    // call heroMovement(distance) function
    heroMovement(3);

    // call enemyOne(size,speed) function
    enemyOne(20, 5);
  
    // call enemyTwo(size,speed) function
    enemyTwo(30, 3);

    // call mouseShape(diameter) function
    mouseShape(5);
}



    // ENVIRONMENT FUNCTIONS
function createBackground(r,g,b)
{
    background(r,g,b);
    stroke(0);
    fill(0);
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,50,thickness,height);
    // bottom border
    rect(0, height - thickness,width,thickness);
    // right upper border
    rect(width - thickness,0,thickness,height);
}



      // EXIT FUNCTIONS
function createExit(message)
{
    // exit message
    textSize(16);
    text(message, width - 485,height - 475)
}

function exitCheck(winMessage)
{
    // exit check!
    if((heroX <= 5) && (heroY <= 50))
    {
        fill(0);
        stroke(5);
        textSize(30);
        text(winMessage, width/2 - 100, height/2);
    }
}



      // HERO FUNCTIONS
function createHero(x,y)
{
    // hero x and y
    heroX = x;
    heroY = y;
    console.log(heroX);
}

function drawHero(diameter)
{
    fill(75,100,250);
    circle(heroX,heroY,diameter);
}

function heroMovement(distance)
{
    // handle the keys
    if(keyIsDown(w))
    {
        heroY -= distance;   
    }
    if(keyIsDown(s))
    {
        heroY += distance;   
    }
    if(keyIsDown(a))
    {
        heroX -= distance;   
    }
    if(keyIsDown(d))
    {
        heroX += distance;   
    }
}



      // ENEMY FUNCTIONS
function enemyOne(size, speed)
{
    // draw enemy 1
    fill(255);
    square(enemyX, enemyY, size);
  
    // enemy 1: random starting speed
     enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * speed)) + 1);
     enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * speed)) + 1);
  
    // enemy 1: movement
    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;
  
    // enemy 1: boundary check
    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
}

function enemyTwo(size, speed)
{
    // draw enemy 2
    fill(0)
    square(enemy2X, enemy2Y, size);

    // enemy 2: random starting speed
     enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * speed)) + 1);
     enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * speed)) + 1);

    // enemy 2: movement
    enemy2X -= enemy2XSpeed;
    enemy2Y -= enemy2YSpeed;
    
    // enemy 2: boundary check
    if(enemy2X > width)
    {
        enemy2X = 500;
    }
    if(enemy2X < 0)
    {
        enemy2X = width;
    }
    if(enemy2Y > height)
    {
        enemy2Y = 500;
    }
    if(enemy2Y < 0)
    {
        enemy2Y = height;
    }
}



      // MOUSE CLICK FUNCTIONS
function mouseShape(diameter)
{
    // create mouse click shape
    fill(0);
    circle(mouseShapeX, mouseShapeY, diameter);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}



      // RESERVE FUNCTIONS
/*
function keyPressed() 
  {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
*/