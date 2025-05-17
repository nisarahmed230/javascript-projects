const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");
const lapList = document.getElementById("lapList");

let minutes = 0,
  seconds = 0,
  milliseconds = 0;
let interval = null;
let lapCount = 0;
let isRunning = false;

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  minutesSpan.textContent = String(minutes).padStart(2, "0");
  secondsSpan.textContent = String(seconds).padStart(2, "0");
  millisecondsSpan.textContent = String(milliseconds).padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    interval = setInterval(updateTimer, 10);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function stopTimer() {
  pauseTimer();
  lapCount++;
  const lapTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
  lapList.appendChild(lapItem);
  lapList.scrollTop = lapList.scrollHeight;

}

function resetTimer() {
  pauseTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesSpan.textContent = "00";
  secondsSpan.textContent = "00";
  millisecondsSpan.textContent = "00";
  lapList.innerHTML = "";
  lapCount = 0;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
