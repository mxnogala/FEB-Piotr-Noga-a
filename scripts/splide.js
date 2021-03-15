document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        perMove: 3,
        focus: 'center',
        gap: '1em',
        padding: '2.5em',
        type: 'loop',
        focused: 'center',
        autoplay: 'true',

    }).mount();
});



