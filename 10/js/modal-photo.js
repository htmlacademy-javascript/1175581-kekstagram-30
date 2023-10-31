import { photoPostArray } from './data.js';
import {COMMENTS_TO_SHOW} from './constants.js';
const picturesList = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');
const modalImgblock = modal.querySelector('.big-picture__img');
const modalImg = modalImgblock.querySelector('img');
const modalLikesCount = modal.querySelector('.likes-count');
const modalDescription = modal.querySelector('.social__caption');
const modalShownCommentsCount = modal.querySelector('.social__comment-shown-count');
const modalAllComments = modal.querySelector('.social__comment-total-count');
const loadCommentsButtton = modal.querySelector('.social__comments-loader');

//функция очистки комментариев
const removeComments = () => {
  document.querySelectorAll('.social__comment').forEach((comment) => {
    comment.remove();
  });
};
// Функция для ренденрига комментариев
const renderComments = (commentsArray) => {
  let showCommentsCount = 0;
  const commentsBlock = document.querySelector('.social__comments');
  const comment = document.querySelector('#comment').content;
  const commentTemplate = comment.querySelector('li');
  const commentsFragment = document.createDocumentFragment();

  return function () {
    const showCommentsArray = commentsArray.splice(0, COMMENTS_TO_SHOW);
    showCommentsArray.forEach((showComment) => {
      const commentElement = commentTemplate.cloneNode(true);
      const commentElementImg = commentElement.querySelector('.social__picture');
      commentElementImg.src = showComment.avatar;
      commentElementImg.alt = showComment.name;
      commentElement.querySelector('.social__text').textContent = showComment.message;
      commentsFragment.appendChild(commentElement);
      showCommentsCount ++;
    });
    modalShownCommentsCount.textContent = showCommentsCount;
    commentsBlock.appendChild(commentsFragment);
  };
};

//функция для обработчика закрытия клавишей ESC
const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
};
//закрытие модального окна
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
});


//открытие модального окна при клике на миниатюру и рендеринг комментариев
picturesList.addEventListener('click', (evt) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const photo = evt.target.parentElement;
  photoPostArray.forEach((photoPost) => {
    if (parseInt(photo.dataset.id, 10) === photoPost.id) {
      removeComments();
      modalImg.src = photoPost.url;
      modalShownCommentsCount.textContent = photoPost.comments.length;
      modalLikesCount.textContent = photoPost.likes;
      modalAllComments.textContent = photoPost.comments.length;
      modalDescription.textContent = photoPost.description;
      const showCommentsArray = photoPost.comments.slice();
      const render = renderComments(showCommentsArray);
      render();
      loadCommentsButtton.addEventListener('click', () => { render() });
    }
  });
  document.addEventListener('keydown', onModalEscKeydown);
});
