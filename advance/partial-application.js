const add = (x, y, z) => x + y + z
const addPartial = x => (y, z) => add(x, z, y)
const addCurrying = x => y => z => add(x, z, y)

const add5 = addPartial(5)
const sum = add5(2, 4)
console.log(sum)

const sum2 = addPartial(4)(2,5)
console.log(sum2)

const sum3 = addCurrying(4)(2)(5)
console.log(sum3)