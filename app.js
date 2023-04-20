const board = document.querySelector("#board");
const colors = [
  "#ffcc00",
  "#ff9966",
  "#ff6666",
  "#3399ff",
  "#0099ff",
  "#66ff66",
  "#33ff66",
  "#33ff33",
  "#66ff00",
  "#66ff33",
  "#9966cc",
  "#9933ff",
  "#663399",
  "#ff3366",
  "#ff0066",
  "#ff3399",
  "#ff0099",
  "#ff33cc",
  "#ff66ff",
];
const SQUARES_NUMBER = 900;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 3px ${color}, 0 0 20px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
