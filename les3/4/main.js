// 4*. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).

'use strict';

let num = 0;
while (num <= 100) {
  if (isNatural(num)) {
    console.log(num);
  }
  num++;
}

/**
 *
 * @param {number} num - получаем число и проверяем натуральное оно или нет
 * @return {boolean}
 */
function isNatural(num) {
  if (num > 1) {
    let i = 2;
    while (i <= num / 2) {
      if (num % i === 0) {
        return false;
      }
      i++;
    }
    return true;
  }
}