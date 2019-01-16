// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg1, arg2, operation) {
  let result = null;
  switch (operation) {
    case '+':
      result = arg1 + arg2;
      break;
    case '-':
      result = arg1 - arg2;
      break;
    case '*':
      result = arg1 * arg2;
      break;
    case '/':
      result = arg1 / arg2;
      break;
  }

  return result;
}

console.log(mathOperation(5, 20, '+'));
console.log(mathOperation(5, 20, '-'));
console.log(mathOperation(5, 20, '*'));
console.log(mathOperation(5, 20, '/'));