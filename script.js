// MOBILE NAVIGATION
const btn = document.querySelector("#burger");
const nav = document.querySelector("#burger-menu");

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

