document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perMove: 3,
        gap: '1em',
        padding: '2.5em',
        type: 'loop',
        focused: 'center',
        autoplay: 'true',
        perPage: 3,
        breakpoints: {
            700: {
                perPage: 1,
                perMove: 1,
            },
            900: {
                perMove: 2,
                perPage: 2,
            }
        }

    }).mount();
});




