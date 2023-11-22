/* eslint-disable no-unused-expressions */
import { isValid, resetData } from './validation.js';
import { DefaultScale, SubmitButtonValues} from '../constants.js';
import { resetToDefault } from './scale.js';
import { resetFilters, renderFilters } from './slider.js';
import { sendData } from '../api.js';
import { showErrorModal, showSuccessModal } from './form-popups.js';
const fileNameInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const closeEditModalButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const formElement = document.querySelector('.img-upload__form');
const formPhotoElement = formElement.querySelector('.img-upload__preview img');
const previewMiniElements = document.querySelectorAll('.effects__preview');

const renderModalPhoto = () => {
  const fileImage = fileNameInputElement.files[0];
  formPhotoElement.src = URL.createObjectURL(fileImage);
  formPhotoElement.style.transform = `scale(${DefaultScale.VALUE})`;
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

const isblockSubmitButton = (param = false) => {
  submitButton.disabled = param;
  param ? submitButton.textContent = SubmitButtonValues.BLOCK : submitButton.textContent = SubmitButtonValues.UNBLOCK;
};


const setUserFormSubmit = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValid()) {
      isblockSubmitButton(true);
      sendData(
        () => {
          closeEditModal();
          showSuccessModal('Форма отправлена успешно');
        },
        () => {
          showErrorModal('Данные не отправлены :(');
        },
        new FormData(evt.target),
        () => {
          isblockSubmitButton(false);
        }
      );
    }
  });
};

export { closeEditModal, onEditModalEscKeydown, setUserFormSubmit };
