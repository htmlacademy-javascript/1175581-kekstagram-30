const checkLength = (string, maxLength) => (string.length < maxLength);

console.log(`Функция проверки длины вернула: ${ checkLength('ergergeg', 15)}`);


const isPalindrome = function(string) {
  const filterString = string.replaceAll().toLowerCase();

  let result = '';

  for (let i = filterString.length - 1; i >= 0; i--) {
    result += filterString[i];
  }

  return result === filterString ? 'Это палиндром' : 'Это не палиндром';
};

console.log (isPalindrome('topot'));

const getNumber = function(string) {
  let result = '';
  const filterString = string.toString();
  for (let i = 0; i < filterString.length; i++) {
    if (!Number.isNaN(parseInt(filterString[i]))) {
      result += filterString[i];
    }
  }
  return parseInt(result);
};

console.log (getNumber('2023 год'));
console.log (getNumber('ECMAScript 2022'));
console.log (getNumber('1 кефир, 0.5 батона'));
console.log (getNumber('агент 007'));
console.log (getNumber('а я томат'));
console.log (getNumber(2023));
console.log (getNumber(-1));
console.log (getNumber(1.5));
