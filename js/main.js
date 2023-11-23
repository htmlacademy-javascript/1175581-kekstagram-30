import { renderPhotoPosts } from './thumbnails.js';
import { setUserFormSubmit} from './form/form.js';
import { getData } from './api.js';
import { showError } from './errors.js';
import { getFiltersBlock, setFilters } from './filters.js';

setUserFormSubmit();

getData((photos) => {
  renderPhotoPosts(photos);
  setFilters((data) => renderPhotoPosts(data), photos);
}, getFiltersBlock, showError);

