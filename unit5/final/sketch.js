function setup() {
  // create a canvas
  // use https://p5js.org/reference/p5/random/ as a reference.
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw(){
background('Black');
translate(100,100);
colorMode(HSB, 100);
for (let x = 0; x < 5; x++){
   for (let y = 0; y < 5; y++){
      push();
      translate(x * 200, y * 200);
      fill('white');
      rect(0,0,120,120);
      pop();
     }
  }
}
