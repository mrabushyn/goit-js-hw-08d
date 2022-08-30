import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const refs = {
  inputForm: form.children[0].children[0],
  textAreaForm: form.children[1].children[0],
};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

let userData = {};
const USER_DATA_KEY = 'feedback-form-state';

function onSubmitForm(evt) {
  console.log(localStorage);
  console.log(parseUserData); // показує після перезагрузки сторінки
  console.log(userData); // показує без перезагрузки сторінки

  evt.preventDefault();
  localStorage.removeItem(USER_DATA_KEY);
  evt.currentTarget.reset();
}

function onInputForm(evt) {
  userData = {
    email: refs.inputForm.value,
    message: refs.textAreaForm.value,
  };
  if (evt.target.name === refs.inputForm.name) {
    userData.email = refs.inputForm.value;
  }
  userData.message = refs.textAreaForm.value;

localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
// return userData;
}

console.log(localStorage)


  const stringUserData = localStorage.getItem(USER_DATA_KEY);
  const parseUserData = JSON.parse(stringUserData);
  if (stringUserData) {
    refs.inputForm.value = parseUserData.email;
    refs.textAreaForm.value = parseUserData.message;
  }



// sdf@sd.h


// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const refs = {
//   inputForm: form.children[0].children[0],
//   textAreaForm: form.children[1].children[0],
// };
// const EMAIL = 'email';
// const MESSAGE = 'message';
// const USER_DATA_OBJECT = 'feedback-form-state';

// form.addEventListener('submit', onSubmitForm);
// refs.inputForm.addEventListener('input', throttle(onInputForm, 500));
// refs.textAreaForm.addEventListener('input', throttle(onTextAreaForm, 500));

// let emailValue;
// let messageValue;

// function onInputForm(evt) {
//   emailValue = evt.target.value;
//   localStorage.setItem(EMAIL, emailValue);
// }
// const savedEmail = localStorage.getItem(EMAIL);
// if (savedEmail) {
//   refs.inputForm.value = savedEmail;
// }

// function onTextAreaForm(evt) {
//   messageValue = evt.target.value;
//   localStorage.setItem(MESSAGE, messageValue);
// }
// const savedMessage = localStorage.getItem(MESSAGE);
// if (savedMessage) {
//   refs.textAreaForm.value = savedMessage;
// }

// function onSubmitForm(evt) {
//   evt.preventDefault();
//   localStorage.setItem(
//     USER_DATA_OBJECT,
//     JSON.stringify({ email: emailValue, message: messageValue })
//   );
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   localStorage.removeItem(EMAIL);
//   localStorage.removeItem(MESSAGE);
//   evt.currentTarget.reset();
// }

// console.log(localStorage);
