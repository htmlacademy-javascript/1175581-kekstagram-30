import { RANDOM_PHOTO_SIZE } from './constants';
const filtersForm = document.querySelector('.img-filters__form');
const filtersButtons = document.querySelectorAll('.img-filters__button');


const getFiltersBlock = () => {
  const filtersBlockElement = document.querySelector('.img-filters');
  filtersBlockElement.style.opacity = 1;
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

const removeAllActive = () => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const setDefaultClick = (cb, photos) => {
  filtersForm.addEventListener('click', (evt) => {
    if(evt.target.id === 'filter-default') {
      removeAllActive();
      evt.target.classList.add('img-filters__button--active');
      cb(photos);
    }
  });

};

const setRandomClick = (cb, photos) => {
  filtersForm.addEventListener('click', (evt) => {
    if (evt.target.id === 'filter-random') {
      removeAllActive();
      evt.target.classList.add('img-filters__button--active');
      const randomPhotos = getRandomPhotos(photos);
      cb(randomPhotos);
    }
  });

};

const setDiscussedClick = (cb, photos) => {
  filtersForm.addEventListener('click', (evt) => {
    if (evt.target.id === 'filter-discussed') {
      removeAllActive();
      evt.target.classList.add('img-filters__button--active');
      const photosDiscussed = photos.slice()
        .sort(compareCommentsLength);
      cb(photosDiscussed);
    }
  });
};

export { getFiltersBlock, setDefaultClick, setRandomClick, setDiscussedClick };
