import "./styles/index.scss";
import canvasExample from "./scripts/canvas";
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

  let animating = true;

  const animation = () => {
    canvas.clearSquare();
    if (animating) canvas.updateSquare();
    canvas.drawSquare();
    window.requestAnimationFrame(animation);
    if (canvas.coords[0] + canvas.coords[2] > canvas.canvas.width)
      canvas.reverseAnimation();
    if (canvas.coords[0] < 0) canvas.reverseAnimation();
  };

  window.requestAnimationFrame(animation);

  window.addEventListener("keydown", (event) => {
    if (event.which === 32) {
      event.preventDefault();
      canvas.reverseAnimation();
      canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
  });

  window.addEventListener("mousedown", (event) => {
    event.preventDefault();
    console.log("click");
    animating = !animating;
  });
}
