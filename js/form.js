// import { validateForm, resetPristine} from './form-validation.js';
import { COMMENT_IN_FORM_LENGTH } from './constants.js';
const fileNameInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const closeEditModalButton = document.querySelector('.img-upload__cancel');
const hashInputElement = document.querySelector('.text__hashtags');
const commentInputElement = document.querySelector('.text__description');

const resetInputs = () => {
  hashInputElement.value = '';
  commentInputElement.value = '';
};

const resetPristine = () => {
  pristine.reset();
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
};

const hideEditModal = () => {
  editModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeEditModal = () => {
  hideEditModal();
  removeEscListener();
  fileNameInputElement.value = '';
  resetInputs();
  resetPristine();
};
const onCloseEditModalClick = () => {
  closeEditModal();
};

closeEditModalButton.addEventListener('click', () => onCloseEditModalClick());

function onEditModalEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeEditModal();
  }
}

function removeEscListener() {
  document.removeEventListener('keydown', onEditModalEscKeydown);
}

const validateComment = (value) =>
  value.length <= COMMENT_IN_FORM_LENGTH;

const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;

const validateHashtag = (value) =>
  hashtagReg.test(value);

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  // errorClass: 'form__item--invalid',
  // successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  // errorTextTag: 'span',
  errorTextClass: 'img-upload__field-wrapper--error'
});

pristine.addValidator(form.querySelector('.text__description'), validateComment, 'Не более 140 символов');
pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag, 'Некорректный хэштэг');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { onFileInputChange, fileNameInputElement };
