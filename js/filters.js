import { RANDOM_PHOTO_SIZE } from './constants';
import { debounce } from './util.js';
import { RENDER_DELAY } from './constants.js';
const filtersFormElement = document.querySelector('.img-filters__form');
const filtersButtons = document.querySelectorAll('.img-filters__button');


const getFiltersBlock = () => {
  const filtersBlockElement = document.querySelector('.img-filters');
  filtersBlockElement.classList.remove('img-filters--inactive');
};

const getRandomPhotos = (photos) => {
  const ids = [];
  const randomPhotos = [];
  while (ids.length < RANDOM_PHOTO_SIZE) {
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

const compareCommentsLength = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const putActive = (element) => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  element.classList.add('img-filters__button--active');
};

filtersFormElement.addEventListener('click', (evt) => putActive(evt.target));

const setFilters = (cb, photos) => {
  filtersFormElement.addEventListener('click', debounce((evt) => {
    if (evt.target.id === 'filter-default') {
      // putActive(evt.target);
      cb(photos);
    }
    else if (evt.target.id === 'filter-random') {
      // putActive(evt.target);
      const randomPhotos = getRandomPhotos(photos);
      cb(randomPhotos);
    }
    else if (evt.target.id === 'filter-discussed') {
      // putActive(evt.target);
      const photosDiscussed = photos.slice()
        .sort(compareCommentsLength);
      cb(photosDiscussed);
    }
  }));
};

export { getFiltersBlock, setFilters };
