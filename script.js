const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const dateTime = document.querySelector('.date-time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const tickSound = document.querySelector('audio');

let intervalId;

startBtn.addEventListener('click', startClock);
stopBtn.addEventListener('click', stopClock);

function startClock() {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
  tickSound.currentTime = 0; // Reset audio to the beginning
  tickSound.play(); // Play the tick sound
}

function stopClock() {
  clearInterval(intervalId);
  tickSound.pause(); // Pause the tick sound
}

function updateTime() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourRotation = (hour * 30) + (minute / 2);
  const minuteRotation = (minute * 6) + (second / 10);
  const secondRotation = second * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  dateTime.textContent = now.toLocaleString();
}
