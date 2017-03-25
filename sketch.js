var x = 0;
var y = 0;

var r = 255;
var g = 50;
var b = 75;

function setup() {
  createCanvas(800, 600);

}


function draw() {
  background(250, 100, 120);

  stroke (0,255,255)

  fill(150, 170, 150);
  rect(700, 0, 100, 600);

  fill(150, 170, 150);
  rect(0, 0, 100, 600);

  fill(r, g, b);
  rect(300, 0, 200, 600);



  if (mouseX > 300 && mouseX <= 500 && mouseY >= 0 && mouseY < 600) {
    fill(r);
    ellipse(400, 300, 190, 190);
    fill(r);
    ellipse(400, 100, 50, 50);
    fill(r);
    ellipse(400, 500, 50, 50);
  } else {
    fill(b);
    ellipse(400, 300, 100, 100);
    fill(b);
    ellipse(400, 300, 50, 50);
    fill(b);
    ellipse(400, 300, 50, 50);
  }

  if (mouseX > 300 && mouseX <= 500 && mouseY >= 0 && mouseY < 200) {
    fill(r);
    ellipse(400, 100, 150, 150);
  } else {
    fill(b);
    ellipse(400, 300, 100, 100);
  }

  if (mouseX > 300 && mouseX <= 500 && mouseY >= 400 && mouseY < 600) {
    fill(r);
    ellipse(400, 500, 150, 150);
  } else {
    fill(b);
    ellipse(400, 300, 100, 100);
  }


}

function mousePressed() {

  r = random(230);
  g = random(100);
  b = random(180);


}