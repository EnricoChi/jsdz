// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//  - единицы (в свойстве firstDigit)
//  - десятки (в свойстве secondDigit)
//  - сотни (в свойстве thirdDigit)
// Например, для числа 45 мы должны получить следующий объект:
//
// ```
// {
//   firstDigit: 5,
//   secondDigit: 4,
//   thirdDigit: 0,
// }
// ```

'use strict';

const range = [0, 999],
  num = prompt(`Введите число в диапазоне: ${range.join(' - ')}`),
  error = `Вы ввели неверное число, попробуйте снова`,
  /**
   *
   * @param {[]} arrOfNum - массив из чисел. Если он < 3, то забиваю пустые места нулями
   * @return {*} - массив длинною в 3 значения
   */
  arrayCorrectLength = function (arrOfNum) {
    if (arrOfNum.length < 3) {
      while (arrOfNum.length < 3) { // будем пихать нули в начало, если массив короче 3-х
        arrOfNum.unshift(0);
      }
    }
    return arrOfNum;
  };

// Вариант 1, намудрил для тренировки

let numDigits = {};

Object.defineProperties(numDigits, {
  'num': {
    enumerable: false, // знаю что поумолчанию так, просто выделил для себя, чтобы запомнить
    value: num,
  },
  'checkNum': {
    value: function (incomingNum) {
      if (Number.isInteger(incomingNum) && incomingNum >= range[0] && incomingNum <= range[1]) {
        return true;
      }

      alert(error);
      return false;
    }
  },
  'printResult': {
    value: function () {
      console.log(this, `Вариант 1`)
    }
  },
  'getDigitsOfNumber': {
    value: function () {
      let correctNum = this.checkNum(+this.num),
        arrOfNum = this.num.split('');

      if (correctNum) {

        /* это плохо если я произвожу операции внутри объекта, с помощью внешней функции? */
        arrOfNum = arrayCorrectLength(arrOfNum);

        this.firstDigit = +arrOfNum[2];
        this.secondDigit = +arrOfNum[1];
        this.thirdDigit = +arrOfNum[0];
      }

      this.printResult();
    }
  },
})
;

numDigits.getDigitsOfNumber();


// Вариант 2, так короче, но как лучше?

let numDigits2 = {};

/**
 *
 * @param {string} num
 * @let {[]} arrOfNum - массив из стоки num
 * @return {*}
 */
function getDigitsOfNumber(num) {
  if (Number.isInteger(+num) && +num >= range[0] && +num <= range[1]) {
    let arrOfNum = num.split('');

    arrOfNum = arrayCorrectLength(arrOfNum);

    return {
      firstDigit: +arrOfNum[2],
      secondDigit: +arrOfNum[1],
      thirdDigit: +arrOfNum[0],
    }
  }
  alert(error);
  return false;
}

numDigits2 = getDigitsOfNumber(num) ? getDigitsOfNumber(num) : numDigits2;
console.log(numDigits2, `Вариант 2`);