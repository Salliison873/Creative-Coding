function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}
function draw(){
  background('white');
  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
  fill('#FFEB3B');
  ellipse(400,20,150,150);
  let from = color('#795548'); // start here 
  let to = color('rgb(20,204,20)'); // end here
  
  for (let x = 0; x < 400; x++) {
    let y = floor(noise(x * 0.005) * 300); //Create the outline for the different mountain view 
    fill('rgb(20,204,20)');
    circle(x, y, 4);
    for (let m = y; m < 400; m++) { // fills the color the different line. 
      let fill_color = lerpColor(to, from, m / 400);
      fill(fill_color);
      rect(x,m,1,100);

    }
  }
}
