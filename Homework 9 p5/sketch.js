function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background('#16466C');
    
    // title
    textSize(22);
    fill('#912C5EA5');
    stroke('#230755');
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
    circle(250, 150, 150);
    
      noFill();
    stroke('#498825');
    arc(255, 160, 175, 175, 0, HALF_PI);
    arc(250, 155, 170, 170, HALF_PI, PI);
    stroke('#230755');
    arc(250, 155, 180, 180, PI, PI + QUARTER_PI);
    arc(250, 155, 190, 90, PI + QUARTER_PI, TWO_PI);
    
    // eyes
    stroke(0);
    strokeWeight(10);
    arc(200, 130, 10, 10, 0, PI + TWO_PI, CHORD);
    arc(285, 130, 10, 10, 0, PI + TWO_PI, CHORD);
    
    // mouth
    strokeWeight(10);
    triangle(245, 190, 250, 180, 255, 190);
    
    // body
    stroke(0);
    fill('#C5ECAD');
    strokeWeight(3);
    rect(230, 230, 75, 150);
    
    //arms
    stroke(0);
    line(305, 275, 330, 330);
    line(230, 275, 330, 330);
    
    textSize(22);
    stroke('#230755');
    fill('#912C5EA5');
    text("Tanya Little", 365, 475);
  }