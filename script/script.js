let pomodoroBtn = document.getElementById("pomodoro");
let shortBreak = document.getElementById("short-break");
let longBreak = document.getElementById("long-break");
let startBtn = document.getElementById("start");

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let goal = document.getElementById("task-goal");

let buttonActivated = 1;

pomodoroBtn.addEventListener("click", () => {
  buttonActivated = 1;
  pomodoroBtn.classList.add(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  shortBreak.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  longBreak.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  minutes.textContent = "25";
  seconds.textContent = "00";
});

shortBreak.addEventListener("click", () => {
  buttonActivated = 2;
  pomodoroBtn.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  shortBreak.classList.add(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  longBreak.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  minutes.textContent = "05";
  seconds.textContent = "00";
});

longBreak.addEventListener("click", () => {
  buttonActivated = 3;
  pomodoroBtn.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  shortBreak.classList.remove(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  longBreak.classList.add(
    "bg-yellow-400",
    "rounded-md",
    "shadow",
    "shadow-black"
  );
  minutes.textContent = "15";
  seconds.textContent = "00";
});

// Countdown Timer with sound
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  goal.disabled = true;
  var totalSeconds =
    parseInt(minutes.textContent) * 60 + parseInt(seconds.textContent);

  var timerInterval = setInterval(() => {
    var minute = Math.floor(totalSeconds / 60);
    var second = totalSeconds % 60;

    // Display the timer
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");

    // Check if the timer reaches zero
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      playMusic();
      if (buttonActivated === 1) {
        minutes.textContent = "25";
        seconds.textContent = "00";
      } else if (buttonActivated === 2) {
        minutes.textContent = "05";
        seconds.textContent = "00";
      } else {
        minutes.textContent = "15";
        seconds.textContent = "00";
      }
      startBtn.classList.remove("hidden");
      goal.disabled = false;
    } else {
      totalSeconds--;
    }
  }, 1000);
});

function playMusic() {
  var audioSrc = "/Pomodoro-Timer/resources/alarm-sound.wav"; // Replace with the path to your audio file
  var audio = new Audio(audioSrc);
  audio.play();
}
