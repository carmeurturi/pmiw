class Meta {
  constructor(x, y, tamano) {
    this.x = x;
    this.y = y;
    this.tamano = tamano;
  }

  mostrar() {
    fill(0, 255, 0);
    noStroke();
    rect(this.x, this.y, this.tamano, this.tamano);
  }
}
