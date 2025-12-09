// tpfinalparte1(recuperatorio) christian strack, carmela urturi
// comisión 2
// video link:  https://youtu.be/kmH19W53gjg

let pantalla = [];       
let pantallaActual = 0;   
let textos = [];          
let sonidoClick;          
let botonalto = 30;     
let botony = 400; 
let botonAncho150 = 150;
let botonAncho140 = 140;
let botonAncho250 = 250;
let botonAncho220 = 220;
let botonAncho210 = 210;
let botonAncho100 = 100;
let bxPuerta1 = 70;
let bx350 = 350;
let bxCar1 = 100;
let bxCam1 = 80;
let bxAv = 500;

function preload() {
  textos = loadStrings('data/texto.txt');
  sonidoClick = loadSound('data/clicksound.mp3');
}


function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < 14; i++) {
    pantalla[i] = loadImage("data/pantalla" + i + ".jpg");
  }
}

function draw() {
  background(200);
  dibujarPantalla();
}

function sonidoBoton() {
  if (sonidoClick.isPlaying()) {
    sonidoClick.stop();
  }
  sonidoClick.play();
}

function dibujarPantalla() {

  image(pantalla[pantallaActual], 0, 0, width, height);
  fill(85, 49, 97, 150);
  rect(5, 5, 630, 60);
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, TOP);
  text(textos[pantallaActual], 25, 10, 600, 60);

  if (pantallaActual === 0) {
    dibujarBoton(botonAncho150, botony, botonAncho150, botonalto, "Comenzar");
    dibujarBoton(botony, botony, botonAncho150, botonalto, "Creditos");
  }
  else if (pantallaActual === 3) {
    dibujarBoton(bxPuerta1, botony, botonAncho250, botonalto, "Abrir la puerta");
    dibujarBoton(bx350 , botony, botonAncho250, botonalto, "Ir a una fiesta");
  }
  else if (pantallaActual === 6) {
    dibujarBoton(bxCar1, botony, botonAncho220, botonalto, "Le explican al monstruo");
    dibujarBoton(botony, botony, botonAncho210, botonalto, "Soos pisa al monstruo");
  }
  else if (pantallaActual === 10) {
    dibujarBoton(bxCam1, botony, botonAncho250, botonalto, "Pelear con el monstruo");
    dibujarBoton(bx350 , botony, botonAncho250, botonalto, "Correr y esconderte");
  }
  else if (pantallaActual === 7 || pantallaActual === 8 || pantallaActual === 11 || pantallaActual === 13) {
    dibujarBoton(botonAncho250, botony, botonAncho250, botonalto, "Reiniciar");
  }
  else if (pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 ||
           pantallaActual === 5 || pantallaActual === 9 || pantallaActual === 12) {

    dibujarBoton(bxAv, botony, botonAncho100, botonalto, "Avanzar");
  }
}

function dibujarBoton(x, y, ancho, alto, texto) {
  fill(85, 49, 97, 200);
  rect(x, y, ancho, alto);

  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function clicEn(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}

function mousePressed() {
  sonidoBoton();
  pasarPantalla();
}


function pasarPantalla() {

  if (pantallaActual === 0) {
    if (clicEn(botonAncho150, botony, botonAncho150, botonalto)) pantallaActual = 1;
    else if (clicEn(botony, botony, botonAncho150, botonalto)) pantallaActual = 13;
  }

  else if (pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 ||
           pantallaActual === 5 || pantallaActual === 9) {
    if (clicEn(bxAv, botony, botonAncho100, botonalto)) pantallaActual++;
  }

  else if (pantallaActual === 12) {
    if (clicEn(bxAv, botony, botonAncho100, botonalto)) pantallaActual = 8;
  }

  else if (pantallaActual === 3) {
    if (clicEn(bxPuerta1, botony, botonAncho250, botonalto)) pantallaActual = 4;
    else if (clicEn(bx350 , botony, botonAncho250, botonalto)) pantallaActual = 9;
  }

  else if (pantallaActual === 6) {
    if (clicEn(bxCar1, botony, botonAncho220, botonalto)) pantallaActual = 7;
    else if (clicEn(botony, botony, botonAncho210, botonalto)) pantallaActual = 12;
  }

  else if (pantallaActual === 10) {
    if (clicEn(bxCam1, botony, botonAncho250, botonalto)) pantallaActual = 7;
    else if (clicEn(bx350 , botony, botonAncho250, botonalto)) pantallaActual = 11;
  }

  else if (pantallaActual === 7 || pantallaActual === 8 || pantallaActual === 11 || pantallaActual === 13) {
    if (clicEn(botonAncho250, botony, botonAncho250, botonalto)) pantallaActual = 0;
  }
}
