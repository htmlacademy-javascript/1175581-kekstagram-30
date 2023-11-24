import { onEditModalEscKeydown } from './form';
const successTemplate = document.querySelector('#success').content.querySelector('section');
const errorTemplate = document.querySelector('#error').content.querySelector('section');

const successModalElement = successTemplate.cloneNode(true);
const errorModalElement = errorTemplate.cloneNode(true);

const closeErrorButton = errorModalElement.querySelector('.error__button');
const closeSuccessButton = successModalElement.querySelector('.success__button');

const removePopupEscListener = (cb) => {
  document.removeEventListener('keydown', cb);
};

const removeBodyPopupClick = (cb) => {
  document.removeEventListener('click', cb);
};

const removeFormEscClick = (cb) => {
  document.removeEventListener('click', cb);
};

const closeFormPopup = (element) => {
  element.remove();
  if(element.classList.contains('success')) {
    removePopupEscListener(onCloseSuccessEscKeydown);
    removeFormEscClick(onEditModalEscKeydown);
  }
  else if(element.classList.contains('error')) {
    removePopupEscListener(onCloseErrorEscKeydown);
    document.addEventListener('keydown', onEditModalEscKeydown);
  }
  removeBodyPopupClick(onBodyClosePopupClick);
};

const onPopupButtonClick = (evt) => {
  if (evt.target.classList.contains('success__button')) {
    closeFormPopup(evt.target.closest('section'));
  }
  else if (evt.target.classList.contains('error__button')) {
    closeFormPopup(evt.target.closest('section'));
  }
};


function onCloseSuccessEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFormPopup(successModalElement);
  }
}

function onCloseErrorEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFormPopup(errorModalElement);
  }
}

function onBodyClosePopupClick(evt) {
  if (evt.target.classList.contains('error')) {
    closeFormPopup(evt.target);
  }
  else if (evt.target.classList.contains('success')) {
    closeFormPopup(evt.target);
  }
}

const showFormPopap = (element, message) => {
  document.addEventListener('click', onBodyClosePopupClick);
  if(element.classList.contains('success')){
    document.addEventListener('keydown', onCloseSuccessEscKeydown);
  }
  else if (element.classList.contains('error')) {
    document.addEventListener('keydown', onCloseErrorEscKeydown);
  }
  document.removeEventListener('keydown', onEditModalEscKeydown);
  element.querySelector('h2').textContent = message;
  document.body.appendChild(element);
};

closeSuccessButton.addEventListener('click', onPopupButtonClick);

closeErrorButton.addEventListener('click', onPopupButtonClick);

export { showFormPopap, successModalElement, errorModalElement };
