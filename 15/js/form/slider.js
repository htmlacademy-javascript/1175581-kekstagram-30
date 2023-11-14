import { Filters, FilterEffects } from '../constants';
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const previewMiniList = document.querySelector('.effects__list');
const previewPhotoElement = document.querySelector('.img-upload__preview img');

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

const isNoneEffect = (currentEffect) => currentEffect.effect === 'none';

const resetFilters = () => {
  sliderElement.classList.add('hidden');
  previewPhotoElement.style.filter = 'none';
  effectValueElement.checked = true;
};

const sliderUpdate = ({ effect, unit }) => {
  sliderElement.noUiSlider.on('update', () => {
    effectValueElement.value = sliderElement.noUiSlider.get();
    previewPhotoElement.style.filter = `${effect}(${effectValueElement.value}${unit})`;
  });

};

const sliderUpdateOptions = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: 100,
    step: step,
    connect: 'lower',
  });

};
const showEffect = ({ effect, effectValue, unit }) => {
  effectValueElement.value = sliderElement.noUiSlider.get();
  previewPhotoElement.style.filter = `${effect}(${effectValue}${unit})`;
};

const onEffectChange = (evt) => {
  const currentEffect = Filters[FilterEffects[evt.target.value]];
  if (isNoneEffect(currentEffect)) {
    previewPhotoElement.style.filter = 'none';
    sliderElement.classList.add('hidden');
  }
  else {
    sliderElement.classList.remove('hidden');
    sliderUpdateOptions(currentEffect);
    showEffect(currentEffect);
    sliderUpdate(currentEffect);
  }
};
const renderFilters = () => {
  previewMiniList.addEventListener('change', onEffectChange);
};

export { resetFilters, renderFilters };
