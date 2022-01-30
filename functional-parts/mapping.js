const persons = [
    { name: 'Juan', age: 22},
    { name: 'María', age: 32},
]

const getAge = person => person.age

const ages = persons.map(getAge)

console.log(ages)