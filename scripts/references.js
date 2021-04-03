const referencesBtn = document.querySelector(".references__btn");
const referencesContent = document.querySelector(".references__content");
const referencesHeader = document.querySelector(".references__header");
const arrow = document.querySelector(".references__arrow");


referencesBtn.addEventListener('click', () => {

    referencesContent.classList.toggle('references__content-active');
    referencesBtn.classList.toggle('underline');
    referencesHeader.classList.toggle('active-underline');
    arrow.classList.toggle('references__arrow-up');
})