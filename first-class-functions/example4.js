// Closure

const createPrinter = () => {
  const myNum = 33;
  return () => console.log("number " + myNum);
};
const printer = createPrinter()
console.log(printer())


