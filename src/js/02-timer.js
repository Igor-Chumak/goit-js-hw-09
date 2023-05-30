import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  btnStart: document.querySelector('[data-start]'),
  input: document.getElementById('datetime-picker'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
ref.btnStart.setAttribute('disabled', '');

const dateInput = flatpickr(ref.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let timeStamp = selectedDates[0].getTime() - new Date().getTime();
    // console.log('cur: ', new Date().getTime());
    // console.log('sel: ', selectedDates[0].getTime());
    // console.log('d: ', timeStamp);
    if (timeStamp <= 0) {
      window.alert('Please choose a date in the future');
      return selectedDates[0];
    }
    const { days, hours, minutes, seconds } = convertMs(timeStamp);
    ref.dataDays.textContent = addLeadingZero(days);
    ref.dataHours.textContent = addLeadingZero(hours);
    ref.dataMinutes.textContent = addLeadingZero(minutes);
    ref.dataSeconds.textContent = addLeadingZero(seconds);

    ref.btnStart.removeAttribute('disabled');
  },
});

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

function addLeadingZero(value) {
  return value > 9 ? String(value) : String(value).padStart(2, '0');
}
