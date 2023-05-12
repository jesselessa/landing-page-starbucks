// MOBILE NAVIGATION
const btn = document.querySelector("#burger");
const nav = document.querySelector("#burger-menu");

btn.addEventListener("click", toggleNav);
function toggleNav() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
}

// CHANGE BEVERAGES IMAGES AND BG COLOR ON CLICK
const bigImg = document.querySelector("main .matcha");
const thumbnails = Array.from(document.querySelectorAll(".thumbnails li img"));
const circle = document.querySelector(".circle");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changeImgBgColor);
});
function changeImgBgColor(e) {
  bigImg.src = e.target.src;
  if (e.target === thumbnails[0]) {
    circle.style.backgroundColor = "#006241";
  } else if (e.target === thumbnails[1]) {
    circle.style.backgroundColor = "#eb7495";
  } else {
    circle.style.backgroundColor = "#d752b1";
  }
}
