import { hideLoadButton, showLoadButton, showModal, hideModal, removeComments } from './modal-helpers.js';
import { COMMENTS_TO_SHOW } from '../constants.js';
const modalElement = document.querySelector('.big-picture');
const modalImgElement = modalElement.querySelector('.big-picture__img').querySelector('img');
const modalShownCommentsElement = modalElement.querySelector('.social__comment-shown-count');
const commentsBlockElement = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('li');
const commentsFragment = document.createDocumentFragment();
const closeModalButton = modalElement.querySelector('.big-picture__cancel');
const loadCommentsButtton = modalElement.querySelector('.social__comments-loader');
let totalCommentsCount = 0;
let showCommentsCount = 0;
let showComments = [];

const createComment = (showComment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentImgElement = commentElement.querySelector('.social__picture');
  commentImgElement.src = showComment.avatar;
  commentImgElement.alt = showComment.name;
  commentElement.querySelector('.social__text').textContent = showComment.message;
  return commentElement;
};

const renderData = (photoPost) => {
  modalImgElement.src = photoPost.url;
  modalShownCommentsElement.textContent = photoPost.comments.length;
  modalElement.querySelector('.likes-count').textContent = photoPost.likes;
  totalCommentsCount = photoPost.comments.length;
  modalElement.querySelector('.social__comment-total-count').textContent = totalCommentsCount;
  modalElement.querySelector('.social__caption').textContent = photoPost.description;
};


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
      showCommentsCount = 0;
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
