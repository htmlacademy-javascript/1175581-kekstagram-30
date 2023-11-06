const commentsBlockElement = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('li');
const commentsFragment = document.createDocumentFragment();

const modalElement = document.querySelector('.big-picture');
const modalImgElement = modalElement.querySelector('.big-picture__img').querySelector('img');
const modalShownCommentsElement = modalElement.querySelector('.social__comment-shown-count');
let totalCommentsCount = 0;

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

export {createComment, renderData, commentsBlockElement, commentsFragment,
  modalElement, modalShownCommentsElement, totalCommentsCount};
