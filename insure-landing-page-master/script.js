const menubtn = document.querySelector(".menu");
const nav = document.querySelector(".navigation");
const head = document.querySelector(".header");

menubtn.addEventListener("click", function () {
  head.classList.toggle("fixed");
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
  nav.setAttribute("aria-hidden", expanded);
});
