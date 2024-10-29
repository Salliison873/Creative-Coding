let debug = true;
let x =0;
let y =0;
let d =0;
let score =0;
let goalx =0;
let goaly = 0;
let speedfactor =3;
let speedx= speedfactor;
let speedy = speedfactor;
let goalSize = 40;

function setup() {
  createCanvas(400, 400);
  x = random(25, width- 25);
  y = random(25, height- 25);
  
  
  goalx = random(width);
  goaly = random(height);
  

  
  
  
}

function draw() {
  background('#2196F3');
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
  fill('#FFEB3B')
  rect(goalx,goaly,goalSize,goalSize);
  fill('rgb(14,126,14)')
  circle(x,y,50);
  x += speedx;
  y += speedy;
  
  if (mouseX > x){
    speedx = speedfactor
  }else{
    speedx = -speedfactor;
  }
  
  if (mouseY > x){
    speedy = speedfactor
  }else{
    speedy = -speedfactor;
  }
  
  
  if (d < 25){
    score -= 1;
    x = random(25, width -25);
    y = random(25, height- 25);
  }
  if (
   mouseX > goalx & 
   mouseX < goalx + goalSize & 
   mouseY > goaly & 
   mouseY < goaly + goalSize){
    score =+ 1;
    x = random(25, width- 25);
    y = random(25, height- 25);
    
    goalx = random(20, width - 20);
    goaly = random(20, height -20);
  }
}
