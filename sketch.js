var fixedRect,movingRect;

function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect=createSprite(800,200,50,80);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;

  fixedRect.velocityX=5;
  movingRect.velocityX=-5;

}

function draw() {
  background("purple");  

if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2  )
{
  fixedRect.velocityX=fixedRect.velocityX*(-1);
  movingRect.velocityX=movingRect.velocityX*(-1);
}
if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2  )
{
 fixedRect.velocityY=fixedRect.velocityY*(-1);
 movingRect.velocityY=movingRect.velocityY*(-1);

}
  drawSprites();
}