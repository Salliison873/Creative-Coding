function preload(){
  // load the image from a file
	img = loadImage();
}

function setup() {

  // create the canvas
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
	let from = color(0, 120, 100);
  let to = color(72, 61, 50);

  //intermediate colors.
  let interA = lerpColor(from, to, 0.01);//blends it out so it looks all one color
  let interB = lerpColor(from, to, 0.01);

  //left rectangle.
  noStroke();
  fill(from);
  rect(1, 100, 400, 100);

  // left-center rectangle.
  fill(interA);
  rect(1, 0, 400, 100);

  //right-center rectangle.
  fill(interB);
  rect(1, 200, 400, 100);

  // right rectangle.
  fill(to);
  rect(1, 300, 400, 100);
  for (let x = 0; x <= width; x++) { //loop allows to make the mountain range.
    let y = noise(x * 0.005) * height; // the height of the mountain
    circle(x,y,5); //creates the image
    stroke('#2D6330');  // color of the image
}
  for (let x = 0; x <= width; x++) { //loop allows to make the mountain range.
    let y = noise(x * 0.005 + 6) * height; // the height of the mountain
    circle(x,y += 5 ,5); //creates the image
    stroke('#2D6330'); // color of the image
  }
  for (let x = 0; x <= width; x++) { //loop allows to make the mountain range.
    let y = noise(x * 0.005 + 3) * height; // the height of the mountain
    circle(x,y += 5 ,5); //creates the image
    stroke('#2D6330'); // color of the image
  }
  for (let x = 0; x <= width; x++) { //loop allows to make the mountain range.
    let y = noise(x * 0.005 + 2) * height; // the height of the mountain
    circle(x,y += 5 ,5); //creates the image
    stroke('#2D6330'); // color of the image 
  }
  for (let x = 0; x <= width; x++) { //loop allows to make the mountain range.
    let y = noise(x * 0.005 + 10) * height; // the height of the mountain
    circle(x,y += 5 ,5); //creates the image
    stroke('#2D6330'); // color of the image 
  }
  // render the image
  image(img,10,10,100,100);
}

