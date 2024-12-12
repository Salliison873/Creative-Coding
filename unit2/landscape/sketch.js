



function setup() {
  createCanvas(400, 400);  // Sets the canvas size to 400x400 pixels
  noStroke();              // Disables drawing the outline (stroke) around shapes
  noLoop();                // Prevents the draw function from looping continuously
}

function draw() {
  background('white');    // Sets the background color to white
  // Draws five yellow ellipses (cloud-like shapes)
  ellipse(50, 50, 60, 50);
  ellipse(80, 40, 60, 50); // create the sun
  ellipse(130, 50, 60, 50);
  ellipse(70, 70, 60, 50);
  ellipse(110, 65, 60, 50);

  fill('#FFEB3B');        // Sets the fill color to yellow
  ellipse(400, 20, 150, 150);  // Draws the sun

  let from = color('#795548');  // Brown color (start of gradient)
  let to = color('rgb(20,204,20)');  // Green color (end of gradient)

  // Creates the mountains and fills them with gradient color
  for (let x = 0; x < 400; x++) {
    let y = floor(noise(x * 0.005) * 300);  // Creates the outline for the mountains using Perlin noise
    fill('rgb(20,204,20)');  // Sets the fill color to green for the mountain outline
    circle(x, y, 4);  // Draws a small circle to outline the mountains
    for (let m = y; m < 400; m++) {  // Fills the mountains with gradient colors from green to brown
      let fill_color = lerpColor(to, from, m / 400);  // Interpolates between green and brown
      fill(fill_color);  // Sets the fill color to the interpolated color
      rect(x, m, 1, 100);  // Draws a vertical line (rectangle) to create the gradient fill
    }
  }
}
