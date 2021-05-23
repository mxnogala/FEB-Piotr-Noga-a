const toggler = document.querySelector('.navbar-toggler');
const nav = document.querySelector(".navbar-container");
const listBtn = [...document.querySelectorAll(".offer__header")];
const mediaQuery = window.matchMedia("(max-width: 768px)");

toggler.addEventListener("click", () => {
    nav.classList.toggle("navbar-custom-active");

});

const listContent = [...document.querySelectorAll(".offer-list")];
const offerArrow = [...document.querySelectorAll(".offer__arrow")];
if (!mediaQuery.matches) {
    console.log('duzy');
    listContent.forEach(link => {
        link.classList.add("offer__list-active");
    });
    offerArrow.forEach(arrow => {
        arrow.classList.add("offer__arrow-up");
    });
}

listBtn.forEach(list => {
    list.addEventListener("click", () => {
        const listContent = document.querySelector(`#${list.id}-content`);
        const listArrow = document.querySelector(`#${list.id}-arrow`);
        listContent.classList.toggle("offer__list-active");
        listArrow.classList.toggle("offer__arrow-up");

    })
})


