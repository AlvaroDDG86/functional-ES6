const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

subtract(9, 3);

const combine2and3 = (func) => func(2, 3);

combine2and3(add); // -> 2 + 3
combine2and3(subtract); // -> 2 - 3
