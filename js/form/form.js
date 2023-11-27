import { isValid, resetData } from './validation.js';
import { DefaultScale, SubmitButtonValues, FILE_TYPES } from '../constants.js';
import { resetToDefault } from './scale.js';
import { resetFilters, renderFilters } from './slider.js';
import { sendData } from '../api.js';
import { showFormPopap, successModalElement, errorModalElement } from './form-popups.js';

const fileNameInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const closeEditModalButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const formElement = document.querySelector('.img-upload__form');
const formPhotoElement = formElement.querySelector('.img-upload__preview img');
const previewMiniElements = document.querySelectorAll('.effects__preview');

const isValidType = (file) => {
  const filename = file.name.toLowerCase();
  return FILE_TYPES.some((format) => filename.endsWith(format));
};

const renderModalPhoto = () => {
  const fileImage = fileNameInputElement.files[0];
  if (fileImage && isValidType(fileImage)) {
    formPhotoElement.src = URL.createObjectURL(fileImage);
    formPhotoElement.style.transform = `scale(${DefaultScale.VALUE})`;
  }
};

const renderMiniPreviews = () => {
  const fileImage = fileNameInputElement.files[0];
  const url = URL.createObjectURL(fileImage);
  previewMiniElements.forEach((previewMini) => {
    previewMini.style.backgroundImage = `url(${url})`;
  });
};

const showEditModal = () => {
  if (fileNameInputElement.files.length !== 0) {
    editModalElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEditModalEscKeydown);
  }
};

const onFileInputChange = () => {
  showEditModal();
  renderModalPhoto();
  renderMiniPreviews();
  resetToDefault();
  resetFilters();
  renderFilters();
};

const hideEditModal = () => {
  editModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeEditModal = () => {
  hideEditModal();
  removeEditModalEscListener();
  fileNameInputElement.value = '';
  resetData();
};

const onCloseEditModalClick = () => {
  closeEditModal();
};

closeEditModalButton.addEventListener('click', onCloseEditModalClick);

function onEditModalEscKeydown(evt) {
  if (!evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeEditModal();
    }
  }
}

function removeEditModalEscListener() {
  document.removeEventListener('keydown', onEditModalEscKeydown);
}

fileNameInputElement.addEventListener('change', () => onFileInputChange());

const isBlockSubmitButton = (param = false) => {
  submitButton.disabled = param;
  if (param) {
    submitButton.textContent = SubmitButtonValues.BLOCK;
  } else {
    submitButton.textContent = SubmitButtonValues.UNBLOCK;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (isValid()) {
    isBlockSubmitButton(true);
    sendData(
      () => {
        closeEditModal();
        showFormPopap(successModalElement, 'Форма отправлена успешно');
      },
      () => {
        showFormPopap(errorModalElement, 'Данные не отправлены :(');
      },
      new FormData(evt.target),
      () => {
        isBlockSubmitButton(false);
      }
    );
  }
};

const setUserFormSubmit = () => {
  formElement.addEventListener('submit', onFormSubmit);
};

export { closeEditModal, onEditModalEscKeydown, setUserFormSubmit };
