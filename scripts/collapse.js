const toggler = document.querySelector('.navbar-toggler');
const nav = document.querySelector(".navbar-container");

toggler.addEventListener("click", () => {
    nav.classList.toggle("navbar-custom-active");

});