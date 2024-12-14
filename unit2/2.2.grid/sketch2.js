function setup() {
  // Create a canvas of size 800x800 pixels
  createCanvas(700, 700);
  // Set the frame rate to 3 frames per second
  frameRate(3);
  // Disable animation
}

function draw() {
  // Set the background color to black
  background('black');
  
  // Move the origin to (0, 0)
  translate(0, 0);

  // Loop to create an 8x8 grid of alternating shapes
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      push(); // Save the current transformation state
      // Generate a random color with RGB values
      let RanColor = color(random(255), random(255), random(255));
      let RanColor2 = color(random(255), random(255), random(255));
      // Move to the position for the current shape in the grid
      translate(x * 150, y * 150); // Adjust to fit within canvas size
      // Set the fill color to the random color

      if ((x + y) % 2 == 1) {
        // Draw a rectangle at the origin (0, 0) with width and height 140
        fill(RanColor);
        rect(0, 10, 140, 140);
      } if((x + y) % 2 == 1) {
        // Draw a triangle at the specified coordinates to match the rectangle size
        fill(RanColor2);
        triangle(0, 0, 140, 0, 70, -140);
      }

      pop(); // Restore the previous transformation state
    }
  }
}
