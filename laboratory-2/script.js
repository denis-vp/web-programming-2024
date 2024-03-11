let clock = document.querySelector('#clock');

function updateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    clock.textContent = hours + ':' + minutes;

    setTimeout(updateTime, 1000);
}

updateTime();