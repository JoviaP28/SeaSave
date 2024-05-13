var mermaid, mermaidImage
var octopus, octopusImage
var treasure, treasureImage
function preload(){
  mermaidImage=loadAnimation("m1.png","m2.png","m3.png","m4.png")
  octopusImage=loadAnimation("octo1.png","octo2.png","octo3.png","octo4.png","octo5.png")
  treasureImage=loadImage("treasure.png")
}
function setup() {
  createCanvas(1000,600);
 mermaid=createSprite(700,500)
 mermaid.addAnimation("mermaid",mermaidImage)
 mermaid.scale=0.7
 octopus=createSprite(100,500)
 octopus.addAnimation("octopus",octopusImage)
 octopus.scale=0.9
octopus.velocityX=3
treasure=createSprite(500,550)
treasure.addImage("treasure",treasureImage)
treasure.scale=0.5
}

function draw() {
  background("skyblue");  
  if(keyDown("up")){
    mermaid.y-=5
  }
  if(keyDown("down")){
    mermaid.y+=5
  }
  if(keyDown("left")){
    mermaid.x-=5
  }
  if(keyDown("right")){
    mermaid.x+=5
  }
  drawSprites();
}