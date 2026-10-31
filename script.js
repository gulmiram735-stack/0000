// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// MENU LINK CLICK
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    if (name === "" || phone === "" || course === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Бардык талааларды толтуруңуз!";
        return;
    }

    formMessage.style.color = "#15945c";
    formMessage.textContent =
        "Рахмат, " + name + "! Сиздин " + course +
        " курсуна катталуу өтүнүчүңүз кабыл алынды.";

    contactForm.reset();
});

// BUTTON ANIMATION
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("mouseenter", function () {
        button.style.transition = "0.3s";
    });
});

// CONSOLE MESSAGE
console.log("Билим Ордо сайты ийгиликтүү иштеп жатат!");