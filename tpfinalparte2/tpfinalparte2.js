// christian strack y carmela urturi
//https://youtu.be/8hUSY0bg2Zk
let fondo;
let juego;
let imgJugador;
let imgCaramelo1;
let imgCaramelo2;
let sonidoCaramelo;

function preload() {
  fondo = loadImage("data/fondo.png");
  sonidoCaramelo = loadSound('data/sonidoCaramelo.mp3');
  imgJugador = loadImage("data/dipper.png");
  imgCaramelo1 = loadImage("data/caramelo1.png");
  imgCaramelo2 = loadImage("data/caramelo2.png");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(imgJugador, imgCaramelo1, imgCaramelo2, sonidoCaramelo);
}

function draw() {
  juego.actualizar();
}

