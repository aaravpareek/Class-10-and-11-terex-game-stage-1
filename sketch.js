var trex, trex_running, edges;
var groundImage;

var ground;
var ground2;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground = createSprite(300,160,600,10)
ground. velocityX= -5;
ground.addImage(groundImage)

ground2 = createSprite(50,170,600,10)
ground2.visible = false;
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y >= 141){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x < 0){
    ground.x= 300;
  }
  //stop trex from falling down
  trex.collide( ground2)
  drawSprites();
}