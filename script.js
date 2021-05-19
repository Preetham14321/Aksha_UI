const click = document.querySelector(".click");
const colorName = document.querySelector(".rgbName");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
document.body.style.backgroundColor = " rgb(223,45,106)";
colorName.innerHTML = " rgb(223,45,106)";

click.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
});
click.addEventListener("click", function () {
  colorName.textContent = randomColor();
});
