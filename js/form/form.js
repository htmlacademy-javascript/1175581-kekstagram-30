import { isValid, resetData } from './validation.js';
import { DEFOULT_SCALE } from '../constants.js';
import { resetToDefault } from './scale.js';
import { getFilterPreview } from './slider.js';
const fileNameInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const closeEditModalButton = document.querySelector('.img-upload__cancel');
const formElement = document.querySelector('.img-upload__form');
const formPhotoElement = formElement.querySelector('.img-upload__preview img');
const previewMiniElements = document.querySelectorAll('.effects__preview');


const toDefaultEffect = () => {
  formPhotoElement.style.filter = 'none';
};
const renderModalPhoto = () => {
  const fileImage = fileNameInputElement.files[0];
  formPhotoElement.src = URL.createObjectURL(fileImage);
  formPhotoElement.style.transform = `scale(${DEFOULT_SCALE.VALUE})`;
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
    getFilterPreview();
  }
};

const onFileInputChange = () => {
  showEditModal();
  renderModalPhoto();
  renderMiniPreviews();
  resetToDefault();
  toDefaultEffect();
};

const hideEditModal = () => {
  editModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeEditModal = () => {
  hideEditModal();
  removeEscListener();
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

function removeEscListener() {
  document.removeEventListener('keydown', onEditModalEscKeydown);
}

fileNameInputElement.addEventListener('change', () => onFileInputChange());
formElement.addEventListener('submit', (evt) => {
  if (isValid()) {
    //форма валидна
  }
  else {
    evt.preventDefault();
  }
});
