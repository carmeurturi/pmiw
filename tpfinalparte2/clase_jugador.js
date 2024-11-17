class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 20;
  }

  mover(nuevoX, nuevoY) {
    this.x = constrain(nuevoX - this.tamano / 2, 0, width - this.tamano);
    this.y = constrain(nuevoY - this.tamano / 2, 0, height - this.tamano);
  }

  mostrar() {
    fill(0, 0, 255);
    noStroke();
    rect(this.x, this.y, this.tamano, this.tamano);
  }

  toca(objeto) {
    return this.x < objeto.x + objeto.tamano &&
           this.x + this.tamano > objeto.x &&
           this.y < objeto.y + objeto.tamano &&
           this.y + this.tamano > objeto.y;
  }
}
