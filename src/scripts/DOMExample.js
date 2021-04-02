import stitchAndYoda from "../images/yoda-stitch.jpg";

export const DOMExample = () => {
  const testObj = {
    key1: "hi",
    key2: {
      key3: "Hello",
    },
  };

  const greeting = testObj?.key2?.key3 || testObj.key1;
  document.body.classList.add("center");
  const randomCard = document.createElement("div");
  randomCard.classList.add("card", "center", "rando");
  const winnerP = document.createElement("p");
  const randomButton = document.createElement("btn");
  randomButton.innerText = "Pick Me!";
  randomCard.append(randomButton, winnerP);
  document.body.append(randomCard);
  randomButton.onclick = (e) => {
    e.preventDefault();
    winnerP.innerHTML = randomJobSeeker();
  };
  const card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = `<h2>${greeting} World!</h2>`;
  document.body.append(card);
  const imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  const imgElement = document.createElement("img");
  imgElement.src = buildAssetPath(stitchAndYoda);
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
  
};

// to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return `./dist/${imgSrc}`;
}

function  randomJobSeeker() {
  let jobSeekers = (process.env.NODE_ENV === 'development') ?
    require('../../secret').JOBSEEKERS :
    [
      "Arthur Dent",
      "Ford Prefect",
      "Zaphod Beeblebrox",
      "Marvin the Paranoid Android",
      "Trillian",
      "Slartibartfast",
    ];
  const winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
  return winner;
}

