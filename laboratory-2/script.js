let clock = document.querySelector('#clock');

function updateTime() {
    let hours = new Date().getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = new Date().getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    clock.textContent = hours + ':' + minutes;

    setTimeout(updateTime, 1000);
}

updateTime();