const double = (x) => x * 2;
const subtrackOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;
const functionArray = [double, subtrackOne, triple, add5];

let number = 32;

functionArray.forEach((fn) => (number = fn(number)));
console.log(number);
