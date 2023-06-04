import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  dateTimePicker: document.querySelector('#datetime-picker'),
  timerFrame: document.querySelector('.timer'),
  timerFields: document.querySelectorAll('.field'),
  timerValues: document.querySelectorAll('.value'),
  timerLabels: document.querySelectorAll('.label'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timeStamp = 0;
let timerId = null;

// below css for Timer Frame
refs.timerFrame.style.display = 'block';
refs.timerFrame.style.fontWeight = '100';
refs.timerFrame.style.fontFamily = 'sans-serif';
refs.timerFrame.style.marginTop = '50px';
refs.timerFrame.style.color = '#fff';
refs.timerFrame.style.textAlign = 'center';
refs.timerFrame.style.fontSize = '100px';

refs.timerFields.forEach(timerField => {
  timerField.style.display = 'inline-block';
  timerField.style.padding = '10px';
  timerField.style.borderRadius = '5px';
  timerField.style.background = '#5a032f';
});

refs.timerValues.forEach(timerValue => {
  timerValue.style.display = 'inline-block';
  timerValue.style.padding = '15px';
  timerValue.style.borderRadius = '5px';
  timerValue.style.background = '#98034d';
});

refs.timerLabels.forEach(timerLabel => {
  timerLabel.style.display = 'block';
  timerLabel.style.paddingTop = '5px';
  timerLabel.style.fontSize = '16px';
});
// above css for Timer Frame

refs.btnStart.disabled = true;

refs.btnStart.addEventListener('click', () => {
  refs.btnStart.disabled = true;
  refs.dateTimePicker.disabled = true;
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

    refs.btnStart.disabled = false;
  },
});

function stopTimer() {
  refs.dateTimePicker.disabled = false;
  // refs.btnStart.disabled = false;
  clearInterval(timerId);
  Notify.success('The set timer has finished its work ', {
    width: '500px',
    timeout: '5000',
    fontSize: '25px',
    position: 'center-top',
    opacity: 0.7,
  });
}

function outputTimerDOM({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
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
