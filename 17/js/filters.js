import { RANDOM_PHOTO_SIZE } from './constants';
import { debounce } from './util.js';
import { RENDER_DELAY } from './constants.js';
const filtersFormElement = document.querySelector('.img-filters__form');
const filtersButtons = filtersFormElement.querySelectorAll('.img-filters__button');


const showFiltersBlock = () => {
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

const onActivePut = (element) => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  element.classList.add('img-filters__button--active');
};

filtersFormElement.addEventListener('click', (evt) => onActivePut(evt.target));

const onFilterRender = (evt, cb, photos) => {

  if (evt.target.id === 'filter-default') {
    cb(photos);
  }
  else if (evt.target.id === 'filter-random') {
    const randomPhotos = getRandomPhotos(photos);
    cb(randomPhotos);
  }
  else if (evt.target.id === 'filter-discussed') {
    const photosDiscussed = photos.slice()
      .sort(compareCommentsLength);
    cb(photosDiscussed);
  }
};

const setFilters = (cb, photos) => {

  filtersFormElement.addEventListener('click', debounce((evt) => onFilterRender(evt, cb, photos), RENDER_DELAY));
};

export { showFiltersBlock, setFilters };
