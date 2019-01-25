// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

// 2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо можно использовать символы
// (существуют символы шахматных фигур) причем все фигуры должны стоять на своих местах и
// быть соответственно черными и белыми.

'use strict';

const settings = {
  rows: ['', 1, 2, 3, 4, 5, 6, 7, 8, ''],
  cols: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
  colors: ['#fff', '#000'],
  startPositionX: 0,
  startPositionY: 0,
};

const chessPieces = {
  pawn: {
    w: {
      code: '&#9817;',
      pos: {
        x: false,
        y: 2
      }
    },
    b: {
      code: '&#9823;',
      pos: {
        x: false,
        y: 7
      }
    }
  },
  queen: {
    w: {
      code: '&#9813;',
      pos: {
        x: 'D',
        y: 1
      }
    },
    b: {
      code: '&#9819;',
      pos: {
        x: 'D',
        y: 8
      }
    }
  },
  king: {
    w: {
      code: '&#9812;',
      pos: {
        x: 'E',
        y: 1
      }
    },
    b: {
      code: '&#9818;',
      pos: {
        x: 'E',
        y: 8
      }
    }
  },
  horse: {
    w: {
      code: '&#9816;',
      pos: {
        x: ['B', 'G'],
        y: 1
      }
    },
    b: {
      code: '&#9822;',
      pos: {
        x: ['B', 'G'],
        y: 8
      }
    }
  },
  bishop: {
    w: {
      code: '&#9814;',
      pos: {
        x: ['A', 'H'],
        y: 1
      }
    },
    b: {
      code: '&#9820;',
      pos: {
        x: ['A', 'H'],
        y: 8
      }
    }
  },
  knight: {
    w: {
      code: '&#9815;',
      pos: {
        x: ['C', 'F'],
        y: 1
      }
    },
    b: {
      code: '&#9821;',
      pos: {
        x: ['C', 'F'],
        y: 8
      }
    }
  }

};


const board = {
  settings,
  chessPieces,
  boardWrapper: null,

  isColored(rowNum, colNum) {
    return (rowNum + colNum) % 2
  },
  init() {
    this.boardWrapper = document.getElementById('board');
    this.renderBoard();
  },
  searchChessPieces(rowNum, colNum) {
    // Будем итерировать обьект до посинения
    for (let figure in this.chessPieces) {
      // Пока не найдем опции его свойства
      for (let options in this.chessPieces[figure]) {
        // Для удобства вытащим позиции из свойсвт
        let posX = this.chessPieces[figure][options].pos.x,
          posY = this.chessPieces[figure][options].pos.y,
          figureCode = this.chessPieces[figure][options].code;

        // У пешек нет позиции по X т.к. они заполняют всю строку
        if (!posX) {
          if (posY === rowNum) {
            // Вернём пешку
            return figureCode
          }
          // У любой другой фигуры есть обе позиции, при этом по X может быть массив если фигуры одинаковые
        } else if (posX.includes(colNum) && posY === rowNum) {
          // Вернём фигуру
          return figureCode;
        }

      }
    }
    return false;
  },
  renderBoard() {
    for (let row = this.settings.rows.length - 1; row >= 0; row--) {

      // Создаем новую строку.
      const boardRow = document.createElement('tr');
      // Добавляем строку на доску.
      this.boardWrapper.appendChild(boardRow);

      // В каждой строке пробегаемся по циклу столько раз, сколько у нас колонок.
      for (let col = 0; col < this.settings.cols.length; col++) {
        // Создаем ячейку.
        const boardCol = document.createElement('td');

        // Если номер строки пустой - нумеруем колонки
        if (this.settings.rows[row] === '') {
          boardCol.innerHTML = this.settings.cols[col];
        }

        // Если номер колонки пустой и номер строки не пустой - нумеруем строки
        if (this.settings.cols[col] === '' && this.settings.rows[row] !== '') {
          boardCol.innerHTML = this.settings.rows[row];
        }

        // Если это не строки с нумирацией
        if (this.settings.cols[col] !== '' && this.settings.rows[row] !== '') {
          // Если должен быть цвет
          if (this.isColored(row, col)) {
            // Красим классом
            boardCol.classList.add('colored');
          }

          // Найдем фигуру для этой позиции
          let figure = this.searchChessPieces(this.settings.rows[row], this.settings.cols[col]);
          // Если есть такая фигура
          if (figure) {
            // Вставим её
            boardCol.innerHTML = figure;
          }
        }

        // Добавляем ячейку в текущую строку.
        boardRow.appendChild(boardCol);
      }
    }
  },
};

board.init();