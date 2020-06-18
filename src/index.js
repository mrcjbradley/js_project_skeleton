import "./styles/index.scss";
import canvasExample from "./scripts/canvas";
import Square from "./scripts/square";
// const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });

window.addEventListener("DOMContentLoaded", main);

function main() {
  const canvas = new canvasExample();
  canvas.createCanvas();
  const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];

  let animating = true;

  const animation = () => {
    canvas.clearCanvas();
    if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
    squares.forEach((sq) => sq.drawSquare());
    window.requestAnimationFrame(animation);
    squares.forEach((sq) => {
      if (sq.coords[0] + sq.coords[2] > canvas.canvas.width)
        sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);

  window.addEventListener("keydown", (event) => {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach((sq) => sq.reverseAnimation());
      canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
  });

  window.addEventListener("mousedown", (event) => {
    event.preventDefault();
    console.log("click");
    squares.push(
      new Square(
        canvas.ctx,
        canvas.coords.map((co) => co + 25),
        canvas.fillColor
      )
    );
    // animating = !animating;
  });
}
