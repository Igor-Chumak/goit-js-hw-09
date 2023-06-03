import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
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
  if (delayValue < 0 || stepValue < 0 || amountValue < 1) {
    console.error(
      ` ${delayValue < 0 ? 'Delay cannot be more than 0  ' : ''}${
        stepValue < 0 ? 'Step cannot be less than 0  ' : ''
      }${amountValue < 1 ? 'Amount must be more than 0' : ''}`
    );
    return;
  }
  console.log(
    `delay: ${delayValue} step: ${stepValue}  amount: ${amountValue}`
  );
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
  } else {
    // Reject
  }
}
