import { renderModal } from './modal/modal-photo.js';
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const picturesListFragment = document.createDocumentFragment();

const removeCards = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const onModalRender = (evt, postArray) => {
  renderModal(evt, postArray);
};

const renderPhotoPosts = (postArray) => {
  postArray.forEach(({ id, url, description, likes, comments }) => {
    removeCards();
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.dataset.id = id;
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(photoElement);
  });
  picturesList.appendChild(picturesListFragment);
  picturesList.addEventListener('click', (evt) => onModalRender(evt, postArray));

};

export { renderPhotoPosts };
