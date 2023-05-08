// Declaring Variables
const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");

let hours = 0; // keep track of hours
let minutes = 0; // keep track of minutes
let seconds = 0; // keep track of seconds
let count = 0; // keep track of count

let timer = false; // whether timer is running

// Event Listeners
startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

// Stopwatch Function
function stopWatch() {
  if (timer === true) {
    // keep increasing the count
    ++count;

    // if count is 100 increment seconds
    if (count === 100) {
      ++seconds;
      count = 0;
    }

    // if seconds is 60 increment minutes
    if (seconds === 60) {
      ++minutes;
      seconds = 0;
    }

    // if minutes is 60 increment hours
    if (minutes === 60) {
      ++hours;
      minutes = 0;
      seconds = 0;
    }

    let hoursDisplay = hours;
    let minutesDisplay = minutes;
    let secondsDisplay = seconds;
    let countDisplay = count;

    // if the display value is less than 10 append a 0 at start
    if (hoursDisplay < 10) {
      hoursDisplay = "0" + hoursDisplay;
    }

    if (minutesDisplay < 10) {
      minutesDisplay = "0" + minutesDisplay;
    }

    if (secondsDisplay < 10) {
      secondsDisplay = "0" + secondsDisplay;
    }

    if (countDisplay < 10) {
      countDisplay = "0" + countDisplay;
    }

    // update the display
    document.getElementById("hr").innerHTML = hoursDisplay;
    document.getElementById("min").innerHTML = minutesDisplay;
    document.getElementById("sec").innerHTML = secondsDisplay;
    document.getElementById("count").innerHTML = countDisplay;

    setTimeout(stopWatch, 10);
  }
}
