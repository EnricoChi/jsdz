// 6**. Программа должна спросить у пользователя количество денег, которое он хочет положить в банк. Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// Если пользователь введет любое другое целое число, программа также должна выдать соответствующее сообщение, в котором будет отображено это число, а также поставить верное окончание в слове "рубль". Для получения верного склонения слова (любого слова с числом) вам необходимо создать функцию.


const money = +prompt('Введите число'),
  rub = rub_ending(money);

/**
 *
 * @param {number } money
 * @let {number} num - ищем последнюю цифру в money
 * @let {string} rub - меняем в зависимости от num
 * @return {string}
 */
function rub_ending(money) {
  let last_num = money % 100 % 10,
    rub = 'рублей';

  if (last_num > 1 && last_num < 5) {
    rub = 'рубля';
  }

  if (last_num === 1) {
    rub = 'рубль';
  }

  return rub;
}

alert(`Ваша сумма в ${money} ${rub} успешно зачислена.`);
