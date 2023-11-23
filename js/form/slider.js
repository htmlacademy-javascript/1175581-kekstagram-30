import { Filters } from '../constants';
const sliderElement = document.querySelector('.effect-level__slider');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectValueElement = document.querySelector('.effect-level__value');
const previewMiniList = document.querySelector('.effects__list');
const previewPhotoElement = document.querySelector('.img-upload__preview img');
const defaultPrewiewElement = document.querySelector('#effect-none');
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

const isNoneEffect = (currentEffect) => currentEffect.EFFECT === 'none';

const resetFilters = () => {
  sliderElement.classList.add('hidden');
  sliderField.classList.add('hidden');
  previewPhotoElement.style.filter = 'none';
  defaultPrewiewElement.checked = true;
};

const sliderUpdate = ({ EFFECT, UNIT}) => {
  sliderElement.noUiSlider.on('update', () => {
    effectValueElement.value = sliderElement.noUiSlider.get();
    previewPhotoElement.style.filter = `${EFFECT}(${effectValueElement.value}${UNIT})`;
  });

};

const sliderUpdateOptions = ({ MIN, MAX, STEP }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: 100,
    step: STEP,
    connect: 'lower',
  });

};
const showEffect = ({ EFFECT, effectValue, UNIT }) => {
  effectValueElement.value = sliderElement.noUiSlider.get();
  previewPhotoElement.style.filter = `${EFFECT}(${effectValue}${UNIT})`;
};

const onEffectChange = (evt) => {
  const currentEffect = Filters[evt.target.value.toUpperCase()];
  if (isNoneEffect(currentEffect)) {
    previewPhotoElement.style.filter = 'none';
    sliderElement.classList.add('hidden');
    sliderField.classList.add('hidden');
  }
  else {
    sliderElement.classList.remove('hidden');
    sliderField.classList.remove('hidden');
    sliderUpdateOptions(currentEffect);
    showEffect(currentEffect);
    sliderUpdate(currentEffect);
  }
};
const renderFilters = () => {
  previewMiniList.addEventListener('change', onEffectChange);
};

export { resetFilters, renderFilters };
