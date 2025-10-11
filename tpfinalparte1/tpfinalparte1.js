//tpfinalparte1 christian strack, carmela urturi
//comisión 2
//video link: https://youtu.be/x5g06_KJGGs?si=9aDnXWO1p4mR6a2c

let pantalla = [];
let pantallaActual = 0;
let textos = [];
let sonidoClick;


let botonComenzar = { x: 150, y: 400, ancho: 150, alto: 30, texto: "Comenzar" };
let botonCreditos = { x: 400, y: 400, ancho: 150, alto: 30, texto: "Creditos" };
let botonReiniciar = { x: 250, y: 400, ancho: 140, alto: 30, texto: "Reiniciar" };

let botonesPuerta = [
  { x: 70, y: 400, ancho: 250, alto: 30, texto: "Abrir la puerta" },
  { x: 350, y: 400, ancho: 250, alto: 30, texto: "ir a una fiesta" }
];

let botonesCaramelos = [
  { x: 100, y: 400, ancho: 220, alto: 30, texto: "Le explican al mounstruo" },
  { x: 400, y: 400, ancho: 210, alto: 30, texto: "Soos pisa al mounstruo" }
];

let botonesCamino = [
  { x: 80, y: 400, ancho: 250, alto: 30, texto: "Pelear con el mounstruo" },
  { x: 350, y: 400, ancho: 250, alto: 30, texto: "Correr y esconderte" }
];

let botonAvanzar = { x: 500, y: 400, ancho: 100, alto: 30, texto: "Avanzar" };

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

function SonidoBoton() {
  if (sonidoClick.isPlaying()) {
    sonidoClick.stop();
  }
  sonidoClick.play();
}

function dibujarPantalla() {
  image(pantalla[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual];
  fill(85, 49, 97, 150);

  let rectY = 5;
  rect(5, rectY, 630, 60);
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(textoActual, 25, rectY + 5, 600, 60);

  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 3) {
    mostrarBotonesPuerta();
  } else if (pantallaActual === 7 || pantallaActual === 8 ||pantallaActual === 11 || pantallaActual === 13) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 6) {
    mostrarBotonesCaramelos();
  } else if (pantallaActual === 10) {
    mostrarBotonesCamino();
  } else if (
    pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 || pantallaActual === 5  || pantallaActual === 9 || pantallaActual === 12 ) {
    mostrarBotonAvanzar();
  }
}

function dibujarBoton(boton, colorRelleno, colorTexto) {
  fill(colorRelleno);
  rect(boton.x, boton.y, boton.ancho, boton.alto);
  fill(colorTexto);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(boton.texto, boton.x + boton.ancho / 2, boton.y + boton.alto / 2);
}

function mostrarBotonesInicio() {
  dibujarBoton(botonComenzar, color(85, 49, 97, 200), color(255));
  dibujarBoton(botonCreditos, color(85, 49, 97, 200), color(255));
}

function mostrarBotonReiniciar() {
  dibujarBoton(botonReiniciar, color(184, 31, 31, 200), color(255));
}

function mostrarBotonesPuerta() {
  for (let i = 0; i < botonesPuerta.length; i++) {
    dibujarBoton(botonesPuerta[i], color(85, 49, 97, 200), color(255));
  }
}

function mostrarBotonesCaramelos() {
  for (let i = 0; i < botonesCaramelos.length; i++) {
    dibujarBoton(botonesCaramelos[i], color(85, 49, 97, 200), color(255));
  }
}

function mostrarBotonesCamino() {
  for (let i = 0; i < botonesCamino.length; i++) {
    dibujarBoton(botonesCamino[i], color(85, 49, 97, 200), color(255));
  }
}

function mostrarBotonAvanzar() {
  dibujarBoton(botonAvanzar, color(85, 49, 97, 200), color(255));
}

function clicEnBoton(boton) {
  return mouseX > boton.x && mouseX < boton.x + boton.ancho &&
         mouseY > boton.y && mouseY < boton.y + boton.alto;
}

function mousePressed() {
  pasarPantalla();
  SonidoBoton();
}

function pasarPantalla() {
  if (pantallaActual === 0) {
    if (clicEnBoton(botonComenzar)) {
      pantallaActual = 1;
    } else if (clicEnBoton(botonCreditos)) {
      pantallaActual = 13;
    }
  } else if (
    pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 || pantallaActual === 5 || pantallaActual === 9 ) {
    if (clicEnBoton(botonAvanzar)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 12) {
  if (clicEnBoton(botonAvanzar)) {
    pantallaActual = 8; //  de la 12, salta a la 8
  }
} else if (pantallaActual === 3) {
    if (clicEnBoton(botonesPuerta[0])) {
      pantallaActual = 4;
    } else if (clicEnBoton(botonesPuerta[1])) {
      pantallaActual = 9;
    }
  } else if (pantallaActual === 6) {
    if (clicEnBoton(botonesCaramelos[0])) {
      pantallaActual = 7;
    } else if (clicEnBoton(botonesCaramelos[1])) {
      pantallaActual = 12;
    }
  } else if (pantallaActual === 7 ||pantallaActual === 8 || pantallaActual === 11  || pantallaActual === 13) {
    if (clicEnBoton(botonReiniciar)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual === 10) {
    if (clicEnBoton(botonesCamino[0])) {
      pantallaActual = 7;
    } else if (clicEnBoton(botonesCamino[1])) {
      pantallaActual = 11;
    }
  }
}
