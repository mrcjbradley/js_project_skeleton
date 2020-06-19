import "./styles/index.scss";
import canvasExample from "./scripts/canvas";
import Square from "./scripts/square";
const testObj = {
  key1: "hi",
  key2: {
    key3: "Hello",
  },
};

const greeting = testObj?.key2?.key3 || testObj.key1;
function renderDOMManipulationExample() {
  document.body.innerHTML = "";
  document.body.classList.add("center");
  const card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = `<h2>${greeting} World!</h2>`;
  document.body.append(card);
  const imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);

  const DOMBtn = document.createElement("button");
  DOMBtn.innerText = "Canvas Example";
  document.body.insertBefore(DOMBtn, card);
  DOMBtn.onclick = (e) => {
    e.preventDefault();

    renderCanvasExample();
  };
}

window.addEventListener("DOMContentLoaded", renderCanvasExample);

function renderCanvasExample() {
  document.body.innerHTML = "";
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
      if (sq.coords[0] + sq.coords[2] > window.innerWidth)
        sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);

  window.addEventListener("keydown", registeredChangeColorKeydown);
  function registeredChangeColorKeydown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach((sq) => sq.reverseAnimation());
      canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    if (event.which === 80) {
      event.preventDefault();
      animating = !animating;
    }
  }
  window.addEventListener("mousedown", registeredNewSquareMouseDown);

  function registeredNewSquareMouseDown(event) {
    event.preventDefault();
    const { clientX, clientY } = event;
    squares.push(
      new Square(canvas.ctx, [clientX, clientY, 100, 150], canvas.fillColor)
    );
  }
  const DOMBtn = document.createElement("button");
  DOMBtn.innerText = "DOM Example";
  document.body.insertBefore(DOMBtn, canvas.canvas);
  DOMBtn.onclick = (e) => {
    e.preventDefault();
    window.removeEventListener("mousedown", registeredNewSquareMouseDown);
    window.removeEventListener("keydown", registeredChangeColorKeydown);
    renderDOMManipulationExample();
  };
}
