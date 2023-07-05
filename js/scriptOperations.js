"use strict";

console.log('arr' + " - object");
console.log( 4 + " - object");
console.log( 4 + +"5"); // унарный плюс


let incr = 10,  // = это присваивание
    decr = 10;


// incr++; // постфиксное значение
// decr--;

// ++incr; // префиксное
// --decr;

// console.log(incr++);
// console.log(decr--);  в постфиксном будет отображаться 10 и 10 в обоих случаях, потому что постфикс сначала выдает значение переменной, и после делает увеличение или уменьшение.

console.log(++incr);
console.log(--decr);


console.log(5%2); // возвращает остаток


console.log(2*4 == '8'); // == это сравнение
console.log(2 + 2 * 2 === '8'); // === строгое сравнение
console.log(2 + 2 * 2 != 6); // false
console.log(2 + 2 * 2 != '6'); // false
console.log(2 + 2 * 2 !== '6'); // true

const isChecked = true,
    isClose = false;

console.log(isChecked && !isClose); 