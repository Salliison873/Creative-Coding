// Initialize the quatrain variable to hold the generated phrase
let quatrain = '';

// Initialize the places variable to hold the generated phrase
let places = '';

// Split the lighting options into an array
let lights = 'natural light;candles;all available lighting;electricity'.split(';');

// Split the inhabitants options into an array
let inhabitants = 'people who eat a great deal;lovers;friends and enemies;collectors of all types;women wearing all colors;all races of men wearing predominantly red clothing;little boys;children and old people;horses and birds;various birds and fishes;american indians;french and german speaking people;people who sleep almost all the time'.split(';');

// Create a grammar structure for materials using Tracery
let grammar = tracery.createGrammar({
  "material": [
    "SAND",
    "DUST",
    "LEAVES",
    "PAPER",
    "TIN",
    "ROOTS",
    "BRICK",
    "BROKEN DISHES",
    "WOOD",
    "STRAW",
    "WEEDS"
  ],
  "origin": "A HOUSE OF #material#"
});

// Create a grammar structure for phrases using Tracery
let words = tracery.createGrammar({
  "phrase": [
    "on open ground",
    "by a river",
    "among high mountains",
    "in a deserted airport",
    "in dense woods",
    "on an island",
    "in a hot climate",
    "in a desert",
    "on the sea",
    "in a deserted factory",
    "underwater",
    "in southern France",
    "inside a mountain",
    "in an overpopulated area",
    "in japan",
    "in a place with both heavy rain and bright sun",
    "by an abandoned lake;in michigan",
    "by the sea",
    "in a cold, windy climate",
    "among small hills"
  ],
});

// Flatten the grammar to generate the quatrain phrase and add a newline
quatrain = grammar.flatten("#origin#") + '\n';

// Setup function to initialize the canvas
function setup() {
  createCanvas(800, 800); // Create a canvas of size 800x800 pixels
  noLoop(); // Prevents draw from looping continuously
}

// Draw function to render content on the canvas
function draw() {
  background(220); // Set the background color to a light gray

  textSize(40); // Set the text size to 40
  text(quatrain, 30, 40); // Display the quatrain at position (30, 40)
  text(places, 30, 80); // Display the places phrase at position (30, 80)
}
