const referencesBtn = document.querySelector(".references__btn");
const referencesContent = document.querySelector(".references__content");
// const referencesHeader = document.querySelector(".references__header");
const arrow = document.querySelector(".references__arrow");


referencesBtn.addEventListener('click', () => {

    referencesContent.classList.toggle('references__content-active');
    referencesBtn.classList.toggle('sectionHeader-references');
    referencesBtn.classList.toggle('sectionHeader');
    // referencesBtn.classList.toggle('underline');
    // // referencesBtn.classList.toggle('active-underline');
    // referencesBtn.classList.toggle('sectionHeader');
    // referencesBtn.style.border.style = "none";
    arrow.classList.toggle('references__arrow-up');
})

const readMoreBtn = document.querySelector(".text__read-more");
const readMoreContent = document.querySelector(".text__content");

readMoreBtn.addEventListener("click", () => {
    readMoreContent.classList.toggle('text__content-active');
})