import './modal-photo.js';
//находим dom елемент блока куда будем добавлять фотографии
const picturesList = document.querySelector('.pictures');

//находим элемент шаблона для добавления фото
const picture = document.querySelector('#picture').content;
const pictureTemplate = picture.querySelector('a');

//создаем documentFragment
const picturesListFragment = document.createDocumentFragment();

const removeCards = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  })
};

const renderPhotoPosts = (postArray) => {
  postArray.forEach(({ id , url, description, likes, comments }) => {
    removeCards();
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.dataset.id = id;
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    // photoElement.comments = comments;
    // photoElement.description = description;
    // photoElement.url = url;
    // photoElement.likes = likes;
    picturesListFragment.appendChild(photoElement);
  });

  picturesList.appendChild(picturesListFragment);
};

export {renderPhotoPosts};
