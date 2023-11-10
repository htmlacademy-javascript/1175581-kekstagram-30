const COMMENTS_TO_SHOW = 5;
const MAX_PHOTO_POSTS = 25;
const COMMENT_IN_FORM_LENGTH = 140;
const HASHTAGS_MAX_COUNT = 5;
const HASHTAGS_ERRORS = {
  CORRECT: 'некорректный хэштэг',
  UNIQUE: 'повторяешься',
  COUNT: 'их больше пяти',
};
const COMMENT_ERRORS = {
  COUNT: 'Не более 140 символов',
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
const FILTERS = {
  original: {
    effect: 'none',
    effectValue: 0,
    min: 0,
    max: 0,
    step: 0,
  },
  chrome: {
    effect: 'grayscale',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    effect: 'sepia',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    effect: 'invert',
    effectValue: 1,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  fobos: {
    effect: 'blur',
    effectValue: 1,
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  znoy: {
    effect: 'brightness',
    effectValue: 1,
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const FILTER_INDEX = {
  0: 'original',
  1: 'chrome',
  2: 'sepia',
  3: 'marvin',
  4: 'fobos',
  5: 'znoy',
};
const DESCRIPTIONS = [
  'Будь таким человеком, с которым мечтаешь встретиться',
  'Будьте героями своих собственных историй',
  'В жизни я лучше, чем в инстаграмме',
  'В любой ситуации всегда улыбайтесь',
  'Думать следует до и после съемки, ни никотгда во время нее',
  'В своей жизни ты должен играть только главную роль',
  'Ваша скорость не имеет значения, пока вы продолжаете двигаться вперед',
  'На всяукий случай, а то вдруг вы забыли как я выгляжу',
  'Время драгоценно, поэтому всегда тратьте его мудро'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Jacob',
  'Oliver',
  'Riley',
  'Jack',
  'Alfie',
  'Harry',
  'Charlie',
  'Dylan',
  'William',
  'Mason',
  'Amelia',
  'Ava',
  'Mia',
  'Lily',
  'Olivia',
  'Ruby',
  'Seren',
  'Evie',
  'Ella',
  'Emily',
  'Igor',
  'Andrew',
  'Pavel',
  'Nataly',
  'Alexandra'
];

export {
  MAX_PHOTO_POSTS,
  DESCRIPTIONS,
  MESSAGES,
  NAMES,
  COMMENTS_TO_SHOW,
  COMMENT_IN_FORM_LENGTH,
  HASHTAGS_MAX_COUNT,
  HASHTAGS_ERRORS,
  SCALE_STEP,
  MAX_SCALE,
  MIN_SCALE,
  DEFOULT_SCALE,
  COMMENT_ERRORS,
  FILTERS,
  FILTER_INDEX
};
