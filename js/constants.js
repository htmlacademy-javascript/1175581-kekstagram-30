const COMMENTS_TO_SHOW = 5;

const COMMENT_IN_FORM_LENGTH = 140;
const HASHTAGS_MAX_COUNT = 5;

const HASHTAGS_ERRORS = {
  CORRECT: 'введён невалидный хэш-тег',
  UNIQUE: 'хэш-теги повторяются',
  COUNT: 'превышено количество хэш-тегов',
};
const COMMENT_ERRORS = {
  COUNT: 'длина комментария больше 140 символов',
};
const SCALE_STEP = {
  PERCENTS: 25,
  VALUE: 0.25,
};
const MAX_SCALE = {
  PERCENTS: 100,
  VALUE: 1,
};
const MIN_SCALE = {
  PERCENTS: 25,
  VALUE: 0.25,
};
const DEFOULT_SCALE = {
  PERCENTS: 100,
  VALUE: 1,
};

const FilterEffects = {
  none: 'None',
  chrome: 'Chrome',
  sepia: 'Sepia',
  marvin: 'Marvin',
  phobos: 'Phobos',
  heat: 'Heat'
};

const Filters = {
  None: {
    effect: 'none',
    effectValue: 0,
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  Chrome: {
    effect: 'grayscale',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  Sepia: {
    effect: 'sepia',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  Marvin: {
    effect: 'invert',
    effectValue: 1,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  Phobos: {
    effect: 'blur',
    effectValue: 1,
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  Heat: {
    effect: 'brightness',
    effectValue: 1,
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};



export {
  COMMENTS_TO_SHOW,
  COMMENT_IN_FORM_LENGTH,
  HASHTAGS_MAX_COUNT,
  HASHTAGS_ERRORS,
  SCALE_STEP,
  MAX_SCALE,
  MIN_SCALE,
  DEFOULT_SCALE,
  COMMENT_ERRORS,
  Filters,
  FilterEffects
};
