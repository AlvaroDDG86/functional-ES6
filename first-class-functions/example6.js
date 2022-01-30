// High order functions

// More than one responsablity
// const divide = (x, y) => {
//   if (y === 0) {
//     console.error("Error: dividing by zero");
//     return null;
//   }
//   return x / y;
// };

const divide = (x, y) => x / y;

const secondIsNotZero =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      console.error("Error: dividing by zero");
      return null;
    }
    return func(...args);
  };


const divideSafe = secondIsNotZero(divide)
console.log(divideSafe(3, 2))
console.log(divideSafe(3, 0))