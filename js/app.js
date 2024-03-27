import words from "./data.js";

let randomWord = document.querySelector(".random__word");
let input = document.querySelector(".random__input");
let scroe = document.querySelector(".random__scroe");
let time = document.querySelector(".random__time");
let timeText = document.querySelector(".random__time__text");
let modalBtn = document.querySelector(".random__modal__btn");
let modalGameOver = document.querySelector(".random__modal__game-over");
let select = document.querySelector("#random__level");
let opteion = document.querySelector("option");
let socerGameOver = document.querySelector(".random__scroe__game-over");
let globalWord;
let number = 0;
let timeNumber = 10;
let level = "easy";
timeText.style.color = "rgb(2, 251, 56)";

function randomWordFun() {
  let randomNumber = Math.trunc(Math.random() * words.length) + 1;
  randomWord.textContent = words[randomNumber];
  globalWord = words[randomNumber];
}
randomWordFun();

input.addEventListener("input", () => {
  if (input.value == globalWord) {
    randomWordFun();
    input.value = "";
    number++;
    scroe.textContent = number;
    if (level == "easy") {
      timeNumber += 5;
    } else if (level == "medium") {
      timeNumber += 3;
    } else {
      timeNumber += 2;
    }

    new Audio("../music/deClick.mp3").play();
  }
});
modalBtn.addEventListener("click", () => {
  new Audio("../music/start.mp3").play();
  modalBtn.parentElement.style.display = "none";
  input.parentElement.style.display = "flex";
  document.body.style = `box-shadow: 2px 1px 78px -14px rgba(48, 236, 14, 0.75) inset;
  -webkit-box-shadow: 2px 1px 78px -14px rgba(48, 236, 14, 0.75) inset;
  -moz-box-shadow: 2px 1px 78px -14px rgba(48, 236, 14, 0.75) inset; `;
  input.focus();
  let timeSet = setInterval(() => {
    timeNumber--;
    time.textContent = timeNumber;
    if (timeNumber > 10 && timeNumber >= 7) {
      timeText.style.color = "rgb(2, 251, 56)";
    } else if (timeNumber < 7 && timeNumber >= 4) {
      timeText.style.color = "gold";
      document.body.style = `box-shadow: 10px 10px 107px -15px rgba(207,218,30,0.75) inset;
    -webkit-box-shadow: 10px 10px 107px -15px rgba(207,218,30,0.75) inset;
    -moz-box-shadow: 10px 10px 107px -15px rgba(207,218,30,0.75) inset;`;
    } else if (timeNumber < 4 && timeNumber >= 0) {
      timeText.style.color = "red";
      document.body.style = `box-shadow: 10px 10px 244px 54px rgba(193,36,98,0.79) inset;
    -webkit-box-shadow: 10px 10px 244px 54px rgba(193,36,98,0.79) inset;
    -moz-box-shadow: 10px 10px 244px 54px rgba(193,36,98,0.79) inset;`;
    }
    if (timeNumber == 0) {
      new Audio("../music/null-click.mp3").play();

      clearInterval(timeSet);
      modalGameOver.style.display = "flex";
      input.parentElement.style.display = "none";
      document.body.style.boxShadow = "";
      socerGameOver.textContent = scroe.textContent;
    }
  }, 1000);
});
select.addEventListener("change", () => {
  level = select.value;
});
