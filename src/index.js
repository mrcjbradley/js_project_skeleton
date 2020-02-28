import "./styles/index.scss";
import axios from "axios";

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").innerText = "Hello World!";
  axios
    .get("./search?")
    // .then(res => res.json())
    .then(({ data: { docs } }) => {
      docs.forEach((doc, idx) => {
        const newH3 = document.createElement("h3");
        newH3.innerText = doc.title_suggest;
        const newP = document.createElement("p");
        newP.innerText = doc.first_sentence;
        doc.first_sentence && document.body.append(newH3, newP);
      });
    });
});
