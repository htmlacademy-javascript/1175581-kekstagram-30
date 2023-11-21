import { renderPhotoPosts } from './thumbnails';
import { showError } from './errors.js';
const photosListElement = document.querySelector('.pictures');
const filtersButtons = document.querySelector('.img-filters__form');
const size = 10;

const getFiltersBlock = () => {
  const filtersBlockElement = document.querySelector('.img-filters');
  filtersBlockElement.style.opacity = 1;
};

const getRandomPhotos = (photos) => {
  const ids = [];
  const randomPhotos = [];
  while (ids.length < size) {
    const randomNumber = Math.floor(Math.random() * photos.length);
    if (!ids.find((item) => item === randomNumber)) {
      ids.push(randomNumber);
    }
  }
  ids.forEach((id) => {
    randomPhotos.push(photos[id]);
  });
  return randomPhotos;
};

const getFiltersData = (evt, onSuccess, onError) => {
  fetch('https://30.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Данные с сервера не загрузились');
    })
    .then((photos) => {
      if (evt.target.id === 'filter-random') {
        photosListElement.innerHTML = '';
        const randomPhotos = getRandomPhotos(photos);
        return onSuccess(randomPhotos);
      }
      else if (evt.target.id === 'filter-discussed') {
        photosListElement.innerHTML = '';
        const photosDiscussed = photos.slice();
        console.log(photosDiscussed);
        }
      else {
        photosListElement.innerHTML = '';
        onSuccess(photos);
      }
    })
    .catch(() => onError('Данные с сервера не загрузились'));
};

filtersButtons.addEventListener('click', (evt) => getFiltersData(evt, (photos) => renderPhotoPosts(photos), showError));
export { getFiltersBlock, getRandomPhotos , getFiltersData};
