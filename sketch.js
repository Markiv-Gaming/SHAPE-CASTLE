function setup() {
  createCanvas(400,400);
  createSprite(70, 200, 70, 200);
  createSprite(45,90, 20,30);
  createSprite(95, 90, 20, 30);
  createSprite(145, 220, 70,150);
  createSprite(220, 220, 70, 150);
  createSprite(295, 200, 70, 200);
  createSprite(320,90, 20,30);
  createSprite(270, 90, 20, 30);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}