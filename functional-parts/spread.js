// spread operator
const person = {
    name: 'Alfredo',
    age: 22,
    country: 'Spain'
}

const career = {
    name: 'Developer manager', // <- prevalent
    title: 'programmer',
    university: 'Virginia'
}

const personWithCareer = {
    ...person,
    ...career
}

console.log(personWithCareer)

const numbers = [12,2,3]
const updatedNumbers = [222, ...numbers]
console.log(updatedNumbers)