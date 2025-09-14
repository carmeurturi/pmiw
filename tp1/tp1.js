// Carmela Urturi, Comisión 2, legajo 119160/8
// https://youtu.be/0SP1BclTgyE?feature=shared


let alternarColor = false;
let indiceColor = 0;
let imagen;
let color1 = "#000000";
let color2 = "#FFB347";
let color3 = "#FF5733";
let color4 = "#C70039";
let color5 = "#900C3F";

function preload() {
  imagen = loadImage("assets/opArt.jpg");
}

function setup() { 
  createCanvas(800, 400);
}

function draw() {
  background(255);
  image(imagen, 0, 0, width / 2, height);
  noStroke();

  let rectWidth = obtenerTamañoRectangulo(width, 20);
  let rectHeight = obtenerTamañoRectangulo(height, 40);

  // Cuadrado Exterior
  for (let y = 0; y < height; y += rectHeight) {
    alternarColor = !alternarColor;
    for (let x = width / 2; x < width; x += rectWidth) {
      if (alternarColor) {
        fill(obtenerColorActual(indiceColor));
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      alternarColor = !alternarColor;
    }
  }

  // Cuadrado Interior
  rectWidth = obtenerTamañoRectangulo(height, 40);
  rectHeight = obtenerTamañoRectangulo(width, 20);
  for (let y = (height / 40) * 9; y < height - (height / 40) * 9; y += rectHeight) { // Fila
    alternarColor = !alternarColor;
    for (let x = width / 2 + (width / 20) * 2; x < width - (width / 20) * 2; x += rectWidth) { // Columna
      if (alternarColor) {
        fill(obtenerColorActual(indiceColor));
      } else {
        fill(255);
      }
      rect(x, y, rectWidth, rectHeight);
      alternarColor = !alternarColor;
    }
  }
}

function obtenerTamañoRectangulo( dimension, divisor) {
  return dimension / divisor;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciar();
  } else if (keyCode === ENTER ) {
    alternarColor = !alternarColor;
  } else if (key === 'c' || key === 'C') {
    actualizarColores("#000000","#ADD8E6", "#0000FF", "#00008B", "#191970");
  }
}


function mouseClicked() {
  indiceColor = (indiceColor + 1) % 5;
}

function actualizarColores(nuevoColor1, nuevoColor2, nuevoColor3, nuevoColor4, nuevoColor5) {
  color1 = nuevoColor1;
  color2 = nuevoColor2;
  color3 = nuevoColor3;
  color4 = nuevoColor4;
  color5 = nuevoColor5;
}

function reiniciar() {
  indiceColor = 0;
  actualizarColores("#000000", "#FFB347", "#FF5733", "#C70039", "#900C3F" );
}
