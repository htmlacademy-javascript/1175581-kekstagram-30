import { ScaleStep, MaxScale, MinScale, DefaultScale } from '../constants.js';
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewElement = document.querySelector('.img-upload__preview img');
let currentScale = DefaultScale.VALUE;

const scaleSmaller = () => {
  if (currentScale > MinScale.VALUE) {
    const smallerScale = currentScale - ScaleStep.VALUE;
    previewElement.style.transform = `scale(${smallerScale})`;
    currentScale = smallerScale;
  }
  scaleValueElement.value = `${currentScale * 100}%`;
};

const scaleBigger = () => {
  if (currentScale < MaxScale.VALUE) {
    const biggerScale = currentScale + ScaleStep.VALUE;
    previewElement.style.transform = `scale(${biggerScale})`;
    currentScale = biggerScale;
  }
  scaleValueElement.value = `${currentScale * 100}%`;

};

const onScaleSmallerClick = () => {
  scaleSmaller();
};

const onScaleBiggerClick = () => {
  scaleBigger();
};

const resetToDefault = () => {
  previewElement.style.transform = `scale(${DefaultScale.VALUE})`;
  currentScale = DefaultScale.VALUE;

};

scaleSmallerButton.addEventListener('click', onScaleSmallerClick);

scaleBiggerButton.addEventListener('click', onScaleBiggerClick);

export {resetToDefault};
