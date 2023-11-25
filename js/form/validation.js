import { COMMENT_IN_FORM_LENGTH, HASHTAGS_MAX_COUNT, HASHTAG_REG, HashtagErrors, CommentErrors } from './../constants.js';

const formElement = document.querySelector('.img-upload__form');
const hashInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const hashtagRegExp = HASHTAG_REG;

const validateComment = (value) =>
  value.length <= COMMENT_IN_FORM_LENGTH;

const getHashtags = (hashtagString) => {
  const hashtags = [];
  let hashtagArray = hashtagString.trim().split(' ');
  hashtagArray = hashtagArray.filter((hashtag) => Boolean(hashtag) === true);
  hashtagArray.forEach((hashtag) => hashtags.push(hashtag.trim()));
  return hashtags;
};

const isHashtagsCount = (hashtagString) => {
  const hashtags = getHashtags(hashtagString);
  return hashtags.length <= HASHTAGS_MAX_COUNT;
};

const isHashtagsUnique = (hashtagString) => {
  const hashtags = getHashtags(hashtagString.toLowerCase());
  const arrayWithoutLastIndex = hashtags.slice(0, -1);
  const hashtagArrayLastIndex = hashtags[hashtags.length - 1];
  return !arrayWithoutLastIndex.includes(hashtagArrayLastIndex);
};

const isHashtagsCorrect = (hashtagString) => {
  if (hashtagString === '') {
    return true;
  }
  const hashtags = getHashtags(hashtagString);
  const currentHashTag = hashtags[hashtags.length - 1];
  return hashtagRegExp.test(currentHashTag);
};

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const resetData = () => {
  pristine.reset();
  hashInputElement.value = '';
  commentInputElement.value = '';
};

pristine.addValidator(
  commentInputElement,
  validateComment,
  CommentErrors.COUNT,
  1,
  true);

pristine.addValidator(
  hashInputElement,
  isHashtagsCount,
  HashtagErrors.COUNT,
  3,
  true);

pristine.addValidator(
  hashInputElement,
  isHashtagsUnique,
  HashtagErrors.UNIQUE,
  2,
  true);

pristine.addValidator(
  hashInputElement,
  isHashtagsCorrect,
  HashtagErrors.CORRECT,
  1,
  true);

const isValid = () => pristine.validate();

export { resetData, isValid };
