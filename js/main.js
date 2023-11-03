//Точка входа
import { createPhotoPostArray } from './data.js';
import { MAX_PHOTO_POSTS } from './constants.js';
import { renderPhotoPosts } from './thumbnails.js';

renderPhotoPosts (createPhotoPostArray(MAX_PHOTO_POSTS));

