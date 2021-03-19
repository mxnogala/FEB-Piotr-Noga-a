const navbar = document.querySelector(".navbar-custom");
const logo = document.querySelector(".navbar-custom__logo");

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
        navbar.classList.add("navbar-custom-scroll");
        logo.classList.add("navbar-custom-scroll__logo");
        navbar.style.height = "50%";

    }
    else if (window.pageYOffset < 100) {
        navbar.classList.remove("navbar-custom-scroll");
        logo.classList.remove("navbar-custom-scroll__logo")
    }
});