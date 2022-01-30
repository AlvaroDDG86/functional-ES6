const createPrinter = () => () => console.log("Hello");

const oldCreatePrinter = function () {
  return function () {
    console.log("Hello old");
  };
};
const fn = oldCreatePrinter()

console.log(fn())


// Bad idea
// const double = x => x * 2
// const triple = x => x * 3
// const quadruple = x => x * 4

// refactor
const createMultiplier = y => x => x * y
const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadruple = createMultiplier(4)

console.log(double(22))