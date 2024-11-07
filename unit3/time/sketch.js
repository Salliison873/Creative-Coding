 // Draw the clock background
  noStroke();
  fill('#C256BA');
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill('#ffa9f9');
  ellipse(0, 0, clockDiameter, clockDiameter);
  function preload(){
  img1 =loadImage("unit3/time/Flowers.png")
}

function draw() {
background(220);
image(img1,0,0,400,200);
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
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) { 
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();
  
}
