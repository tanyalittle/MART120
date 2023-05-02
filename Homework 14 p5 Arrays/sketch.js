     // VARIABLES
// character x and y
var heroX = 100;
var heroY = 100;

// letter key code variables
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// enemy variables
var enemyX = 30;
var enemyY = 50;

var enemyXs = [];
var enemyYs = [];
var diameters = [];

var enemyXSpeeds = [];
var enemyYSpeeds = [];

// mouse click shape
var mouseShapeX;
var mouseShapeY;




    // SETUP AND DRAW
function setup()
{
    // call createCanvas(width, height) function
    createCanvas(500, 500);
  
    // call enemyStartSpeed(numEnemies, diameter) function
    enemyStartSpeed(50, 20);

    // call createHero(x, y) function
    createHero(250, 250);
}

function draw()
{
    // call createBackground(r, g, b) function
    createBackground(100, 25, 100);
    
    // call createBorders(thickness) function
    createBorders(10);

    // call createExit(size, message) function
    createExit(16, "Run Here!");

    // call exitCheck(size, winMessage) function
    exitCheck(30, "You're Saved!");
  
    // call drawHero(diameter) function
    drawHero(30);
  
    // call heroMovement(distance) function
    heroMovement(3);
  
    // call drawEnemies() function
    drawEnemies();
  
    // call enemyMovement() function
    enemyMovement();

    // call mouseShape(diameter) function
    mouseShape(5);
}



    // ENVIRONMENT FUNCTIONS
function createBackground(r, g, b)
{
    background(r, g, b);
    stroke(0);
    fill(0);
}

function createBorders(thickness)
{
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 50, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height);
}



      // EXIT FUNCTIONS
function createExit(size, message)
{
    // exit message
    fill(0);
    textSize(size);
    text(message, width - 485, height - 475)
}

function exitCheck(winMessage)
{
    // exit check!
    if((heroX <= 5) && (heroY <= 50))
    {
        fill(255);
        stroke(5);
        textSize(size);
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
    fill(75, 100, 250);
    circle(heroX, heroY, diameter);
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
function enemyStartSpeed(numEnemies, diameter)
{
    // get a random speed at start of game
for (var i = 0; i < numEnemies; i++) {
    enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyXs[i] = getRandomNumber(500);
    enemyYs[i] = getRandomNumber(500);
    diameters[i] = getRandomNumber(diameter);
  }
}

function drawEnemies()
{
    // enemy color
    fill(255, 150, 200);
  
    // for loop to create enemies
    for (var i = 0; i < enemyXs.length; i++) {
        circle(enemyXs[i], enemyYs[i], diameters[i]);
        enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }   
}

function enemyMovement()
{
    // move the enemies
    enemyXs[i] += enemyXSpeeds[i];
    enemyYs[i] += enemyYSpeeds[i];
    
    // enemy boundary check
    if (enemyXs[i] > width) {
        enemyXs[i] = 0;
    }
    if (enemyXs[i] < 0) {
        enemyXs[i] = width;
    }
    if (enemyYs[i] > height) {
        enemyYs[i] = 0;
    }
    if (enemyYs[i] < 0) {
        enemyYs[i] = height;
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

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
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