import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const input = document.querySelector("#datetime-picker");
const secCell = document.querySelector('span[data-seconds]');
const minCell = document.querySelector('span[data-minutes]');
const hoursCell = document.querySelector('span[data-hours]');
const daysCell = document.querySelector('span[data-days]')
const onStartBtn = document.querySelector('[data-start]');
let selectedTime = null;
let ms = 0;
onStartBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,

    onChange: function (selectedDates) {
        
        if (selectedDates[0] <= Date.now()) {

            Notify.failure("Please choose a date in the future");
        }
    },

    onClose(selectedDates) {

        ms = selectedDates[0] - Date.now();
        onStartBtn.disabled = false;      
        onStartBtn.addEventListener('click', start);

        function start(ms) {
             
            const timerId = setInterval((ms) => {
                onStartBtn.disabled = true;
                ms = selectedDates[0] - Date.now();

                if (ms < 1000) (clearInterval(timerId));

                const { days, hours, minutes, seconds } = convertMs(ms);

                console.log(`${days}:${hours}:${minutes}:${seconds}`);
                secCell.textContent = seconds;
                minCell.textContent = minutes;
                hoursCell.textContent = hours;
                daysCell.textContent = days;

            }, 1000);
        
        };
    
    },
};



flatpickr(input, options);

function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));

    const hours = addLeadingZero(Math.floor((ms % day) / hour));

    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
     
    return { days, hours, minutes, seconds };
};


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};



