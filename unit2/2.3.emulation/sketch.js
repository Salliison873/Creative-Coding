function setup() {
  // create a canvas
  // use https://p5js.org/reference/p5/random/ as a reference.
  createCanvas(700, 800);

  // disable animation
  noLoop();
}

function draw(){
background('white');
translate(6,105);
colorMode(HSB, 100);
for (let x = 0; x < 30; x+=1){
   for (let y = 0; y < 30; y+=1){
     push();
     translate(x * 100, y * 100);
     stroke('#b6d2cd'); // the fill outline of the color
     strokeWeight(5); // the thickess of the outline of the squares.
     rect(0,0,80,80); // the squares
     pop();
   }
}
for (let x = 5; x < 15; x++){
   for (let y = 5; y < 15; y++){
     let randomX = random(80,530);
     let randomY = random(50,530);
     let color = ["#b4453c","#92608e","#b48a5f"];
     let chosenColor = random(color);
     push();
     translate(randomX, randomY);
     stroke(chosenColor)
     strokeWeight(5); // the thickess of the outline of the squares.
     noFill();
     rect(0,0,80,80); // the squares
     pop();
   }
}
}
