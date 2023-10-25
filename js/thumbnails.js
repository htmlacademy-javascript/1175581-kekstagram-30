import { createPhotoPostArray } from './data.js';
import { MAX_PHOTO_POSTS} from './constants.js';
//находим dom елемент блока куда будем добавлять фотографии
const picturesList = document.querySelector('.pictures');

//находим элемент шаблона для добавления фото
const picture = document.querySelector('#picture').content;
const pictureTemplate = picture.querySelector('a');

//создаем массив с фотографиями при помощи вызова ранее созданнной функции
const photoPostArray = createPhotoPostArray(MAX_PHOTO_POSTS);
//создаем documentFragment
const picturesListFragment = document.createDocumentFragment();

//перебираем массив , создаем клонираваныен элементы по шаблону и заполняем их данными, и добавляем в documentFragment
photoPostArray.forEach(({ url, description, likes, comments }) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(photoElement);
});

//добавляем documentFragment в список фотографий
picturesList.appendChild(picturesListFragment);
