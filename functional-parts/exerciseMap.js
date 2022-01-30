// const map = (arr, func) => {
//     let newArray = []
//     for (let index = 0; index < arr.length; index++) {
//         const result = func(arr[index])
//         newArray.push(result)
//     }
//     return newArray
// }


// const map = (arr, func) => {
//     return arr.reduce((acc, current) => {
//         acc.push(func(current))
//         return acc
//     }, [])
// }


const map = (arr, func) => 
    arr.reduce((acc, current) => [
        ...acc,
        func(current)
    ], [])

// Should be [2, 4, 6]
console.log(map([1, 2, 3], x => x * 2))

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], x => -x))

// Should be ['A', 'B', 'C', 'D']
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()))