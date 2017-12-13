var rosco;

function setup() {
  rosco = new Rosco();
  createCanvas(800, 600);
}

function draw() {
  background(155);
  push();
  translate(0,30);
  rosco.show();
}
