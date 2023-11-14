import { renderPhotoPosts } from './thumbnails.js';
import {closeEditModal, setUserFormSubmit} from './form/form.js';
import { getData } from './api.js';
import { showError } from './errors.js';
getData((photos) => renderPhotoPosts(photos), showError);

setUserFormSubmit(closeEditModal);
