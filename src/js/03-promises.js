import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
let delay = document.querySelector('input[name="delay"]');
let step = document.querySelector('input[name="step"]');
let amount = document.querySelector('input[name="amount"]');
let position = 0;

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(elem) {
  elem.preventDefault();

  delay = Number(elem.currentTarget.delay.value);
  step = Number(elem.currentTarget.step.value);
  amount = Number(elem.currentTarget.amount.value);

  if (delay >= 0 && step >= 0 && amount > 0) {
    for (position = 1; position <= amount; position += 1) {
      delay += step;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          setTimeout(() => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
              useIcon: false,
            });
          }, delay);
        })
        .catch(({ position, delay }) => {
          setTimeout(() => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
              useIcon: false,
            });
          }, delay);
        });
    }
  } else {
    Notify.warning('Put value > 0');
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    }
    reject({ position, delay });
  });
}