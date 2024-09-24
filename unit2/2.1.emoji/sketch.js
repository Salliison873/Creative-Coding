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
  stroke("black");
  circle(200,200,250);

  //The mounth
  fill("#000000");
  strokeWeight(1);
  rect(275,245,-150,20);

  //Right eye
  fill("#000000");
  strokeWeight(1);
  rect(225,120,60,20);

  //Left eye
  fill("#000000");
  strokeWeight(1);
  rect(125,130,60,20);


  
  

  
  
  
  
  
  
  

  rectMode(CENTER);
 
}
