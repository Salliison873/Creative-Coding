// Use P5.j reference as a reference 
//Art statement:
/* Time and flowers, woven together, tell a story of impermanence and beauty.
   They challenge us to cherish the fleeting moments, to find joy in the transient, 
   and to understand that in every ending lies a new beginning. They remind us that life, much like a flower, 
   is a series of blooms and withers, each phase valuable in its own right. */

// Declare variables for shape radius
let img; // Variable to store the image
let sec; // Length of the second hand
let min; // Length of the minute hand
let hours; // Length of the hour hand
let clockDiameter; // Diameter of the clock face

function preload() {
  // Load the image before the sketch starts
  img = loadImage('https://salliison873.github.io/Creative-Coding/unit3/time/flower.png');
}

function setup() {
  createCanvas(500, 500); // Create a canvas of size 500x500 pixels
  stroke(255); // Set the stroke color to white
  angleMode(DEGREES); // Set angle mode to degrees

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  sec = radius * 0.71;
  min = radius * 0.6;
  hours = radius * 0.5;
  clockDiameter = radius * 1.7;
}

function draw() {
  background('white'); // Set the background color to white

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  noStroke(); // Disable stroke
  fill('#ffa9f9'); // Set fill color to pink
  ellipse(0, 0, clockDiameter, clockDiameter); // Draw the clock face
  img.resize(clockDiameter, clockDiameter); // Resize the image to fit the clock face
  image(img, -clockDiameter/2, -clockDiameter/2); // Display the image at the center

  // Calculate angle for each hand
  let secAngle = map(second(), 0, 60, 0, 360); // Map second() to 0-360 degrees
  let minAngle = map(minute(), 0, 60, 0, 360); // Map minute() to 0-360 degrees
  let hourAngle = map(hour(), 0, 12, 0, 360); // Map hour() to 0-360 degrees

  stroke(255); // Set stroke color to white

  // Second hand
  push(); // Save the current transformation state
  rotate(secAngle); // Rotate by the angle of the second hand
  strokeWeight(1); // Set stroke weight for the second hand
  line(0, 0, 0, -sec); // Draw the second hand
  pop(); // Restore the previous transformation state

  // Minute hand
  push(); // Save the current transformation state
  strokeWeight(2); // Set stroke weight for the minute hand
  rotate(minAngle); // Rotate by the angle of the minute hand
  line(0, 0, 0, -min); // Draw the minute hand
  pop(); // Restore the previous transformation state

  // Hour hand
  push(); // Save the current transformation state
  strokeWeight(4); // Set stroke weight for the hour hand
  rotate(hourAngle); // Rotate by the angle of the hour hand
  line(0, 0, 0, -hours); // Draw the hour hand
  pop(); // Restore the previous transformation state

  // Tick markers around the perimeter of the clock
  push(); // Save the current transformation state
  strokeWeight(10); // Set stroke weight for the tick markers
  for (let ticks = 0; ticks < 60; ticks += 1) { 
    point(0, -sec); // Draw each tick marker
    rotate(6); // Rotate to the position of the next tick marker (6 degrees)
  }
  pop(); // Restore the previous transformation state
}
