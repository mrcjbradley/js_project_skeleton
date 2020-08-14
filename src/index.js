import "./styles/index.scss";
import canvasExample from "./scripts/canvas";
import { DOMExample } from "./scripts/DOMExample";
const currentStateObj = {
  currentExample: null,
  currentEventListeners: [],
};

document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  DOMExample();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
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

  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push([
    "window",
    "keydown",
    handleKeyDown,
  ]);

  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push([
    "window",
    "mousedown",
    handleMouseDown,
  ]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      canvas.reverseAnimation();
      canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    let [
      selector,
      event,
      handler,
    ] = currentStateObj.currentEventListeners.pop();
    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO")
    document.body.removeChild(document.querySelector("canvas"));
  if (currentStateObj.currentExample === "DOMDEMO") {
    [...document.querySelectorAll(".card")].forEach((elem) =>
      document.body.removeChild(elem)
    );
  }
}
