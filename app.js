/** @format */

const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".hamburger span");
const ul = document.querySelector("nav ul");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
  ul.classList.toggle("active");
  main.classList.toggle("active");
  logo.classList.toggle("active");
  console.log(ul.classList);
});
