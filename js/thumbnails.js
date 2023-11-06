import { renderModal } from './modal-photo';
//находим dom елемент блока куда будем добавлять фотографии
const picturesList = document.querySelector('.pictures');

//находим элемент шаблона для добавления фото
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');

//создаем documentFragment
const picturesListFragment = document.createDocumentFragment();

const removeCards = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
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
  picturesList.addEventListener('click', (evt) => renderModal(evt, postArray));

};

export { renderPhotoPosts };
