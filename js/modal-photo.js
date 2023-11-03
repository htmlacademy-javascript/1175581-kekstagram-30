import { hideLoadButton, showLoadButton, showModal, hideModal, removeComments } from './modal-helpers.js';
import {createComment, commentsBlock, commentsFragment, renderData, modal, modalShownCommentsCount, totalCommentsCount} from './modal-data.js';
import {COMMENTS_TO_SHOW} from './constants.js';
const closeModalButton = modal.querySelector('.big-picture__cancel');
const loadCommentsButtton = modal.querySelector('.social__comments-loader');

let showCommentsCount = 0;
let showComments = [];

const openModal = () => {
  showModal(modal);
  document.addEventListener('keydown', onModalEscKeydown);
};

const resetCommentsCount = () => {
  showCommentsCount = 0;
  showComments.length = 0;
};

const closeModal = () => {
  hideModal(modal);
  removeEscListener();
  resetCommentsCount();
};

const renderComments = () => {
  showComments.splice(0, COMMENTS_TO_SHOW).forEach((showComment) => {
    createComment(showComment);
    commentsFragment.appendChild(createComment(showComment));
    showCommentsCount++;
  });
  modalShownCommentsCount.textContent = showCommentsCount;
  commentsBlock.appendChild(commentsFragment);
  if (totalCommentsCount <= showCommentsCount) {
    hideLoadButton(loadCommentsButtton);
  } else {
    showLoadButton(loadCommentsButtton);
  }
};

const renderModal = (evt, postArray) => {
  const photo = evt.target.closest('.picture');
  postArray.forEach((photoPost) => {
    if (parseInt(photo.dataset.id, 10) === photoPost.id) {
      openModal();
      removeComments();
      renderData(photoPost);
      showComments = structuredClone(photoPost.comments);
      renderComments();
    }
  });
};

loadCommentsButtton.addEventListener('click', () => renderComments(showComments));

closeModalButton.addEventListener('click', () => closeModal());

function onModalEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

function removeEscListener() {
  document.removeEventListener('keydown', onModalEscKeydown);
}

export { renderModal };
