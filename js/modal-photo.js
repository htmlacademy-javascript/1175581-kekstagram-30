import { photoPostArray } from './data.js';
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
const commentsCounter = modal.querySelector('.social__comment-count');
const commentsLoaderBlock = modal.querySelector('.comments-loader');

//открытие модального окна при клике на миниатюру и рендеринг комментариев
picturesList.addEventListener('click', (evt) => {
  modal.classList.remove('hidden');
  commentsCounter.classList.add('hidden');
  commentsLoaderBlock.classList.add('hidden');
  document.body.classList.add('modal-open');
  const photo = evt.target.parentElement;
  photoPostArray.forEach((photoPost) => {
    if (photo.dataset.id == photoPost.id) {
      removeComments();
      modalImg.src = photoPost.url;
      modalShownCommentsCount.textContent = photoPost.comments.length;
      modalLikesCount.textContent = photoPost.likes;
      modalAllComments.textContent = photoPost.comments.length;
      modalDescription.textContent = photoPost.description;
      renderComments(photoPost.comments);
    }
  });
  document.addEventListener('keydown', onModalEscKeydown);
});

//закрытие модального окна
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
});

//функция для обработчика закрытия клавишей ESC
const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
};

//функция очистки комментариев
const removeComments = () => {
  document.querySelectorAll('.social__comment').forEach((comment) => {
    comment.remove();
  });
};

//функция для рендеринга комментариев
const renderComments = (commentsArray) => {
  const commentsBlock = document.querySelector('.social__comments');
  const comment = document.querySelector('#comment').content;
  const commentTemplate = comment.querySelector('li');
  const commentsFragment = document.createDocumentFragment();
  commentsArray.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentElementImg = commentElement.querySelector('.social__picture');
    commentElementImg.src = comment.avatar;
    commentElementImg.alt = comment.name
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentElement);
    commentsBlock.appendChild(commentsFragment);
  });
}
