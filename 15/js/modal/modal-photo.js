import { hideLoadButton, showLoadButton, showModal, hideModal, removeComments } from './modal-helpers.js';
import { createComment, commentsBlockElement, commentsFragment, renderData, modalElement, modalShownCommentsElement, totalCommentsCount } from './modal-data.js';
import { COMMENTS_TO_SHOW } from '../constants.js';
const closeModalButton = modalElement.querySelector('.big-picture__cancel');
const loadCommentsButtton = modalElement.querySelector('.social__comments-loader');

let showCommentsCount = 0;
let showComments = [];

const openModal = () => {
  showModal(modalElement);
  document.addEventListener('keydown', onModalEscKeydown);
};

const resetCommentsCount = () => {
  showCommentsCount = 0;
  showComments.length = 0;
};

const closeModal = () => {
  hideModal(modalElement);
  removeModalEscListener();
  resetCommentsCount();
};

const renderComments = () => {
  showComments.splice(0, COMMENTS_TO_SHOW).forEach((showComment) => {
    createComment(showComment);
    commentsFragment.appendChild(createComment(showComment));
    showCommentsCount++;
  });
  modalShownCommentsElement.textContent = showCommentsCount;
  commentsBlockElement.appendChild(commentsFragment);
  if (totalCommentsCount <= showCommentsCount) {
    hideLoadButton(loadCommentsButtton);
  } else {
    showLoadButton(loadCommentsButtton);
  }
};

const renderModal = (evt, postArray) => {
  const photo = evt.target.closest('.picture');
  postArray.forEach((photoPost) => {
    if (photo !== null && parseInt(photo.dataset.id, 10) === photoPost.id) {
      openModal();
      removeComments();
      renderData(photoPost);
      showComments = structuredClone(photoPost.comments);
      renderComments();
    }
  });
};

const onCloseModalClick = () => {
  closeModal();
};

const onLoadButtonClick = () => {
  renderComments(showComments);
};

function onModalEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

function removeModalEscListener() {
  document.removeEventListener('keydown', onModalEscKeydown);
}

loadCommentsButtton.addEventListener('click', () => onLoadButtonClick());

closeModalButton.addEventListener('click', () => onCloseModalClick());

export { renderModal };
