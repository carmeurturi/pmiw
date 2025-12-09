//jugador.js

class Jugador {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.vel = 5;
    this.img = img;
  }

  mostrar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, 200, 150);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;
    this.x = constrain(this.x, 40, width - 40);
  }
}
