var fixedRect, movingRect;

function setup() {
  createCanvas(500,500);
  
  fixedRect = createSprite(250,250, 50, 50);
  fixedRect.shapeColor = "white";

  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "white";

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y-fixedRect.y < fixedRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2)
    {
      movingRect.shapeColor = color(random(255,0,0),random(0,255,0),random(0,0,255));
      fixedRect.shapeColor = color(random(255,0,0),random(0,255,0),random(0,0,255));
    }
    else
    {
      movingRect.shapeColor = "white";
      fixedRect.shapeColor = "white";
    }
 drawSprites();
}