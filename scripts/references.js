const referencesBtn = document.querySelector(".references__btn");
const referencesContent = document.querySelector(".references__content");

referencesBtn.addEventListener('click', () => {

    referencesContent.classList.toggle('references__content-active');
})