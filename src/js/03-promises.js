import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  opacity: 0.7,
  timeout: 1500,
});

const refs = {
  form: document.querySelector('.form'),
  btnSubmit: document.querySelector('[type="submit"]'),
};

// temporary
refs.form.elements.delay.value = '1000';
refs.form.elements.step.value = '1000';
refs.form.elements.amount.value = '3';

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const delayValue = refs.form.elements.delay.value;
  const stepValue = refs.form.elements.step.value;
  const amountValue = refs.form.elements.amount.value;
  if (checkCorrectValue({ delayValue, stepValue, amountValue })) {
    return;
  }
  console.log(
    `delay: ${delayValue} step: ${stepValue}  amount: ${amountValue}`
  );
  refs.btnSubmit.disabled = true;
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.error(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Resolve(position, delay);
  } else {
    // Reject
    Rejection(position, delay);
  }
}

function checkCorrectValue({ delayValue, stepValue, amountValue }) {
  let errorAnyValue = false;

  if (delayValue < 0) {
    Notify.warning('Delay cannot be less than 0');
    errorAnyValue = true;
  }

  if (stepValue < 0) {
    Notify.warning('Step cannot be less than 0');

    errorAnyValue = true;
  }

  if (amountValue < 1) {
    Notify.warning('Amount must be more than 0');
    errorAnyValue = true;
  }

  return errorAnyValue;
}
