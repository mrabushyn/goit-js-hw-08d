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

function onInputForm(evt) {
  userData = {
    email: refs.inputForm.value,
    message: refs.textAreaForm.value,
  };
  if (evt.target.name === refs.inputForm.name) {
    userData.email = refs.inputForm.value;
  }
  userData.message = refs.textAreaForm.value;
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
    refs.inputForm.value = parsedDataStoragePageDafault.email;
    refs.textAreaForm.value = parsedDataStoragePageDafault.message;
  }}












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
