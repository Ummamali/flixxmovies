// This file contains code for navbar and other shared stuff

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 5) {
    navbar.classList.add("bg-black/50", "backdrop-blur");
  } else {
    navbar.classList.remove("bg-black/50", "backdrop-blur");
  }
});
