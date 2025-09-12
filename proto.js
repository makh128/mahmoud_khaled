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
    readMore.textContent = "Read More";
  }
});

// skills section
// change span progress value
let spansProg = document.querySelectorAll(".bar span");
spansProg.forEach((span) => {
  let widthValue = span.style.width;
  span.setAttribute("data-progress", widthValue);
});

// show popup when form is correct
let inputs = document.querySelectorAll("#contact-form input");
let popupCon = document.querySelector(".popup-container");
let popupBtn = document.querySelector(".popup-btn");
let form = document.querySelector("#contact-form");
let textArea = document.querySelector("#message");
let submitBtn = document.querySelector("#submitBtn");

function updateSubmitState() {
  const allFilled =
    document.getElementById("fullName").value.trim() &&
    document.getElementById("email").value.trim() &&
    document.getElementById("mobile").value.trim() &&
    document.getElementById("subject").value.trim() &&
    document.getElementById("message").value.trim();
  submitBtn.disabled = !allFilled;
}

// Initialize state and bind inputs for realtime validation
["fullName", "email", "mobile", "subject", "message"].forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("input", updateSubmitState);
});
updateSubmitState();

async function submitContactForm(payload) {
  const endpoint = "/api/contact";
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const payload = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  try {
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const result = await submitContactForm(payload);

    if (result.ok && result.data && result.data.success) {
      popupCon.classList.add("open-popup");
      inputs.forEach((input) => (input.value = ""));
      textArea.value = "";
      updateSubmitState();
    } else if (result.status === 400 && result.data && result.data.errors) {
      const msg = Object.values(result.data.errors).join("\n");
      alert(msg || "Please check your inputs.");
    } else {
      alert((result.data && result.data.error) || "Failed to send message.");
    }
  } catch (err) {
    alert("Network error. Please try again later.");
  } finally {
    submitBtn.textContent = "Submit";
    updateSubmitState();
  }
});

popupBtn.addEventListener("click", () => {
  popupCon.classList.add("close-popup");
});
