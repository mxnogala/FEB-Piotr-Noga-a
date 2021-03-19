document.addEventListener("DOMContentLoaded", () => {
    const links = [...document.querySelectorAll('.nav-link')];

    links.forEach(link => {

        link.addEventListener('click', () => {
            const section = document.querySelector(`#${link.id}-section`);
            console.log(section.getBoundingClientRect().top + window.pageYOffset);
            const sectionOffset = section.getBoundingClientRect();
            const sectionTopOffset = sectionOffset.top + window.pageYOffset;
            const sectionBottomOffset = sectionOffset.bottom + window.pageYOffset;

            links.forEach(l => {
                if (l.id != link.id) {
                    if (l.classList.contains('active') || l.classList.contains('active-custom')) {
                        l.classList.remove('active');
                        l.classList.remove('active-custom');
                    }
                }
            })
            link.classList.add('active', 'active-custom');

            console.log(section);
            let nav = "";
            let offset = 0;
            let pageY = window.pageYOffset;
            nav = document.querySelector('.navbar-custom-scroll');
            if (nav == null) {
                nav = document.querySelector('.navbar').offsetHeight;
                offset = pageY + section.getBoundingClientRect().top - (nav / 2);
            }
            else {
                offset = pageY + section.getBoundingClientRect().top - nav.offsetHeight;
            }
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: offset,
            })

        })
    });



})


