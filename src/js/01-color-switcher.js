const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyContainer = document.querySelector('body');

let timerId = null;
stopBtn.disabled = true;



startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
        bodyContainer.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function onStopBtn() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;   
};

function getRandomHexColor() {
  return (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
};