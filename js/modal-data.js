const commentsBlock = document.querySelector('.social__comments');
const comment = document.querySelector('#comment').content;
const commentTemplate = comment.querySelector('li');
const commentsFragment = document.createDocumentFragment();

const createComment = (showComment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentElementImg = commentElement.querySelector('.social__picture');
  commentElementImg.src = showComment.avatar;
  commentElementImg.alt = showComment.name;
  commentElement.querySelector('.social__text').textContent = showComment.message;
  return commentElement;
};

const modal = document.querySelector('.big-picture');
const modalImg = modal.querySelector('.big-picture__img').querySelector('img');
const modalShownCommentsCount = modal.querySelector('.social__comment-shown-count');
const modalLikesCount = modal.querySelector('.likes-count');
const modalDescription = modal.querySelector('.social__caption');
const modalAllComments = modal.querySelector('.social__comment-total-count');
let totalCommentsCount = 0;

const renderData = (photoPost) => {
  modalImg.src = photoPost.url;
  modalShownCommentsCount.textContent = photoPost.comments.length;
  modalLikesCount.textContent = photoPost.likes;
  totalCommentsCount = photoPost.comments.length;
  modalAllComments.textContent = totalCommentsCount;
  modalDescription.textContent = photoPost.description;
};

export {createComment, renderData, commentsBlock, commentsFragment,
  modal, modalShownCommentsCount, totalCommentsCount};
