addEventListener("DOMContentLoaded", (event) => script(event));

const buttonFactory = (text, onClick) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", onClick);
    return button;
}

const anchorFactory = (text, href) => {
    const anchor = document.createElement("a");
    anchor.innerText = text;
    anchor.href = href;
    anchor.target = "_blank";
    return anchor;
}

let currentIndex = 0;
const backgroundPathDef = "images/background-";
let backgroundPath = "images/background-0.jpg";

const nextBackground = () => {
    currentIndex++;
    if (currentIndex === 5) currentIndex = 0;
    backgroundPath = backgroundPathDef + currentIndex + ".jpg";
    updateBackground();
}

const updateBackground = () => {
    container.style.backgroundImage = `url(${backgroundPath})`;
    container.style.transition = "background-image 0.5s ease-in-out";
    container.style.backgroundSize = "cover";
}

let linkIndex = 0;

const changeLink = () => {
    const anchors = document.querySelectorAll("a");
    
    linkIndex++;
    if (linkIndex % 2 === 0) {
        for (let anchor of anchors) {
            anchor.style.color = "black";
            anchor.style.backgroundColor = "white";
            anchor.style.borderRadius = "50%";
        }
    } else {
        for (let anchor of anchors) {
            anchor.style.color = "white";
            anchor.style.backgroundColor = "black";
            anchor.style.borderRadius = "0px";
        }
    }
}

const script = (event) => {
    let container = document.getElementById("container");
    updateBackground();

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    container.appendChild(buttonContainer);
    const nextButton = buttonFactory("Next", nextBackground);
    buttonContainer.appendChild(nextButton);
    const changeLinkButton = buttonFactory("Change links", changeLink);
    buttonContainer.appendChild(changeLinkButton);

    let anchorContainer = document.createElement("div");
    anchorContainer.classList.add("anchor-container");
    container.appendChild(anchorContainer)

    for (let i = 0; i < 10; i++) {
        const anchor = anchorFactory(i + 1, "https://beastinblack.com/");
        anchorContainer.appendChild(anchor);
    }
}