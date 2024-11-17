class Pared {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    fill(0);
    noStroke();
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
