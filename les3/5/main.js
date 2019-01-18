// 5*. Дан массив (создать такой же, с такими же значениями):
//
// ```
// const arr = [
//   [2, 4, 6],
//   [1, 5, 10],
//   [7, 4, 1],
// ];
// ```
//
// Задания:
// 1. Найти массив, у которого сумма всех чисел максимальна, вывести в console.log индекс этого массива.
// 2. Получить и вывести в console.log минимальное значение найденное в массиве, который мы получили в
// первом пункте.

'use strict';

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

let new_arr = arr.slice(),
  sum_arr = [];

for (let i in new_arr) {
  // Складываю все числа во вложенных массивах и записываю в новый массив сумму, сохраняя индексы
  sum_arr[i] = new_arr[i].reduce((previousValue, value) => +previousValue + +value);
}

let biggest_num_index = biggestSearch(sum_arr),
  smallest_num_in_array = new_arr[biggest_num_index][smallestSearch(new_arr[biggest_num_index])];

/**
 *
 * @param {object} arr входящий одноменый массив
 * @return {number} вернет индекс наибольшего числа в массиве
 */
function biggestSearch(arr) {
  let biggest = 0;
  for (let i in arr) {
    if (arr[i] > arr[biggest]) {
      biggest = i
    }
  }
  return biggest;
}

/**
 *
 * @param {object} arr входящий одноменый массив
 * @return {number} вернет индекс наименьшего числа в массиве
 */
function smallestSearch(arr) {
  let smallest = 0;
  for (let i in arr) {
    if (arr[i] < arr[smallest]) {
      smallest = i
    }
  }
  return smallest;
}

console.log(`Массив с максимальной суммой чисел - [${new_arr[biggest_num_index]}], его индекс ${biggest_num_index}`);
console.log(`Минимальное число в найденом массиве - ${smallest_num_in_array}`);