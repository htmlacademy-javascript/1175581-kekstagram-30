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

const closeSuccessModal = () => {
  successModalElement.classList.add('hidden');
  removeSuccessEscListener();
  removeBodySuccessClick();
  document.addEventListener('keydown', onEditModalEscKeydown);
};

const closeFormPopup = () => {};

const closeErrorModal = () => {
  errorModalElement.classList.add('hidden');
  removeErrorEscListener();
  removeBodyErrorClick();
  document.addEventListener('keydown', onEditModalEscKeydown);
};

const onCloseSuccessButtonClick = () => {
  closeSuccessModal();
};

const onCloseErrorButtonClick = () => {
  closeErrorModal();
};

const onCloseSuccessEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessModal();
  }
};

const onCloseErrorEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorModal();
  }
};

const onBodyCloseErrorClick = (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorModal();
  }
};

const onBodyCloseSuccessClick = (evt) => {
  if (evt.target.classList.contains('success')) {
    closeSuccessModal();
  }
};

const showErrorModal = (message) => {
  document.addEventListener('click', onBodyCloseErrorClick);
  document.addEventListener('keydown', onCloseErrorEscKeydown);
  document.removeEventListener('keydown', onEditModalEscKeydown);
  errorMessageElement.textContent = message;
  errorModalElement.classList.remove('hidden');
};

const showSuccessModal = (message) => {
  document.addEventListener('click', onBodyCloseSuccessClick);
  document.addEventListener('keydown', onCloseSuccessEscKeydown);
  document.removeEventListener('keydown', onEditModalEscKeydown);
  successMessageElement.textContent = message;
  successModalElement.classList.remove('hidden');
};

function removeSuccessEscListener() {
  document.removeEventListener('keydown', onCloseSuccessEscKeydown);
}

function removeErrorEscListener() {
  document.removeEventListener('keydown', onCloseErrorEscKeydown);
}

function removeBodyErrorClick() {
  document.removeEventListener('click', onBodyCloseErrorClick);
}

function removeBodySuccessClick() {
  document.removeEventListener('click', onBodyCloseSuccessClick);
}

closeSuccessButton.addEventListener('click', onCloseSuccessButtonClick);

closeErrorButton.addEventListener('click', onCloseErrorButtonClick);

export { showErrorModal, showSuccessModal };
