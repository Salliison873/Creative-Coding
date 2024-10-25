function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}
function draw(){
  background('white');
  fill('#03A9F4')
  rect(0,0,400,400);
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
