// 1. Объясните почему код даёт именно такие результаты?
let a = 1, b = 1, c, d;

c = ++a; // a = 1 + a
alert(c); // 2

console.log(b);
d = b++; // Постфиксная форма b++ отличается от префиксной ++b тем, что возвращает старое значение, бывшее до увеличения.
alert(d); // 1

c = 2 + ++a; // a = 1 + 2 префиксный инкремент
alert(c); // 5

d = 2 + b++; // b = 2 после выражения выше d = b++, постфиксный инкремент не добавит еденицу к текущему выражнию
alert(d); // 4

alert(a); // 3
alert(b); // 3