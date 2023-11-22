const COMMENTS_TO_SHOW = 5;

const COMMENT_IN_FORM_LENGTH = 140;

const HASHTAGS_MAX_COUNT = 5;

const HashtagErrors = {
  CORRECT: 'введён невалидный хэш-тег',
  UNIQUE: 'хэш-теги повторяются',
  COUNT: 'превышено количество хэш-тегов',
};

const CommentErrors = {
  COUNT: 'длина комментария больше 140 символов',
};

const ScaleStep = {
  PERCENTS: 25,
  VALUE: 0.25,
};

const MaxScale = {
  PERCENTS: 100,
  VALUE: 1,
};

const MinScale = {
  PERCENTS: 25,
  VALUE: 0.25,
};

const DefaultScale = {
  PERCENTS: 100,
  VALUE: 1,
};

const FilterEffects = {
  NONE: 'None',
  CHROME: 'Chrome',
  SEPIA: 'Sepia',
  MARVIN: 'Marvin',
  PHOBOS: 'Phobos',
  HEAT: 'Heat'
};

const Filters = {
  None: {
    EFFECT: 'none',
    EFFECT_VALUE: 0,
    MIN: 0,
    MAX: 0,
    STEP: 0,
    UNIT: '',
  },
  Chrome: {
    EFFECT: 'grayscale',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    UNIT: '',
  },
  Sepia: {
    EFFECT: 'sepia',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    UNIT: '',
  },
  Marvin: {
    EFFECT: 'invert',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 100,
    STEP: 1,
    UNIT: '%',
  },
  Phobos: {
    EFFECT: 'blur',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    UNIT: 'px',
  },
  Heat: {
    EFFECT: 'brightness',
    EFFECT_VALUE: 1,
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    UNIT: '',
  },
};

const SubmitButtonValues = {
  BLOCK: 'Публикуем..',
  UNBLOCK: 'Опубликовать',
};

const ApiLinks = {
  GET_LINK: 'https://30.javascript.pages.academy/kekstagram/data',
  SEND_LINK: 'https://30.javascript.pages.academy/kekstagram',
};

const ErrorMessages = {
  GET_ERROR: 'Данные с сервера не загрузились',
  SEND_ERROR: 'Не удалось загрузить данные',
};

const RANDOM_PHOTO_SIZE = 10;

const RENDER_DELAY = 500;

export {
  COMMENTS_TO_SHOW,
  COMMENT_IN_FORM_LENGTH,
  HASHTAGS_MAX_COUNT,
  HashtagErrors,
  CommentErrors,
  ScaleStep,
  MaxScale,
  MinScale,
  DefaultScale,
  Filters,
  FilterEffects,
  SubmitButtonValues,
  ApiLinks,
  ErrorMessages,
  RANDOM_PHOTO_SIZE,
  RENDER_DELAY,
};

