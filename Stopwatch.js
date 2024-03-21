let [sec, min, hrs] = [0, 0, 0];
let timer = document.getElementById("displaytime");
let timeout;

function sw() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hrs++;
        }
    }
    timer.innerHTML = formatTime(hrs) + ":" + formatTime(min) + ":" + formatTime(sec);
    timeout = setTimeout(sw, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;   // time is formatted with leading zeros
}

function start() {
    if (!timeout) {
        sw();
    }
}

function pause() {
    clearTimeout(timeout);
    timeout = null;
}

function reset() {
    clearTimeout(timeout);
    [sec, min, hrs] = [0, 0, 0];
    timer.innerHTML = "00:00:00";
}
