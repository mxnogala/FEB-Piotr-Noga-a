const isLinkActive = (links, link) => {

    links.forEach(l => {
        if (l.id != link.id) {
            if (l.classList.contains('active-underline')) {
                l.classList.remove('active-underline');
                l.classList.add('underline');
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

    let offset = getOffset(section);
    console.log(offset);
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: offset,
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const links = [...document.querySelectorAll('.nav-link')];
    const arrow = document.querySelector(".heroImage__arrow");
    const sections = [...document.querySelectorAll("scrollToSection")];

    window.addEventListener("scroll", activeWhileScrolling);

    links.forEach(link => {
        // isClick = false;

        link.addEventListener('click', (e) => {

            // e.preventDefault();
            // window.removeEventListener("scroll", activeWhileScrolling);

            const section = document.querySelector(`#${link.id}-section`);
            isLinkActive(links, link);
            scrollTo(section);
            // window.addEventListener("scroll", activeWhileScrolling);
            // isClick = false;

            // e
        })

    });

    arrow.addEventListener('click', (e) => {

        const aboutSection = document.querySelector("#about-link-section");
        const aboutLink = document.querySelector("#about-link");
        isLinkActive(links, aboutLink);
        scrollTo(aboutSection);
    })


})

const activeWhileScrolling = (e) => {
    // e.stopPropagation();
    let navs = document.querySelectorAll(".nav-link");
    let sects = document.querySelectorAll(".scrollToSection");
    let lastId;
    let cur = [];
    const links = [...document.querySelectorAll('.nav-link')];



    let fromTop = window.scrollY;
    navs.forEach(lin => {
        let section = document.querySelector(`.${lin.id}`);
        let offset = getOffset(section)
        // let off = section.offsetTop;
        // let nav = document.querySelector(".navbar");
        // console.log("From top" + fromTop);
        // console.log(section.getBoundingClientRect().top + nav.offsetHeight);

        if (
            fromTop >= offset - 10
        ) {
            isLinkActive(links, lin);
        }
    })
}



