const ref = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
let timerId = null;

ref.btnStop.setAttribute('disabled', '');

ref.btnStart.addEventListener('click', () => {
  ref.btnStart.setAttribute('disabled', '');
  ref.btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

ref.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  ref.btnStart.removeAttribute('disabled');
  ref.btnStop.setAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
