var snow,snowImg;
var bgImg;

function preload() {
  snowImg = loadImage("snow4.webp");
  bgImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnow();
}

function createSnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.velocityX = -2;
  snow.velocityY = 4;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  }
}



  







