const numbers = [1, 2, 4, 2, 122, 12, 3, 45, 5]
const sum = numbers.reduce((acc, current) => {
    return acc += current
}, 0)

console.log(sum)