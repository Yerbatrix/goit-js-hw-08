import throttle from 'lodash.throttle';

const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: email.value, message: message.value })
    );
  }, 500)
);
