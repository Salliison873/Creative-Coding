function setup() {
  // Create a canvas of size 1200x1200 pixels
  createCanvas(1200, 1200);
  // Set the frame rate to 3 frames per second
  frameRate(3);
}

function draw() {
  // Set the background color to black
  background('black');

  // Move the origin to (20, 40)
  translate(20, 40);

  // Loop to create an 8x8 grid of triangles
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      push(); // Save the current transformation state
      // Generate a random color with RGB values
      let RanColor = color(random(255), random(255), random(255));
      // Move to the position for the current shape in the grid
      translate(x * 200, y * 150); // Adjusted to fit within canvas size
      // Set the fill color to the random color
      fill(RanColor);
      // Draw a triangle at the specified coordinates
      triangle(50, 100, 100, 50, 150, 100);
      pop(); // Restore the previous transformation state
    }
  }

  // Loop to create another 8x8 grid of rectangles
  for (let h = 0; h < 8; h++) {
    for (let i = 0; i < 8; i++) {
      push(); // Save the current transformation state
      // Generate another random color with RGB values
      let RanColor2 = color(random(255), random(255), random(255));
      // Move to the position for the current rectangle in the grid
      translate(i * 200, h * 150); // Adjusted to fit within canvas size
      // Set the fill color to the random color
      fill(RanColor2);
      // Draw a rectangle at the origin (0, 0) with width and height 140
      rect(0, 0, 140, 140);
      pop(); // Restore the previous transformation state
    }
  }
}
