import throttle from 'lodash.throttle';

const email = document.querySelector("[name='email']");
const message = document.querySelector("[name='message']");
const form = document.querySelector('.feedback-form');

function saveInput() {
  const email = email.value;
  const message = message.value;
  const formData = {
    email,
    message,
  };

  const dataToSend = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', dataToSend);

  console.log(dataToSend);
}
