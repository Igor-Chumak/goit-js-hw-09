import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const ref = {
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timeStamp = 0;
let timerId = null;

ref.btnStart.disabled = true;

ref.btnStart.addEventListener('click', () => {
  ref.btnStart.disabled = true;
  timerId = setInterval(() => {
    if (timeStamp > 1000) {
      timeStamp -= 1000;
      outputTimerDOM(convertMs(timeStamp));
    } else {
      stopTimer();
    }
  }, 1000);
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    timeStamp = selectedDates[0].getTime() - new Date().getTime();
    if (timeStamp <= 0) {
      Notify.warning('Please choose a date in the future', {
        width: '500px',
        fontSize: '25px',
        position: 'center-top',
        opacity: 0.7,
      });
      return selectedDates[0];
    }
    outputTimerDOM(convertMs(timeStamp));

    ref.btnStart.disabled = false;
  },
});

function stopTimer() {
  ref.btnStart.disabled = false;
  clearInterval(timerId);
  Notify.success('The set timer has finished its work ', {
    width: '500px',
    fontSize: '25px',
    position: 'center-top',
    opacity: 0.7,
  });
}

function outputTimerDOM({ days, hours, minutes, seconds }) {
  ref.days.textContent = addLeadingZero(days);
  ref.hours.textContent = addLeadingZero(hours);
  ref.minutes.textContent = addLeadingZero(minutes);
  ref.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
