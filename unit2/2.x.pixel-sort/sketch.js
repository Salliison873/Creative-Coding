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
  
  //left Eye
  fill("white");
  stroke("black");
  circle(150,150,90);
  fill("black");
  stroke("black");
  circle(150,132,55);
  
  // Right Eye
  fill("white");
  stroke("black");
  circle(250,150,90);
  fill("black");
  stroke("black");
  circle(250,132,55);
  
  // Mouth
  fill("black");
  strokeWeight(25);
  line(120,250,275,250);
  rectMode(CENTER);
 
}
  rectMode(CENTER);
 
}
