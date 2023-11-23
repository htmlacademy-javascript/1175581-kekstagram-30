const errorTemplate = document.querySelector('#data-error').content.querySelector('section');
const errorElement = errorTemplate.cloneNode('true');
const errorMessageElement = errorElement.querySelector('h2');

const hideError = () => {
  errorElement.remove();
};

const closeError = () => {
  setTimeout(hideError, 5000);
};

const showError = (message) => {
  document.body.appendChild(errorElement);
  errorMessageElement.textContent = message;
  closeError();
};

export { showError };
