const numbers = [2, 3, 5, 6, 7, 2, 5, 2, 4, 1, 11, 34]

console.log(numbers.slice(2, 4))
console.log(numbers)

// create a reverse copy / avoid mutate the originals
console.log(numbers.slice().reverse())