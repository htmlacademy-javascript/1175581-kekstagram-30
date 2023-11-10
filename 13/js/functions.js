const checkLength = (string, maxLength) => (string.length < maxLength);

console.log(`Функция проверки длины вернула: ${checkLength('ergergeg', 15)}`);


const isPalindrome = function (string) {
  const filterString = string.replaceAll().toLowerCase();

  let result = '';

  for (let i = filterString.length - 1; i >= 0; i--) {
    result += filterString[i];
  }

  return result === filterString ? 'Это палиндром' : 'Это не палиндром';
};

console.log(isPalindrome('topot'));

const getNumber = function (string) {
  let result = '';
  const filterString = string.toString();
  for (let i = 0; i < filterString.length; i++) {
    if (!Number.isNaN(parseInt(filterString[i]))) {
      result += filterString[i];
    }
  }
  return parseInt(result);
};

console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));
console.log(getNumber(2023));
console.log(getNumber(-1));
console.log(getNumber(1.5));


const isMeetingToday = (start, end, meet, during) => {
  //разбиваем строку времени на массив из часов и митут
  const startArray = start.split(':');
  const endArray = end.split(':');
  const meetArray = meet.split(':');
  //получаем время в прошедших минутах с начала суток
  const startWorkInMinutes = parseInt(startArray[0], 10) * 60 + parseInt(startArray[1], 10);
  const endWorkInMinutes = parseInt(endArray[0], 10) * 60 + parseInt(endArray[1], 10);
  const meetStartInMinutes = parseInt(meetArray[0], 10) * 60 + parseInt(meetArray[1], 10);
  //если время начала встречи + длительность встречи укладывается в диапазон рабочего дня
   return (startWorkInMinutes <= (meetStartInMinutes + during) && (meetStartInMinutes + during) <= endWorkInMinutes) ? true : false;

};

console.log(isMeetingToday('08:00', '17:30', '14:00', 90));
console.log(isMeetingToday('8:0', '10:0', '8:0', 120));
console.log(isMeetingToday('08:00', '14:30', '14:00', 90));
console.log(isMeetingToday('14:00', '17:30', '08:0', 90));
console.log(isMeetingToday('8:00', '17:30', '08:00', 900));

