import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const delayValue = refs.form.elements.delay.value;
  const stepValue = refs.form.elements.step.value;
  const amountValue = refs.form.elements.amount.value;
  // check on 0 ?
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
