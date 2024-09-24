function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  nostoke();
  fill(250,200,250);
  ellipse(width/2, height/2, 250); 
  

  rectMode(CENTER);
 
}
