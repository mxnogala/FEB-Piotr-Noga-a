const header = document.querySelector(".heroImage__header");
const text = ["Instalacje elektryczne", "Instalacje ochrony odgromowej", "Pomiary ochronne", "Projektowanie i kosztorysowanie robót elektrycznych"]
let index = 0;
let textIndex = 0;
let time = 0;
let speed = 80;
let deleteLetter = false;
let i = 1;

const getText = (start, end, txt) => {
    return txt.substr(start, end);
}

const addText = (content) => {
    header.textContent = content;
}

const typing = (newTime) => {
    if (textIndex < text.length) {
        if (text[textIndex].length <= index && deleteLetter === false) { //jeżeli koniec tekstu
            deleteLetter = true;
            window.setTimeout(function () {
                i = -1;
                speed = 20;
            }, 2000);
        }

        if (deleteLetter === true && index <= 0) {
            deleteLetter = false;
            window.setTimeout(() => {
                textIndex++;
                i = 1;
                index = 0;
                speed = 80;
            }, 200);

        }
    }
    else {
        textIndex = 0;
    }

    if (newTime - time > speed) {
        time = newTime;
        index += i;
        let content = getText(0, index, text[textIndex]);
        addText(content);
    }
    requestAnimationFrame(typing);
}
requestAnimationFrame(typing);
