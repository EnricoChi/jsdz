// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).
let a = 2;
let x = 1 + (a *= 2);

// a = 4 - {а} будет переопределена (область видимости позволяет) во время присвоения {x} -> (a *=2) == (a = a * 2)
// x = 5 - сначала произойдёт умножение, а после сложение