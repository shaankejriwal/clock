function setup() {
  createCanvas(800,400);
  clock = new clock(400,200,30,30);

  hourhand = new hands()
}

function draw() {
  background(0);  
  drawSprites();
  clock.display();
}