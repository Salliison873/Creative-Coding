//used your videos as a reference. 
let debug = true;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let goalx = 0;
let goaly = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalSize = 40;
let emoji; // Variable to store the emoji image

let debug = true;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let goalx = 0;
let goaly = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalSize = 40;
let emoji; // Variable to store the emoji image

function preload() {
  emoji = loadImage('https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_grande.png?v=1571606036'); // Load the emoji image
}

function setup() {
  createCanvas(400, 400); // Creates the canvas
  x = random(25, width - 25); // Keeps the circle inside a set of the parameters
  y = random(25, height - 25);
  
  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background('#2196F3');
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2); 
  
  // Display the goal as a yellow circle
  fill('#FFEB3B');
  circle(goalx, goaly, goalSize);

  // Display the moving object as an emoji image
  image(emoji, x - 25, y - 25, 50, 50); // Draws the emoji image centered at (x, y)
  
  // Update the position of the moving object
  x += speedx;
  y += speedy;
  
  if (mouseX > x) {
    speedx = speedfactor;
  } else {
    speedx = -speedfactor;
  }
  
  if (mouseY > y) {
    speedy = speedfactor;
  } else {
    speedy = -speedfactor;
  }
  
  // Check if the moving object touches the mouse pointer
  if (d < 25) {
    score -= 1;
    x = random(25, width - 25); // Keeps the circle inside of the border
    y = random(25, height - 25);
  }
  
  // Check if the mouse pointer collects the goal
  if (
    mouseX > goalx - goalSize / 2 && 
    mouseX < goalx + goalSize / 2 && 
    mouseY > goaly - goalSize / 2 && 
    mouseY < goaly + goalSize / 2
  ) {
    score += 1;
    x = random(25, width - 25);
    y = random(25, height - 25);
    
    goalx = random(20, width - 20); // Keeps the goal circle inside the border
    goaly = random(20, height - 20);
  }
}
