import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('.form'),
};

ref.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const delayValue = refs.form.elements.delay.value;

  // check on 0 ?
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
