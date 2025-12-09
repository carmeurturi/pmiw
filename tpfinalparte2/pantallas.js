// Pantallas.js
class Pantallas {
  constructor(juego) {
    this.juego = juego;
    this.botonJugar = new Boton("Jugar", width / 2 - 50, height / 2, 100, 30);
    this.botonCreditos = new Boton("Créditos", width / 2 - 50, height / 2 + 50, 100, 30);
    this.botonVolver = new Boton("Volver", width / 2 - 50, height - 80, 100, 30);
    this.botonReiniciar = new Boton("Reiniciar", width / 2 - 50, height / 2 + 40, 100, 30);
  }

  mostrarInicio() {
    textAlign(CENTER);
    fill(255);
    textSize(24);
    text("Super Halloween: Atrapa los caramelos", width / 2, height / 3);
    textSize(16);
    text("Aguanta 1 minuto agarrando caramelos.\n¡Usá ← → para moverte!", width / 2, height / 2 - 40);

    this.botonJugar.mostrar();
    this.botonCreditos.mostrar();

    if (mouseIsPressed && this.botonJugar.presionado(mouseX, mouseY)) {
      this.juego.iniciar();
    }

    if (mouseIsPressed && this.botonCreditos.presionado(mouseX, mouseY)) {
      this.juego.estado = "creditos";
    }
  }

  mostrarCreditos() {
    textAlign(CENTER);
    fill(255);
    textSize(28);
    text("Créditos", width / 2, 100);

    textSize(16);
    text("Idea basada en Gravity Falls - Episodio 'Super Halloween'\n" +
         "Programación: Carmela Urturi y Christian Strack\n" +
         "Arte original: Disney / Alex Hirsch",
         width / 2, height / 2 - 40);

    this.botonVolver.mostrar();
    if (mouseIsPressed && this.botonVolver.presionado(mouseX, mouseY)) {
      this.juego.estado = "inicio";
    }
  }

  mostrarGameOver(puntos) {
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text("🎃 GAME OVER 🎃", width / 2, height / 2 - 40);
    textSize(16);
    text("Puntaje final: " + puntos, width / 2, height / 2);

    this.botonReiniciar.mostrar();
    if (mouseIsPressed && this.botonReiniciar.presionado(mouseX, mouseY)) {
      this.juego.iniciar();
    }
  }

  mostrarVictoria(puntos) {
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text("¡GANASTE!", width / 2, height / 2 - 40);
    textSize(16);
    text("Puntaje final: " + puntos, width / 2, height / 2);

    this.botonReiniciar.mostrar();
    if (mouseIsPressed && this.botonReiniciar.presionado(mouseX, mouseY)) {
      this.juego.iniciar();
    }
  }
}
