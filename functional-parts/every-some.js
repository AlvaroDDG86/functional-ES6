const children = [
    { name: 'Mariano', age: 3 },
    { name: 'Same', age: 11 },
    { name: 'Julia', age: 21 },
]

const graterThanTen = child => child.age > 10

const allUpperThanTen = children.every(graterThanTen)
console.log(allUpperThanTen)


const someAreAdult = children.some(graterThanTen)
console.log(someAreAdult)