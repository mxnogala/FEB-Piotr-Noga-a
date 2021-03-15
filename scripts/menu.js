const wrapper = document.querySelector(".navbar-custom");
const brandImg = document.querySelector(".navbar-custom__logo");

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
        wrapper.classList.add("navbar-custom-scroll");
        brandImg.classList.add('navbar-custom-scroll__logo');
        console.log('scroll');
        wrapper.style.height = "50%";

    }
    // else if (window.pageYOffset < 100) {
    //     wrapper.classList.remove("scrollMenu");
    //     wrapper.style.height = "16%";
    //     brandImg.style = "";
    // }
});