function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Body of the face
  background(220);
  fill("yellow");
  circle(200,200,250);
  stroke("black");

  //The mounth
  fill("black");
  strokeWeight(1);
  rect(200.90.40,200);

  //Left eye
  strokeWeight(8);
  line(160,150,110,180);

  //Right eye
  strokeWeight(8);
  line(160,400,110,180)
  
  
  
  
  

  rectMode(CENTER);
 
}
