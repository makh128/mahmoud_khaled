// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
});

// scroll section
let navLinks = document.querySelectorAll(".header nav a");
let section = document.querySelectorAll("section");
let btnTop = document.querySelector(".icon-top");
window.onscroll = () => {
  // show icon top
  if (window.scrollY >= 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
  // active nav-bar class
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".header nav a[href*= " + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //remove toggle icon and navbar when i click navbar links (scroll)
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};
// go-up with icon-top
btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// About section
// read more about me!
const about = document.querySelector(".about");
let readMore = document.querySelector("#red-more");
let hiddenPara = document.querySelector(".hidden-para");
readMore.addEventListener("click", function () {
  about.classList.toggle("active");
  readMore.classList.toggle("clicked");
  if (readMore.classList.contains("clicked")) {
    readMore.textContent = "Show Less";
  } else {
    readMore.textContent = 'Read More';
  }

})

// skills section
// change span progress value
let spansProg = document.querySelectorAll(".bar span");
spansProg.forEach((span) => {
  let widthValue = span.style.width;
  span.setAttribute("data-progress", widthValue)
});

// show popup when form is correct
let inputs = document.querySelectorAll("form input");
let popupCon = document.querySelector(".popup-container");
let popupBtn = document.querySelector(".popup-btn");
let form = document.querySelector("form");
let textArea = document.querySelector("textarea");


form.addEventListener("submit", function (e) {
    inputs.forEach((input) => {
      if (input.value !== "") {
        popupCon.classList.add("open-popup");
        e.preventDefault()
        input.value = '';
        textArea.value = '';
      }
    })
})

popupBtn.addEventListener("click", () => {
  popupCon.classList.add("close-popup");
})