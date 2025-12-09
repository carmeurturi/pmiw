// Juego.js
class Juego {
  constructor(imgJugador, imgCaramelo1, imgCaramelo2) {
    this.imgJugador = imgJugador;
    this.imgCaramelo1 = imgCaramelo1;
    this.imgCaramelo2 = imgCaramelo2;
    this.sonidoCaramelo = sonidoCaramelo;
    this.jugadorX = width/2;
    this.jugadorY = height/2;
    this.estado = "inicio";
    this.pantallas = new Pantallas(this);
  }

  iniciar() {
    this.jugador = new Jugador(width / 2, height - 60, this.imgJugador);
    this.caramelos = [];
    this.puntos = 0;
    this.vidas = 10;
    this.startTime = millis();
    this.estado = "jugando";
  }


  actualizar() {
    imageMode(CENTER);
    image(fondo, width / 2, height / 2, width, height);
    imageMode(CORNER);

    switch (this.estado) {
    case "inicio":
      this.pantallas.mostrarInicio();
      break;

    case "jugando":
      this.jugar();
      break;

    case "victoria":
      this.pantallas.mostrarVictoria(this.puntos);
      break;

    case "gameover":
      this.pantallas.mostrarGameOver(this.puntos);
      break;

    case "creditos":
      this.pantallas.mostrarCreditos();
      break;
    }
  }

  jugar() {
    // tiempo restante
    let t = max(60 - (millis() - this.startTime) / 1000, 0);
    if (t <= 0) this.estado = "victoria";

    this.jugador.mostrar();
    this.jugador.mover();

    // creación de caramelos
    if (frameCount % 60 === 0) {
      let tipo = random([this.imgCaramelo1, this.imgCaramelo2]);
      this.caramelos.push(new Caramelo(random(20, width - 20), -20, tipo));
    }

    // actualización de caramelos
    for (let i = this.caramelos.length - 1; i >= 0; i--) {
      const c = this.caramelos[i];
      c.mostrar();
      c.mover();

      if (c.caerFuera()) {
        this.caramelos.splice(i, 1);
        this.vidas--;
        if (this.vidas <= 0) this.estado = "gameover";
      } else if (c.colisiona(this.jugador)) {
        this.puntos++;
        if (this.sonidoCaramelo && this.sonidoCaramelo.isLoaded()) {
          this.sonidoCaramelo.play();
          this.caramelos.splice(i, 1);
        }
      }

      // HUD
      fill(255);
      textSize(16);
      text("Puntos: " + this.puntos, 50, 20);
      text("Vidas: " + this.vidas, 50, 40);
      text("Tiempo: " + t.toFixed(1), 50, 60);
    }
  }
}
