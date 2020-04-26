var b1,b2,b3,b4;
var w1,w2,w3,w4;

function setup() {
  createCanvas(800,400);
  
  b1 = createSprite(30,60,20,20);
  b2 = createSprite(30,160,20,20);
  b3 = createSprite(30,240,20,20);
  b4 = createSprite(30,340,20,20);

  w1 = createSprite(770,60,50,40);
  w2 = createSprite(770,160,50,40);
  w3 = createSprite(770,240,50,40);
  w4 = createSprite(770,340,50,40);

  b1.shapeColor = "white";
  b2.shapeColor = "white";
  b3.shapeColor = "white";
  b4.shapeColor = "white";

  w1.shapeColor = color(80,80,80);
  w2.shapeColor = color(80,80,80);
  w3.shapeColor = color(80,80,80);
  w4.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  if(keyDown("space")){
    b1.velocityX = 20;
    b2.velocityX = 20;
    b3.velocityX = 20;
    b4.velocityX = 20;
  }

  if(b1.isTouching(w1)){
    b1.velocityX = 0;
    w1.shapeColor = "red"; 
  }

  if(b2.isTouching(w2)){
    b2.velocityX = 0;
    w2.shapeColor = "green"; 
  }

  if(b3.isTouching(w3)){
    b3.velocityX = 0;
    w3.shapeColor = "green"; 
  }

  if(b4.isTouching(w4)){
    b4.velocityX = 0;
    w4.shapeColor = "red"; 
  }

  drawSprites();
}