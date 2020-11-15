var fixedRect, movingRect;
var sprite1,sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityX=-4;
  movingRect.velocityX=2;

  sprite1=createSprite(100,100,50,50);
  sprite1.shapeColor="green";
  sprite2=createSprite(300,100,50,50);
  sprite2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  sprite1.x = World.mouseX;
  sprite1.y = World.mouseY;
  
  if(isTouching(sprite1,sprite2)){
  sprite1.shapeColor = "red";
  sprite2.shapeColor = "red";
  }
  else{
    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";
  }
bounceOff(movingRect,fixedRect);
  drawSprites();
}

