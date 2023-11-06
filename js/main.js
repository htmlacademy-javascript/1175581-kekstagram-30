//Точка входа
import { createPhotoPostArray } from './data.js';
import { MAX_PHOTO_POSTS } from './constants.js';
import { renderPhotoPosts } from './thumbnails.js';
import { onFileInputChange , fileNameInputElement} from './form.js';

renderPhotoPosts(createPhotoPostArray(MAX_PHOTO_POSTS));

fileNameInputElement.addEventListener('change', () => onFileInputChange());
