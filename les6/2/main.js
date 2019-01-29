'use strict';

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
  settings: {
    countSelector: '#basket-count',
    priceSelector: '#basket-price',
    button: ''
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Иниц иализирует переменные для корзины и показывает эти значения.
   */
  init(settings = {}) {
    Object.assign(this.settings, settings);

    document
      .querySelectorAll(this.settings.button)
      .forEach(item => item.addEventListener(
        'click', (event) => this.add(event.target.dataset.name, event.target.dataset.price)));

    if ('goods' in localStorage) {
      this.loadGoodsOfStorage();
    }
    this.render();
  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    this.settings.countEl = this.goods.length;
    this.settings.priceEl = this.getGoodsPrice();

    document.querySelector(this.settings.countSelector).innerHTML = this.settings.countEl;
    document.querySelector(this.settings.priceSelector).innerHTML = this.settings.priceEl;
  },
  /**
   * Сохраняем товары в localStorage
   */
  saveGoodsToStorage() {
    localStorage.setItem('goods', JSON.stringify(this.goods));
  },
  /**
   * Забираем товары из localStorage, если они там есть
   */
  loadGoodsOfStorage() {
    this.goods = JSON.parse(localStorage.getItem('goods'));
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цену всех купленных товаров.
   */
  getGoodsPrice() {
    return this.goods.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  },

  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
   * @param goodName Название товара.
   * @param goodPrice Цена товара.
   */
  add(goodName, goodPrice) {
    this.goods.push({'name': goodName, 'price': +goodPrice});
    this.render();
    this.saveGoodsToStorage();
  },
};

window.onload = () => basket.init({
    countSelector: '#total-items',
    priceSelector: '#total-price',
    button: '.add-to-cart',
  }
);
