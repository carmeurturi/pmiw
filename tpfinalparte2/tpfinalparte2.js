//carmela urturi
let jugador;
let laberinto;
let meta;
let estado = "inicio"; // Estado del juego (inicio, jugando, ganado, perdido)
let botonInicio;
let botonReinicio;



function setup() {
  createCanvas(640, 480);
  botonInicio = new Boton(20, 20, 140, 50, "Iniciar"); // Botón de inicio en la esquina superior izquierda
  botonReinicio = new Boton(20, 20, 140, 50, "Reiniciar"); // Botón de reinicio en la esquina superior izquierda
}

function draw() {
  background(220);

  if (estado === "inicio") {
    mostrarPantallaInicio();
  } else if (estado === "jugando") {
    laberinto.mostrar();
    jugador.mover(mouseX, mouseY);
    jugador.mostrar();
    meta.mostrar();

    if (laberinto.tocaPared(jugador)) {
      estado = "perdido";
    }

    if (jugador.toca(meta)) {
      estado = "ganado";
    }
  } else if (estado === "ganado") {
    mostrarMensaje("¡Ganaste!", 0, 255, 0);
    botonReinicio.mostrar();
    botonReinicio.detectarClick(() => reiniciar());
  } else if (estado === "perdido") {
    mostrarMensaje("¡Perdiste!", 255, 0, 0);
    botonReinicio.mostrar();
    botonReinicio.detectarClick(() => reiniciar());
  }
}

function mostrarPantallaInicio() {
  background(180, 120, 200);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("El escape", width / 2, height / 6);

  textSize(16);
  text("Libro: Señorita Cora", width / 2, height / 3);
  text(
    "Reglas: recorre el laberinto para que Cora y Pablo puedan escapar juntos.",
    width / 2,
    height / 2.5
  );
  text(
    "¡Cuidado! Si chocas, Pablo será capturado por su madre y no podrá escapar.",
    width / 2,
    height / 2.2
  );

  botonInicio.mostrar();
  botonInicio.detectarClick(() => iniciarJuego());
}

function mostrarMensaje(mensaje, r, g, b) {
  textSize(32);
  fill(r, g, b);
  textAlign(CENTER, CENTER);
  text(mensaje, width / 2, height / 2);
}

function iniciarJuego() {
  estado = "jugando";
  jugador = new Jugador(20, 20);
  laberinto = new Laberinto();
  meta = new Meta(width - 40, height - 40, 20);
}

function reiniciar() {
  estado = "jugando";
  iniciarJuego();
}
