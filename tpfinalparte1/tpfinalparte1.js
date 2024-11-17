let pantallas = [];
let pantallaActual = 0;
let sonido;
let textos = [];
let sonidoReproduciendo = false;

let botonComenzar = { x: 150, y: 400, ancho: 150, alto: 50, texto: "Comenzar" };
let botonCreditos = { x: 400, y: 400, ancho: 150, alto: 50, texto: "Creditos" };
let botonReiniciar = { x: 250, y: 400, ancho: 140, alto: 50, texto: "Reiniciar" };

let botonesMadre = [
  { x: 70, y: 400, ancho: 250, alto: 50, texto: "Pablo no la confronta" },
  { x: 350, y: 400, ancho: 250, alto: 50, texto: "Pablo la confronta" }
];

let botonesPablo = [
  { x: 100, y: 400, ancho: 200, alto: 50, texto: "Pablo muere" },
  { x: 400, y: 400, ancho: 200, alto: 50, texto: "Realizar cirugía" }
];

let botonesCora = [
  { x: 80, y: 400, ancho: 250, alto: 50, texto: "Cora siente lo mismo" },
  { x: 350, y: 400, ancho: 250, alto: 50, texto: "Cora niega sus sentimientos" }
];

let botonAvanzar = { x: 500, y: 400, ancho: 100, alto: 50, texto: "Avanzar" };

function preload() {
  for (let i = 0; i < 14; i++) {
    pantallas[i] = loadImage("data/pantallas" + i + ".jpg");
  }
  textos = loadStrings('data/texto.txt');
  sonido = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);
  dibujarPantalla();
}

function dibujarPantalla() {
  image(pantallas[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual];
  fill(255);

  let rectY = 150;
  rect(20, rectY, 610, 61);
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(textoActual, 25, rectY + 5, 600, 60);

  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 3) {
    mostrarBotonesMadre();
  } else if (pantallaActual === 8 || pantallaActual === 11 || pantallaActual === 12 || pantallaActual === 13) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 6) {
    mostrarBotonesPablo();
  } else if (pantallaActual === 10) {
    mostrarBotonesCora();
  } else if (
    pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 || pantallaActual === 5 || pantallaActual === 7 || pantallaActual === 9) {
    mostrarBotonAvanzar();
  }

  if (pantallaActual === 13 && !sonidoReproduciendo) {
    sonido.play();
    sonidoReproduciendo = true;
  }

  if (pantallaActual !== 13 && sonidoReproduciendo) {
    sonido.stop();
    sonidoReproduciendo = false;
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
  dibujarBoton(botonComenzar, color(180, 120, 200), color(255));
  dibujarBoton(botonCreditos, color(180, 120, 200), color(255));
}

function mostrarBotonReiniciar() {
  dibujarBoton(botonReiniciar, color(180, 120, 200), color(255));
}

function mostrarBotonesMadre() {
  for (let i = 0; i < botonesMadre.length; i++) {
    dibujarBoton(botonesMadre[i], color(180, 120, 200), color(255));
  }
}

function mostrarBotonesPablo() {
  for (let i = 0; i < botonesPablo.length; i++) {
    dibujarBoton(botonesPablo[i], color(180, 120, 200), color(255));
  }
}

function mostrarBotonesCora() {
  for (let i = 0; i < botonesCora.length; i++) {
    dibujarBoton(botonesCora[i], color(180, 120, 200), color(255));
  }
}

function mostrarBotonAvanzar() {
  dibujarBoton(botonAvanzar, color(180, 120, 200), color(255));
}

function clicEnBoton(boton) {
  return mouseX > boton.x && mouseX < boton.x + boton.ancho &&
         mouseY > boton.y && mouseY < boton.y + boton.alto;
}

function mousePressed() {
  pasarPantalla();
}

function pasarPantalla() {
  if (pantallaActual === 0) {
    if (clicEnBoton(botonComenzar)) {
      pantallaActual = 1;
    } else if (clicEnBoton(botonCreditos)) {
      pantallaActual = 13;
    }
  } else if (
    pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 || pantallaActual === 5 || pantallaActual === 7 || pantallaActual === 9) {
    if (clicEnBoton(botonAvanzar)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 3) {
    if (clicEnBoton(botonesMadre[0])) {
      pantallaActual = 4;
    } else if (clicEnBoton(botonesMadre[1])) {
      pantallaActual = 9;
    }
  } else if (pantallaActual === 6) {
    if (clicEnBoton(botonesPablo[0])) {
      pantallaActual = 7;
    } else if (clicEnBoton(botonesPablo[1])) {
      pantallaActual = 12;
    }
  } else if (pantallaActual === 8 || pantallaActual === 11 || pantallaActual === 12 || pantallaActual === 13) {
    if (clicEnBoton(botonReiniciar)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual === 10) {
    if (clicEnBoton(botonesCora[0])) {
      pantallaActual = 11;
    } else if (clicEnBoton(botonesCora[1])) {
      pantallaActual = 5;
    }
  }
}
