import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const refs = {
  inputForm: form.children[0].children[0],
  textAreaForm: form.children[1].children[0],
};
const USER_DATA_KEY = 'feedback-form-state';
const emailValue = refs.inputForm;
const messageValue = refs.textAreaForm;
let userData = {};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(evt) {
  userData = {
    email: emailValue.value,
    message: messageValue.value,
  };
  if (evt.target.name === emailValue.name) {
    userData.email = emailValue.value;
  }
  userData.message = messageValue.value;
  console.log(userData); 
localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const stringUserData = localStorage.getItem(USER_DATA_KEY);
  const parseUserData = JSON.parse(stringUserData);
  console.log(parseUserData); 
  localStorage.removeItem(USER_DATA_KEY);
  evt.currentTarget.reset();
}

function saveDataPageReload () {
  const dataStoragePageDafault = localStorage.getItem(USER_DATA_KEY);
  const parsedDataStoragePageDafault = JSON.parse(dataStoragePageDafault);
  if (dataStoragePageDafault) {
    emailValue.value = parsedDataStoragePageDafault.email;
    messageValue.value = parsedDataStoragePageDafault.message;
  }}

saveDataPageReload();










//_____________________________________________last try_____________________________________________________________
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
