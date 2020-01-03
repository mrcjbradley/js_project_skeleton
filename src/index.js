import "./styles/index.scss";
const testObj = {
  key1: "hi",
  key2: {
    key3: "Hello"
  }
};
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").innerText = `${testObj?.key2?.key3 ||
    testObj.key1} World!`;
});
