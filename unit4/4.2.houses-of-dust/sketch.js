let quatrain = '';
let places = '';
let lights = 'natural light;candles;all available lighting;electricity'.split(';');
let inhabitants = 'people who eat a great deal;lovers;friends and enemies;collectors of all types;women wearing all colors;all races of men wearing predominantly red clothing;little boys;children and old people;horses and birds;various birds and fishes;american indians;french and german speaking people;people who sleep almost all the time'.split(';');

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

quatrain = grammar.flatten("#origin#") /n; 


places = grammar.flatten("#phrase#");


function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);

  textSize(40);
  text(quatrain,30,40);
  text(places,30,40);
}
