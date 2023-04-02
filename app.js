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
  // console.log(ul.classList);
});

window.onscroll = () => {
  console.log(scrollY);
  if (scrollY > 0 && ul.classList.contains("active")) {
    hamburger.classList.remove("absolute");
    hamburger.classList.add("fixed");
    console.log("aaa");
  } else {
    hamburger.classList.remove("fixed");
    hamburger.classList.add("absolute");
    console.log("aaah");
  }
};
