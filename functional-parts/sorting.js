// sort function mutate the original array, then we use slice().sort()
const numbers = [2, 3, 5, 2, 1, 6, 8, 8]

const ascending = (a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}

const descending = (a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

const numbersAsc = numbers.slice().sort(ascending)
const numbersDes = numbers.slice().sort(descending)

console.log(numbersAsc)
console.log(numbersDes)