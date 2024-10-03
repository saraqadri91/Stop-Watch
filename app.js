let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
var icon = document.getElementById("icon");
var beepSound = document.getElementById("beep-sound");
var clickSound = document.getElementById("click-sound");

function startTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    beepSound.play();
    document.getElementById("nums").textContent =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds);
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
    }
    // Switch to pause icon
    icon.classList.remove("fa-circle-play");
    icon.classList.add("fa-circle-pause");
    timer = setInterval(startTimer, 1000);
    clickSound.play();
}

function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    document.getElementById("nums").textContent = "00:00:00";
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
    clickSound.play();
}

function pause() {
    clearInterval(timer);
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
    clickSound.play();
}
