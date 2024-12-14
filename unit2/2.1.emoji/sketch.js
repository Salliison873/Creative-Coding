function setup() {
  // Create a canvas
  createCanvas(800, 400);
  // Disable animation
  noLoop();
}

function draw() {
  // Set the background color
  background(220);
  
  // Draw the first emoji face
  drawFace(150, 200, "yellow", "happy");
  
  // Draw the second emoji face
  drawFace(400, 200, "blue", "sad");
  
  // Draw the third emoji face
  drawFace(650, 200, "green", "surprised");
}

// Function to draw a face at a specified location with a specified color and expression
function drawFace(x, y, faceColor, expression) {
  // Body of the face
  fill(faceColor);
  stroke("black");
  circle(x, y, 150);

  // Left Eye
  fill("white");
  stroke("black");
  circle(x - 30, y - 30, 40);
  fill("black");
  circle(x - 30, y - 30, 20);

  // Right Eye
  fill("white");
  stroke("black");
  circle(x + 30, y - 30, 40);
  fill("black");
  circle(x + 30, y - 30, 20);

  // Mouth
  fill("black");
  if (expression === "happy") {
    arc(x, y + 10, 70, 70, 0, PI); // Happy mouth
  } else if (expression === "sad") {
    arc(x, y + 40, 70, 70, PI, 0); // Sad mouth
  } else if (expression === "surprised") {
    ellipse(x, y + 20, 70, 30); // Surprised mouth
  }
}
