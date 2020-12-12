const refs = {
  container: document.querySelector(".game__link"),
  btnStart: document.querySelector(".game-btn__start"),
  btnStop: document.querySelector(".game-btn__stop"),
};

refs.container.textContent = "hello";

let coords = refs.container.getBoundingClientRect();

refs.container.addEventListener("click", (e) => {
  e.preventDefault();
});

const randomPopUp = () => {
  let pageY = Math.floor(Math.random() * (450 - 1) + 1); // top
  let pageX = Math.floor(Math.random() * (750 - 1) + 1); // left
  refs.container.style.left = pageX + "px";
  refs.container.style.top = pageY + "px";
};

const timerPopUp = setInterval(() => {
  randomPopUp();
}, 1000);
clearTimeout(timerPopUp);
console.log();
