import { onEditModalEscKeydown } from './form';
const successTemplate = document.querySelector('#success').content.querySelector('section');
const errorTemplate = document.querySelector('#error').content.querySelector('section');

const successModalElement = successTemplate.cloneNode(true);
const errorModalElement = errorTemplate.cloneNode(true);
const successMessageElement = successModalElement.querySelector('h2');
const errorMessageElement = errorModalElement.querySelector('h2');
successModalElement.classList.add('hidden');
errorModalElement.classList.add('hidden');
document.body.appendChild(successModalElement);
document.body.appendChild(errorModalElement);

const closeErrorButton = errorModalElement.querySelector('.error__button');
const closeSuccessButton = successModalElement.querySelector('.success__button');

const removePopupEscListener = (cb) => {
  document.removeEventListener('keydown', cb);
};

const removeBodyPopupClick = (cb) => {
  document.removeEventListener('click', cb);
};

const closeSuccessModal = () => {
  successModalElement.classList.add('hidden');
  removePopupEscListener(onCloseSuccessEscKeydown);
  removeBodyPopupClick(onBodyClosePopupClick);
};

const closeErrorModal = () => {
  errorModalElement.classList.add('hidden');
  removePopupEscListener(onCloseErrorEscKeydown);
  removeBodyPopupClick(onBodyClosePopupClick);
  document.addEventListener('keydown', onEditModalEscKeydown);
};

const onPopupButtonClick = (evt) => {
  if (evt.target.classList.contains('success__button')) {
    closeSuccessModal();
  }
  else if (evt.target.classList.contains('error__button')) {
    closeErrorModal();
  }
};

function onCloseSuccessEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessModal();
  }
}

function onCloseErrorEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorModal();
  }
}

function onBodyClosePopupClick(evt) {
  if (evt.target.classList.contains('error')) {
    closeErrorModal();
  }
  else if (evt.target.classList.contains('success')) {
    closeSuccessModal();
  }
}

const showErrorModal = (message) => {
  document.addEventListener('click', onBodyClosePopupClick);
  document.addEventListener('keydown', onCloseErrorEscKeydown);
  document.removeEventListener('keydown', onEditModalEscKeydown);
  errorMessageElement.textContent = message;
  errorModalElement.classList.remove('hidden');
};

const showSuccessModal = (message) => {
  document.addEventListener('click', onBodyClosePopupClick);
  document.addEventListener('keydown', onCloseSuccessEscKeydown);
  document.removeEventListener('keydown', onEditModalEscKeydown);
  successMessageElement.textContent = message;
  successModalElement.classList.remove('hidden');
};

closeSuccessButton.addEventListener('click', onPopupButtonClick);

closeErrorButton.addEventListener('click', onPopupButtonClick);

export { showErrorModal, showSuccessModal };
