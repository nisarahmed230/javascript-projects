const minuteLabel = document.getElementById("minutes");
const secondLabel = document.getElementById("seconds");
const millisecondLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("lapList");

// Variables of stopwatch
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
}

function pauseTimer() {
}

function stopTimer() {
}

function resetTimer() {
}

function updateTimer() {
    milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTime();
}

function displayTime() {
    