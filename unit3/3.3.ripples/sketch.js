//use your video as a reference 
let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;



function setup() {
  createCanvas(800, 800);
}

class Rippler {
  constructor(x,y){
    this.x = x,
    this.y = y,
    this.d = 0
  }
  draw(){
    this.d += 1;
    circle(this.x, this.y,this.d);
  }
}
let ripplers = [];

function draw() {
    background('#03A9F4'); //the color of the background
    stroke('blue'); //the color of the ripplers
    strokeWeight(5);
    noFill();
    for(let i = 0; i < ripplers.length; i++){
      ripplers[i].draw(); 
    }
    
 

}

function mousePressed(){
  
  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0; // allows the click to create the rippler effect. 
  
  ripplers.push( new Rippler(mouseX, mouseY));
}
