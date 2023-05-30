import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  btnStart: document.querySelector('[data-start]'),
  //   input: document.getElementById('datetime-picker'),
  dataDays: document.querySelector('[data-start]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
ref.btnStart.setAttribute('disabled', '');

const dateInput = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = new Date();
    if (currentDate.getTime() > selectedDates[0].getTime()) {
      window.alert('Please choose a date in the future');
      return selectedDates[0];
    }
    console.log(selectedDates[0]);
    ref.dataDays.textContent(selectedDates[0].getDate());
    ref.dataHours.textContent(selectedDates[0].getHours());
    ref.dataMinutes.textContent(selectedDates[0].getMinutes());
    ref.dataSeconds.textContent(selectedDates[0].getSeconds());
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
