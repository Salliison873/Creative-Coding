function setup() {
  // create a canvas
  // use https://p5js.org/reference/p5/random/ as a reference.
  createCanvas(1200, 1200);
  frameRate(3); // how fast it goes through the loop each time

  // disable animation
}

function draw(){
background('black'); // The color of the background
translate(20,40);
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      let RanColor = color(random(100), random(200), random(300)) // Each time it goes through the loop it chooses a different color for the cirlces
      translate(x * 200, y * 300);
      fill(RanColor);
      ellipse(70,220,160, 160);
     pop();
   }

for(let h = 0; h < 8; h++){
    for(let i = 0; i < 8; i++){
        push();
        let RanColor2 = color(random(100), random(200), random(300)) // Each time it goes through the loop it chooses a different color for the rect
        translate(i * 200, h * 300);
        fill(RanColor2);
        rect(0,0,140,140);
        pop();
        }
     }  
   }
}
