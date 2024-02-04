import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");

const btnSubmit = document.querySelector("button[type='submit']");

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
    btnSubmit.disabled = !(email.value && message.value);
  }, 500)
);

const getData = () => {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const dataTransition = JSON.parse(data);
    email.value = dataTransition.email;
    message.value = dataTransition.message;
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    email: email.value,
    message: message.value,
  });

  form.reset();
  localStorage.clear();
  email.value = '';
  message.value = '';
  btnSubmit.disabled = true;
});

getData();
