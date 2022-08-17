const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyContainer = document.querySelector('body')
let onStartClick = null;
 stopBtn.disabled = true;


startBtn.addEventListener('click', () => {
    onStartClisk = setInterval(() => {
        bodyContainer.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener('click', () => {
    clearInterval(onStartClisk);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function getRandomHexColor() {
  return (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
};