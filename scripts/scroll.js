const links = [...document.querySelectorAll('.nav-link')];
const chevron = document.querySelector(".heroImage__arrow");

const isLinkActive = (links, link) => {

    links.forEach(l => {
        if (l.id != link.id) {
            if (l.classList.contains('active-underline')) {
                l.classList.add('underline');
                l.classList.remove('active-underline');
            }
        }
    })
    link.classList.remove('underline');
    link.classList.add('active-underline');
}
const getOffset = (section) => {
    let offset = 0;
    let pageY = window.pageYOffset;
    let nav = document.querySelector('.navbar-custom-scroll');
    if (nav == null) {
        nav = document.querySelector('.navbar').offsetHeight;
        offset = pageY + section.getBoundingClientRect().top - (nav / 2);
    }
    else {
        offset = pageY + section.getBoundingClientRect().top - nav.offsetHeight;
    }
    return offset;
}

const scrollTo = (section) => {

    window.removeEventListener("scroll", activeWhileScrolling);
    let offset = getOffset(section);
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: offset,
    })
}

const isFinished = () => {
    window.addEventListener("scroll", activeWhileScrolling);
}

const chevronScroll = (e) => {
    e.preventDefault();
    if (window.pageYOffset == 0) {
        chevron.classList.add("appear")
    }

    if (window.pageYOffset > 100) {
        chevron.classList.remove("appear");
    }

}

document.addEventListener("DOMContentLoaded", () => {

    chevron.classList.add("appear");

    window.addEventListener("scroll", activeWhileScrolling);

    window.addEventListener("scroll", chevronScroll);
    chevron.addEventListener("click", () => {
        chevron.classList.remove("appear");
    })

    links.forEach(link => {

        link.addEventListener('click', (e) => {
            const section = document.querySelector(`#${link.id}-section`);
            isLinkActive(links, link);
            scrollTo(section);
            window.setTimeout(function () {
                window.addEventListener("scroll", activeWhileScrolling);
            }, 1000);
        })

    });

    chevron.addEventListener('click', (e) => {

        const aboutSection = document.querySelector("#about-link-section");
        const aboutLink = document.querySelector("#about-link");
        isLinkActive(links, aboutLink);
        scrollTo(aboutSection);
    })


})

const activeWhileScrolling = (e) => {
    let navs = document.querySelectorAll(".nav-link");
    const links = [...document.querySelectorAll('.nav-link')];
    const heroImage = document.querySelector("#about-link-section");
    if (pageYOffset < getOffset(heroImage)) {
        links.forEach(link => {
            link.classList.remove('active-underline');
            link.classList.add('underline');
        })
    }


    let fromTop = window.scrollY;
    navs.forEach(link => {
        let section = document.querySelector(`.${link.id}`);
        let offset = getOffset(section)
        if (fromTop >= offset - 50) {
            isLinkActive(links, link);
        }
    })
}


