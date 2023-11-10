import { FILTERS, FILTER_INDEX } from '../constants';
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const previewMiniCollection = document.querySelectorAll('.effects__item');
const previewPhotoElement = document.querySelector('.img-upload__preview img');
// effectValueElement.style.display = 'block';
// effectValueElement.style.color = 'black';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const isOriginalEffect = (index) => {
  if(index === 0) {
    sliderElement.classList.add('hidden');
  }
};

const onEffectsClick = (index) => {
  const currentfilter = FILTERS[FILTER_INDEX[index]];
  let effectValue = currentfilter.effectValue;
  sliderElement.noUiSlider.on('update', () => {
    effectValueElement.value = sliderElement.noUiSlider.get();
    effectValue = effectValueElement.value;
    switch (currentfilter.unit) {
      case '%':
        effectValue = `${effectValue}%`;
        break;
      case 'px':
        effectValue = `${effectValue}px`;
        break;
    }
    if (index === 0) {
      previewPhotoElement.style.filter = currentfilter.effect;
      sliderElement.classList.add('hidden');
    }
    else {
      previewPhotoElement.style.filter = `${currentfilter.effect}(${effectValue})`;
      sliderElement.classList.remove('hidden');
    }
  });

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentfilter.min,
      max: currentfilter.max,
    },
    start: 100,
    step: currentfilter.step,
    connect: 'lower',
  });
};

const getFilterPreview = () => {
  previewMiniCollection.forEach((previewMini, index) => {
    isOriginalEffect(index);
    previewMini.addEventListener('click', () => onEffectsClick(index));
  });
};

export { getFilterPreview };


