addEventListener("DOMContentLoaded", (event) => script(event));

// Start at -1 to make 0 be the first one to appear on page load
let currentDesktop = 0;
let isAnimating = false;
const cycleDesktops = () => {
    if (isAnimating) return; // If an animation is running, don't start a new one

    isAnimating = true; // Set the flag to true to indicate that an animation is running

    const prevDesktop = currentDesktop;
    currentDesktop++;
    if (currentDesktop === 4) currentDesktop = 0;

    // Slide out the previous desktop to the bottom
    $(`#desktop-${prevDesktop}`).animate({ top: '100%' }, 500 * 2, function () {
        $(this).css('top', '-100%'); // Reset the top position for the next time it's shown
    });

    // Slide in the current desktop from the top
    $(`#desktop-${currentDesktop}`).css('top', '-100%'); // Start from the top
    $(`#desktop-${currentDesktop}`).animate({ top: '0' }, 500 * 2, function () {
        isAnimating = false; // Reset the flag when the animation is complete
    });
}

const icons = [
    [`<div class="icon">
        <img src="./icons/ace.png">
        <p>Ace</p>
    </div>`,
    `<div class="icon">
        <img src="./icons/bear.png">
        <p>Bear</p>
    </div>`],
    [`<div class="icon">
        <img src="./icons/giraffe.png">
        <p>Giraffe</p>
    </div>`,
    `<div class="icon">
        <img src="./icons/jellyfish.png">
        <p>Jellyfish</p>
    </div>`],
    [`<div class="icon">
        <img src="./icons/pig.png">
        <p>Pig</p>
    </div>`,
    `<div class="icon">
        <img src="./icons/shark.png">
        <p>Shark</p>
    </div>`],
    [`<div class="icon">
        <img src="./icons/tiger.png">
        <p>Tiger</p>
    </div>`,
    `<div class="icon">
        <img src="./icons/toucan.png">
        <p>Toucan</p>
    </div>`]
];

const colors = ["yellow", "green", "blue", "orange", "purple"]

const backgroundPath = "images/background-";
const initDesktops = () => {
    for (let i = 0; i < 4; i++) {
        // Preload the image
        const img = new Image();
        img.src = `${backgroundPath}${i}.jpg`;

        // Set the background image when the image is fully loaded
        $(`#desktop-${i}`).css(
            "background-image",
            `url(${backgroundPath}${i}.jpg)`
        );
        // $(`#desktop-${i}`).css(
        //     "background-color",
        //     colors[i]
        // );
        $(`#desktop-${i}`).css('top', '-100%');
        $(`#desktop-${i}`).on("click", cycleDesktops);

        $(`#desktop-${i}`).append(`<div id='icon-container-${i}' class='icon-container'></div>`);

        // Make some icons for each desktop
        for (icon of icons[i]) {
            $(`#icon-container-${i}`).append(icon);
        }
    }

    $("#desktop-0").css('top', '0');
};

const script = (event) => {
    initDesktops();
};
