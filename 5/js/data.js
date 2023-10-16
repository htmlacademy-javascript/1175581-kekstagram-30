// Модуль с данными для фотографий

import { getRandomArrayElement, getRandomInteger } from './util';

const MAX_PHOTO_POSTS = 25;

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

//Функция для создания обьекта с описанием фотографии
const createPhotoPost = () => {
  const commentsCount = getRandomInteger(0, 30);
  const commentsArray = Array.from({ length: commentsCount }, createComment);
  const photoID = createId();
  return ({
    id: photoID,
    url: `photos/${photoID}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: commentsArray
  });
};
//Функция дляь создания массива комментариев
const createComment = () => {
  const commentId = createCommentId();
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};
//Функция для получения Id фото
const generateId = () => {
  let id = 0;
  return function () {
    while (id < MAX_PHOTO_POSTS) {
      id += 1;
      return id;
    }
  };
};
//Фунция для получения Id комментариев
const generateCommentId = () => {
  let id = 0;
  return function () {
    id += 1;
    return id;
  };
};

const createCommentId = generateCommentId();

const createId = generateId();

const createPhotoPostArray = () => Array.from({ length: MAX_PHOTO_POSTS }, createPhotoPost);

export { createPhotoPostArray };
