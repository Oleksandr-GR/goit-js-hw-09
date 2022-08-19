const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyContainer = document.querySelector('body')
let onStartClick = null;
stopBtn.disabled = true;

stopBtn.addEventListener('click', () => {
    clearInterval(onStartClisk);
    startBtn.disabled = false;
    stopBtn.disabled = true;   
});

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    onStartClisk = setInterval(() => {
        bodyContainer.style.backgroundColor = getRandomHexColor()
    }, 1000);

});

function getRandomHexColor() {
  return (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
};
