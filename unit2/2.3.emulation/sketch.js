function setup() {
  createCanvas(1200, 1200);
}
function draw(){
background('white');
translate(100,100);
colorMode(HSB, 100);
for (let x = 0; x < 50; x+=1){
   for (let y = 0; y < 50; y+=1){
     push();
     translate(x * 100, y * 100);
     stroke('#00BCD4'); // the fill outline of the color
     strokeWeight(5); // the thickess of the outline of the squares.
     rect(0,0,80,80); // the squares
     pop();
   }
}
for (let x = 5; x < 15; x++){
   for (let y = 5; y < 15; y++){
     push();
     let RanColor = color(random(100), random(256), random(300));
     translate(x * random(100), y * random(200));
     stroke(RanColor); // the fill outline of the color
     strokeWeight(5); // the thickess of the outline of the squares.
     rect(0,0,80,80); // the squares
     pop();
   }
}
}
