function setup() {
  createCanvas(400, 400);  // Sets the canvas size to 400x400 pixels
  noStroke();              // Disables drawing the outline (stroke) around shapes
}

function draw() {
  background('white');    // Sets the background color to white

  let from = color('#795548');  // Brown color (start of gradient)
  let to = color('rgb(20,204,20)');  // Green color (end of gradient)

  // Creates the mountains and fills them with gradient color
  for (let x = 0; x < 400; x++) {
    let y = floor(noise(x * 0.005) * 300);  // Creates the outline for the mountains using Perlin noise
    fill('rgb(20,204,20)');  // Sets the fill color to green for the mountain outline
    circle(x, y, 4);  // Draws a small circle to outline the mountains
    
    for (let m = y; m < 400; m++) {  // Fills the mountains with gradient colors from green to brown
      let fillColor = lerpColor(to, from, m / 400);  // Interpolates between green and brown
      fill(fillColor);  // Sets the fill color to the interpolated color
      rect(x, m, 1, 100);  // Draws a vertical line (rectangle) to create the gradient fill
    }
  }

  fill('#FFEB3B');  // Sets the fill color to yellow
  ellipse(400, 20, 150, 150);  // Draws the sun and ensures it is always visible by drawing it last
}

