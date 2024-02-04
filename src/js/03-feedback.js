import throttle from 'lodash.throttle';

const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');

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
  }, 500)
);

function getData() {
  const data = localStorage.getItem('feedback-form-state');
  const dataTransition = JSON.parse(data);
  email.value = dataTransition.email;
  message.value = dataTransition.message;
}

form.addEventListener('submit', event => {
  event.preventDefault;
  const userMessage = {
    email: 'email.value',
    message: 'message.value',
  };
  console.log(userMessage);

  form.reset();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});

getData();
