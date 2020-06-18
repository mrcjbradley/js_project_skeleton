class Square {
  constructor(ctx, coords, color = "green") {
    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  drawSquare() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(...this.coords);
  }
  updateSquare(color) {
    this.color = color;
    this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
  }

  reverseAnimation() {
    this.animationDir *= -1;
  }
}

export default Square;
