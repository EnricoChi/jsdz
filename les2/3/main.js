// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

const a = random_int(),
  b = random_int(),
  arr = [a, b],
  sign_check = arr.filter(v => v < 0), // Вернёт массив из отрицательных чисел. Извращение, но так интереснее чем писать if (a < 0 && b < 0)
  negative_num_count = sign_check.length;

let result = null;

/**
 *
 * @return {number} - случайное целое число от 0 до 100, со случайным знаком
 */
function random_int() {
  return Math.floor((Math.random() - .5) * 2 * 100);
}

if (negative_num_count === 2) { // Оба отрицательные
  result = arr.reduce((a, b) => a * b);
} else if (negative_num_count === 1) { // Хотя бы 1 отрицательное
  result = arr.reduce((a, b) => a + b);
} else { // Оба положительные
  result = arr.reduce((a, b) => a - b);
}

console.log(a, 'a');
console.log(b, 'b');
console.log(result, 'result');