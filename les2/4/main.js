// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

const a = 20,
  b = 30;

function sum(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}


function difference(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

console.log(sum(a, b));
console.log(multiplication(a, b));
console.log(difference(a, b));
console.log(division(a, b));