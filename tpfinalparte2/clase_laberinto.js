class Laberinto {
  constructor() {
    this.paredes = [];
    this.generarLaberinto();
  }

  generarLaberinto() {
    this.paredes = [];
    this.paredes.push(new Pared(100, 0, 20, 200));
    this.paredes.push(new Pared(100, 200, 200, 20));
    this.paredes.push(new Pared(200, 200, 20, 200));
    this.paredes.push(new Pared(200, 100, 200, 20));
    this.paredes.push(new Pared(400, 100, 20, 200));
    this.paredes.push(new Pared(300, 200, 20, 200));
    this.paredes.push(new Pared(400, 300, 200, 20));
    this.paredes.push(new Pared(500, 200, 20, 100));
    this.paredes.push(new Pared(200, 400, 300, 20));

    for (let pared of this.paredes) {
      pared.x += random(-50, 50);
      pared.y += random(-50, 50);
    }
  }

  mostrar() {
    for (let pared of this.paredes) {
      pared.mostrar();
    }
  }

  tocaPared(jugador) {
    for (let pared of this.paredes) {
      if (jugador.x < pared.x + pared.ancho &&
          jugador.x + jugador.tamano > pared.x &&
          jugador.y < pared.y + pared.alto &&
          jugador.y + jugador.tamano > pared.y) {
        return true;
      }
    }
    return false;
  }
}
