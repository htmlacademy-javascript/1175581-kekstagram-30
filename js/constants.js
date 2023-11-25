const COMMENTS_TO_SHOW = 5;

const COMMENT_IN_FORM_LENGTH = 140;

const HASHTAGS_MAX_COUNT = 5;

const HASHTAG_REG = /^#[a-zа-яё0-9]{1,19}$/i;

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

const Filters = {
  NONE: {
    EFFECT: 'none',
    EFFECT_VALUE: 0,
    MIN: 0,
    MAX: 0,
    STEP: 0,
    UNIT: '',
  },
  CHROME: {
    EFFECT: 'grayscale',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    UNIT: '',
  },
  SEPIA: {
    EFFECT: 'sepia',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    UNIT: '',
  },
  MARVIN: {
    EFFECT: 'invert',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 100,
    STEP: 1,
    UNIT: '%',
  },
  PHOBOS: {
    EFFECT: 'blur',
    EFFECT_VALUE: 1,
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    UNIT: 'px',
  },
  HEAT: {
    EFFECT: 'brightness',
    EFFECT_VALUE: 1,
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    UNIT: '',
  },
};

const FILE_TYPES = ['jpeg', 'jpg', 'png'];

const SubmitButtonValues = {
  BLOCK: 'Публикуем..',
  UNBLOCK: 'Опубликовать',
};

const ApiLinks = {
  GET_LINK: 'https://30.javascript.pages.academy/kekstagram/data',
  SEND_LINK: 'https://30.javascript.pages.academy/kekstagram/',
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
  HASHTAG_REG,
  HashtagErrors,
  CommentErrors,
  ScaleStep,
  MaxScale,
  MinScale,
  DefaultScale,
  Filters,
  SubmitButtonValues,
  ApiLinks,
  ErrorMessages,
  RANDOM_PHOTO_SIZE,
  RENDER_DELAY,
  FILE_TYPES,
};

