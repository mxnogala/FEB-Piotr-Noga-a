const modal = document.querySelector(".gallery");
const modalImg = document.querySelector(".gallery__content");
const images = [...document.querySelectorAll(".splide__img")];
const span = document.getElementsByClassName("gallery__close")[0];

images.forEach(img => {
    img.addEventListener("click", (e) => {
        console.log(img);
        modal.style.display = "block";
        modalImg.src = e.currentTarget.src;
    })
})

span.onclick = function () {
    modal.style.display = "none";
}