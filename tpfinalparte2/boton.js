//boton.js

class Boton {
  constructor(texto, x, y, w, h) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  mostrar() {
    fill(255, 100);
    rect(this.x, this.y, this.w, this.h, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  presionado(mx, my) {
    return mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h;
  }
}
