const modal = document.querySelector(".gallery");
var modalImg = document.querySelector(".gallery__content");
// const img = document.querySelector("#img-6");
const images = [...document.querySelectorAll(".splide__img")];
// var captionText = document.querySelector(".gallery__caption");

images.forEach(img => {
    img.addEventListener("click", (e) => {
        console.log(img);
        modal.style.display = "block";
        modalImg.src = e.currentTarget.src;
    })
})

// img.addEventListener("click", () => {
//     console.log(img);
//     modalImg.src = img.src;
// })
// img.onclick = function () {
//     console.log(img);
//     modal.style.display = "block";
//     modalImg.src = img.src;

// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("gallery__close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}