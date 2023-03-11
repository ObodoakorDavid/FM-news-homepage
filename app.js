/** @format */

const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".hamburger span");
const ul = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
  ul.classList.toggle("active");
  console.log(ul.classList);
});

document.body.addEventListener("click", () => {
//   console.log(ul.classList.contains("active"));
  if (!ul.classList.contains("active")) {
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
    ul.classList.remove("active");
    console.log("zz");
  }
});
