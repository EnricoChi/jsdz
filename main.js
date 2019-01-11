'use strict';

/**
 * Задание 1
 * @param {number} tc Ввод с клавиатуры, °C
 * @param {number} tf Расчет по формуле в зависимости от tc, °F
 * @return {number} tf °F
 */

let tc = prompt('Температура °C'),
  tf = (9 / 5) * tc + 32;
alert(`Температура ${tc}°С == ${tf}°F`);


/**
 * Задание 2
 * @param {string} name const
 * @param {undefined} admin == name
 */

const name = 'Василий';
let admin;

admin = name;
console.log(`Админ - ${admin}`);


/**
 * Задание 3
 */

console.log(10 + 10 + "10"); // 2010 - сложение двух чисел и строки
console.log(10 + "10" + 10); // 101010 - число + строка + число
console.log(10 + 10 + +"10"); // 30 - число + число + (+строка=приведение к числу)
console.log(10 / -""); // -Infinity - >> "" == 0 <- true,
console.log(10 / +"2,5"); // NaN - знак "," не даст привести к числу


/**
 * Задание 4
 * async - файл грузится параллельно с работой HTML парсера, выполнение скрипта начнется сразу после загрузки файта
 * и остановит HTML парсер до окончания выполнения.
 * Подходит для скриптов не имеющих зависимостей.
 *
 * defer - файл грузится параллельно с работой HTML парсера, выполнение скрипта начнется после завершения
 * работы HTML парсера.
 * Подходит для скриптов имеющих зависимость от полной загрузки DOM или других скриптов/файлов.
 *
 * async || defer уместно использовать, только в случае если файл скрипта расположен не в конце документа
 */


/**
 * Задание 5.1
 * @param {string} ticket_str 6-ти значной номер вводимый с клавиатуры
 * @param {number} num == ticket_str приведённый к числу. Такие пляски только для красоты вывода иначе проще было +prompt()
 * @param {number} left_num 3 цифры слева
 * @param {number} right_num 3 цифры справа
 * @param {number} result последняя цифра, остаток от деления new_num % 10
 * @param {string} num_prop покажет результат
 *
 */

let ticket_str = prompt('Номер билета - 6 цифр'),
  num = +ticket_str,
  left_num = null,
  right_num = null,
  num_prop = 'обычный';

for (let i = 0; i < 6; i++) {

  num = i !== 0 ? num / 10 : num;

  let result = parseInt(num) % 10;

  if (i < 3) {
    right_num += result;
  } else {
    left_num += result;
  }
}

if (right_num === left_num) {
  num_prop = 'счастливый';
}

console.log(`Решение 1: Билет №${ticket_str} - ${num_prop}`);


/**
 * Задание 5.2
 * @param {string} ticket 6-ти значной номер вводимый с клавиатуры
 * @param {object} {function} reducer https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

let ticket = prompt('Номер билета - 6 цифр'),
  left = counting(ticket.slice(0, 3)),
  right = counting(ticket.slice(3, 6)),
  ticket_prop = 'обычный';

if (left === right) {
  ticket_prop = 'счастливый';
}

function counting(part) {
  const reducer = (accumulator, currentValue) => +accumulator + +currentValue;
  part = part.split('');
  return part.reduce(reducer);
}

console.log(`Решение 2: Билет №${ticket} - ${ticket_prop}`);
