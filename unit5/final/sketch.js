let bird;
let pipes = [];
let score = 0;
let gameOver = false;
let birdImg; // Variable to store the emoji image

function preload() {
  birdImg = loadImage('https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_grande.png?v=1571606036'); // Load the emoji image
}

function setup() {
  createCanvas(400, 600); // Set up canvas dimensions
  bird = new Bird(); // Create a new emoji instance
  pipes.push(new Pipe()); // Start with one pipe
}

function draw() {
  background('blue'); // Set background color

  if (!gameOver) {
    // Update and show each pipe
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update(); // Update pipe position
      pipes[i].show(); // Display pipe

      if (pipes[i].hits(bird)) {
        // Check for collisions
        gameOver = true;
      }

      if (pipes[i].offscreen()) {
        // Remove pipes that are off the screen
        pipes.splice(i, 1);
      }

      if (pipes[i].passes(bird)) {
        // Increment score when the bird passes a pipe
        score++;
      }
    }

    bird.update(); // Update bird position
    bird.show(); // Display bird

    if (frameCount % 75 == 0) {
      // Add new pipes at intervals
      pipes.push(new Pipe());
    }

    // Display the score
    fill(255);
    textSize(32);
    text('Score: ' + score, 10, 30);
  } else {
    // Display game over message
    fill(255);
    textSize(32);
    text('Game Over', 120, height / 2);
    textSize(16);
    text('Press R to Restart', 140, height / 2 + 30);
  }
}

function mousePressed() {
  if (!gameOver) {
    bird.up(); // Move the bird up when mouse is pressed
  } else if (gameOver) {
    resetGame(); // Reset game if game over and mouse is pressed
  }
}

function resetGame() {
  bird = new Bird(); // Reset bird position
  pipes = []; // Clear pipes
  pipes.push(new Pipe()); // Add initial pipe
  score = 0; // Reset score
  gameOver = false; // Reset game over state
}

class Bird {
  constructor() {
    this.y = height / 2; // Initial vertical position
    this.x = 64; // Horizontal position
    this.gravity = 0.6; // Gravity effect
    this.lift = -15; // Lift effect when bird flaps
    this.velocity = 0; // Initial velocity
  }

  show() {
    image(birdImg, this.x - 16, this.y - 16, 32, 32); // Draw bird image centered at (this.x, this.y)
  }

  up() {
    this.velocity += this.lift; // Apply lift to velocity
  }

  update() {
    this.velocity += this.gravity; // Apply gravity to velocity
    this.velocity *= 0.9; // Apply air resistance
    this.y += this.velocity; // Update bird position

    if (this.y > height) {
      // Prevent bird from falling below canvas
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      // Prevent bird from going above canvas
      this.y = 0;
      this.velocity = 0;
    }
  }
}

class Pipe {
  constructor() {
    this.spacing = 175; // Space between top and bottom pipes
    this.top = random(height / 6, (3 / 4) * height); // Top pipe height
    this.bottom = height - (this.top + this.spacing); // Bottom pipe height
    this.x = width; // Initial horizontal position
    this.w = 20; // Pipe width
    this.speed = 2; // Pipe speed
    this.passed = false; // Whether the bird has passed the pipe
  }

  show() {
    fill(255); // Set pipe color
    rect(this.x, 0, this.w, this.top); // Draw top pipe
    rect(this.x, height - this.bottom, this.w, this.bottom); // Draw bottom pipe
  }

  update() {
    this.x -= this.speed; // Move pipe leftward
  }

  offscreen() {
    return this.x < -this.w; // Check if pipe is off the screen
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true; // Check for collisions
      }
    }
    return false;
  }

  passes(bird) {
    if (!this.passed && this.x + this.w < bird.x) {
      this.passed = true;
      return true; // Check if bird passed the pipe
    }
    return false;
  }
}
