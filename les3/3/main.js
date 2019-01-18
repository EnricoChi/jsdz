// 3.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:
//
// ```
// x
// xxx
// xxxxx
// xxxxxxx
// xxxxxxxxx
// ```

'use strict';

for (let i = 0; i < 40; i++) {
  console.log('x'.repeat(++i));
}
