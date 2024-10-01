function setup() {
  // create a canvas
  // use https://p5js.org/reference/p5/random/ as a reference.
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}


function draw(){
background(50, 55, 100);
translate(100,100);
colorMode(HSB, 100);
let RanColor = color(random(100), random(200), random(245))
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 100, y * 100);
      fill('white');
      rect(0,0,120,120);
      fill(RanColor);
      ellipse(50,50,100, 100);

      pop();

     }
  }
}

