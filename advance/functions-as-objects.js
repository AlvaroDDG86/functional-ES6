const add = (x, y, z) => {
    return x + y + z
}

// function props
console.log(add.name)
console.log(add.length)
console.log(add.toString())

// call
console.log(add.call(null, 22, 3, 5))
// apply
console.log(add.apply(null, [22, 3, 5]))
// bind
const add1 = add.bind(null, 22)
console.log(add1(3, 5))

const args = [22, 3, 5]
console.log(add(...args))