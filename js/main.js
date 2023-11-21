import { renderPhotoPosts } from './thumbnails.js';
import { setUserFormSubmit} from './form/form.js';
import { getData } from './api.js';
import { showError } from './errors.js';
import { getFiltersBlock, setDefaultClick, setRandomClick, setDiscussedClick } from './filters.js';
import { debounce } from './util.js';
import { RENDER_DELAY } from './constants.js';

getData((photos) => {
  renderPhotoPosts(photos);
  setDefaultClick(debounce((data) => renderPhotoPosts(data), RENDER_DELAY), photos);
  setRandomClick(debounce((data) => renderPhotoPosts(data), RENDER_DELAY), photos);
  setDiscussedClick(debounce((data) => renderPhotoPosts(data), RENDER_DELAY), photos);
}, getFiltersBlock, showError);

setUserFormSubmit();


