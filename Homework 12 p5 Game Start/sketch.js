// character x and y
var heroX = 100;
var heroY = 100;

// key code variables
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// enemy 1: variables
var enemyX = 0;
var enemyY = 0;
var enemyXSpeed;
var enemyYSpeed;

// enemy 2: variables
var enemy2X = 500;
var enemy2Y = 500;
var enemy2XSpeed;
var enemy2YSpeed;

// mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
  createCanvas(500, 500);
    createHero(250,250);
}

function draw()
{
    background(100,25,100);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("Run Here!", width - 485,height - 475)

    // createHero(250,250);
    drawHero();
    heroMovement();

    // enemy 1
    fill(255);
    square(enemyX, enemyY, 20);
  
    // enemy 2
    fill(0)
    square(enemy2X, enemy2Y, 30);

     // enemy 1: random starting speed
     enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     // enemy 2: random starting speed
     enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // enemy 1: movement
    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;
    // enemy 2: movement
    enemy2X -= enemy2XSpeed;
    enemy2Y -= enemy2YSpeed;
    
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

    // exit check!
    if((heroX <= 5) && (heroY <= 50))
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You're Saved!!", width/2 - 100, height/2);
    }

    // create mouse click shape
    fill(0);
    circle(mouseShapeX, mouseShapeY, 5);
}

function heroMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        heroY -= 3;   
    }
    if(keyIsDown(s))
    {
        heroY += 3;   
    }
    if(keyIsDown(a))
    {
        heroX -= 3;   
    }
    if(keyIsDown(d))
    {
        heroX += 3;   
    }
}

function createHero(x,y)
{
    heroX = x;
    heroY = y;
    console.log(heroX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawHero()
{
    fill(75,100,250);
    circle(heroX,heroY,30);
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

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

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