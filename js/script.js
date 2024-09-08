const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// right float scrolltotop button

const scrollToTopBtn = document.getElementById("scrolltotop");

function handleScroll() {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.addEventListener("scroll", handleScroll);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
