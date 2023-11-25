import { ApiLinks, ErrorMessages } from './constants';

const getData = (onSuccess, getFiltersBlock, onError) => {
  fetch(ApiLinks.GET_LINK)
    .then((response) => {
      if (response.ok) {
        getFiltersBlock();
        return response.json();
      }
      throw new Error(ErrorMessages.GET_ERROR);
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => onError(ErrorMessages.GET_ERROR));
};

const sendData = (onSuccess, onFail, body, blockButton) => {
  fetch(ApiLinks.SEND_LINK,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error(ErrorMessages.SEND_ERROR);
    }
  })
    .catch((err) => {
      onFail(err.message);
    })
    .finally(() => blockButton());
};

export { getData, sendData };


