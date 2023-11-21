import { renderPhotoPosts } from './thumbnails.js';
import { setUserFormSubmit} from './form/form.js';
import { getData } from './api.js';
import { showError } from './errors.js';
import { getFiltersBlock } from './filters.js';
getData((photos) => renderPhotoPosts(photos), getFiltersBlock, showError);

setUserFormSubmit();
