var runner_running,runner;
var path;

function preload(){
  //pre-load images
   runner_running = loadAnimation("Runner-1.png","Runner-2.png");
   pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
   path = createSprite(200,200);
   path.addImage(pathImage);
   path.velocityY = 4;
   path.scale = 1.2;

   runner = createSprite(200,200);
   runner.addAnimation("runner",runner_running);
   runner.scale = 0.1;
 
}

function draw() {
  background(0);

  if (path.y > 400){
    path.y = height/2;
  }

  runner.x = World.mouseX;
  drawSprites();
}
