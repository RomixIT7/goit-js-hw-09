const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onBtnClick);

function onFormInput() {
  const inputValue = form.elements.email.value.trim();
  const textareaValue = form.elements.message.value.trim();
  const data = {
    email: inputValue,
    message: textareaValue,
  };
  saveToLS(STORAGE_KEY, data);
}

function onBtnClick(e) {
  e.preventDefault();
  const inputValue = form.elements.email.value.trim();
  const textareaValue = form.elements.message.value.trim();
  if (inputValue !== '' && textareaValue !== '') {
    console.log(loadFromLS(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}

function getData() {
  const { email, message } = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

getData();

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return error;
  }
}
