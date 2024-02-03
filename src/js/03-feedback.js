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

function onSubmit(event) {
  event.preventDefault();
  const sentData = {
    email: email.value,
    message: message.value,
  };
  console.log(sentData);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = null;
  messageInput.value = null;
}

const throttleSave = throttle(saveInput, 500);

email.addEventListener('input', throttleSave);
message.addEventListener('input', throttleSave);
form.addEventListener('submit', onSubmit);

const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedData.email !== '' || parsedData.message !== '') {
  // console.log('Local storage is NOT empty');
  email.value = parsedData.email;
  message.value = parsedData.message;
} else {
  // console.log('Local storage is empty');
}
