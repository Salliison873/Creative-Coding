function setup() {
  createCanvas(400, 400);
}
let x = 320; //where it starts
let y = 180; // where it ends and repeats
let xspeed = 2; // speed of the ball that moves right to left
let yspeed = 2; // speed of the ball that moves up and down

function draw() {
  background('#00BCD4'); //blue 
  fill('#FFC107'); //create the color of the cirlce
  noStroke();
  ellipse(x, y, 60, 60); //makes the circle
  x += xspeed; //moves the ball side to side
  y += yspeed; // moves the ball up and down
  if (x > width - 60 || x < 60) { //moves the ball
    xspeed = -xspeed;
  }
  if (y > height - 60 || y < 60) {
    yspeed = -yspeed;
  }
}
