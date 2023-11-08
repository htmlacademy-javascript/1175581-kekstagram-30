import { isValid, resetData } from './validation.js';
const fileNameInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const closeEditModalButton = document.querySelector('.img-upload__cancel');
const formElement = document.querySelector('.img-upload__form');

const showEditModal = () => {
  if (fileNameInputElement.files.length !== 0) {
    editModalElement.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onEditModalEscKeydown);
  }
};

const onFileInputChange = () => {
  showEditModal();
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

closeEditModalButton.addEventListener('click', () => onCloseEditModalClick());

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
