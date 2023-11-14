const errorTemplate = document.querySelector('#data-error').content.querySelector('section');
const errorElement = errorTemplate.cloneNode('true');
document.body.appendChild(errorElement);
const errorMessageElement = errorElement.querySelector('h2');
errorElement.classList.add('hidden');


const hideError = () => {
  errorElement.classList.add('hidden');
};

const closeError = () => {
  setTimeout(hideError, 5000);
};

const showError = (message) => {
  errorElement.classList.remove('hidden');
  errorMessageElement.textContent = message;
  closeError();
};

export { showError };
