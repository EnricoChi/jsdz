// Доп. задание - создайте массив, любого размера (просто руками, с любыми значениями).
// Переберите массив в обратном порядке, т.е. с последнего элемента к первому с помощью цикла for.

'use strict';

const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log(`Сгенерирован массив`, arr);

for (let i = arr.length - 1; i >=0 ; i--) {
  console.log(arr[i])
}