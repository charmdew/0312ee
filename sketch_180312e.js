var xPos;

var xDir;

function setup() {
  createCanvas( 500, 500);
  xPos = 0;
  xDir = 1;
  
}

function draw() {
  background(128);
  
  ellipse( xPos, 250, 100, 100);
  xPos = xPos + xDir;
  
  if(xPos<0) xDir = xDir * -1;
  if(xPos >width) xDir = xDir * -1;  
}
