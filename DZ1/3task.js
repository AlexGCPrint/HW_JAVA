"use strict";

let result = 10 + 10 + "10"; // сложение двух чисел и конкатинация с строкой
console.log(result);

result = 10 + "10" + 10; // конкатинация чисел и строки
console.log(result);

result = 10 + 10 + +"10"; // унарный плюс
console.log(result);

result = 10 / -""; // деление на - бесконечность
console.log(result);

result = 10 / +"2,5"; // not a number
console.log(result);