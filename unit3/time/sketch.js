// Use P5.j reference as a reference 
//Art statement:
// what the clock represent is time is moving that everything coming it a minute. 
// Declare variables for shape radius
let img;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function preload() {
  img = loadImage('https://salliison873.github.io/Creative-Coding/unit3/time/flower.jpg');
}

function setup() {
  createCanvas(400, 400);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
}

function draw() {
  background("#FFF7AD");

  // Move origin to center of canvas
  translate(width / 2, height / 2-40);

  // Draw the clock background
  noStroke();
  fill('#C256BA');
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill('#ffa9f9');
  ellipse(0, 0, clockDiameter, clockDiameter);
  img.resize(clockDiameter,clockDiameter);
  image(img, -100, -100);

function draw() {
background(220);
}

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(1);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(2);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(10);
  for (let ticks = 0; ticks < 60; ticks += 1) { 
    point(0, -secondsRadius /10);
    rotate(6);
  }
  pop();
 
}
