import { apiLinks } from './constants';
const getData = (onSuccess, getFiltersBlock, onError) => {
  fetch(apiLinks.getLink)
    .then((response) => {
      if (response.ok) {
        getFiltersBlock();
        return response.json();
      }
      throw new Error('Данные с сервера не загрузились');
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => onError('Данные с сервера не загрузились'));

};
const sendData = (onSuccess, onFail, body, blockButton) => {
  fetch(apiLinks.sendLink,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    }
    else {
      throw new Error('Не удалось загрузить данные');
    }

  })
    .catch((err) => {
      onFail(err.message);
    })
    .finally(() => blockButton());
};


export { getData, sendData };


