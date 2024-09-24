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
  strokeWeight(8);
  line(300,200,70,200);

  //Right eye
  fill("#000000");
  strokeWeight(1);
  rect(225,140,60,20);

  //Left eye
  fill("#000000");
  strokeWeight(1);
  rect(125,140,60,20);


  
  

  
  
  
  
  
  
  

  rectMode(CENTER);
 
}
