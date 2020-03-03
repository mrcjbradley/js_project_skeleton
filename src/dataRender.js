import axios from "axios";

const renderStuff = () => {
  document.getElementById("app").innerText = "Hello World!";
  axios
    .get("./search?query=undefined")
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
};

export default renderStuff;
