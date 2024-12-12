function setup() {
  createCanvas(400, 400); // Sets up the canvas with dimensions 400x400
}
let x = 320; // Initial x position of the ball
let y = 180; // Initial y position of the ball
let xspeed = 2; // Speed of the ball in the x direction
let yspeed = 2; // Speed of the ball in the y direction
let ballColor; // Variable to store the current color of the ball

function draw() {
  background('#00BCD4'); // Sets the background color to blue
  fill(ballColor); // Sets the fill color to the current ball color
  noStroke(); // Disables drawing the outline
  ellipse(x, y, 60, 60); // Draws the ball
  x += xspeed; // Updates the x position
  y += yspeed; // Updates the y position
  
  // Check if the ball hits the left or right edge
  if (x > width - 30 || x < 30) {
    xspeed = -xspeed; // Reverse the x direction
    ballColor = randomColor(); // Change to a random color
  }
  
  // Check if the ball hits the top or bottom edge
  if (y > height - 30 || y < 30) {
    yspeed = -yspeed; // Reverse the y direction
    ballColor = randomColor(); // Change to a random color
  }
}

// Function to generate a random color
function randomColor() {
  return color(random(255), random(255), random(255));
}

// Set an initial color for the ball
function setup() {
  createCanvas(400, 400); // Sets up the canvas with dimensions 400x400
  ballColor = randomColor(); // Sets the initial color of the ball
}
