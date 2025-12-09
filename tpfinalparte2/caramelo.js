//caramelo.js

class Caramelo {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.vel = random(1, 1.5);
    this.img = img;
    this.tam = 40;
  }

  mostrar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.tam, this.tam);
  }

  mover() {
    this.y += this.vel;
  }

  caerFuera() {
    return this.y > height + 20;
  }

  colisiona(jugador) {
    return dist(this.x, this.y, jugador.x, jugador.y) < 40;
  }
}
