const persons = [
    { name: 'Juan', profesion: 'Developer', age: 22, salary: 22000 },
    { name: 'Maria', profesion: 'Developer', age: 32, salary: 32000 },
    { name: 'Luis', profesion: 'Manager', age: 32, salary: 62000 },
]

console.log('DEVELOPERS SALARIES')
const developers = persons.filter(person => person.profesion === 'Developer')
const developersSalaries = developers.map(dev => dev.salary)
const totalDevSalaries = developersSalaries.reduce((acc, current) => {
    return acc + current
}, 0)
const average = totalDevSalaries / developersSalaries.length
console.log(average)


console.log('NO DEVELOPERS SALARIES')
const noDevelopers = persons.filter(person => person.profesion !== 'Developer')
const noDevelopersSalaries = noDevelopers.map(dev => dev.salary)
const totalNoDevSalaries = noDevelopersSalaries.reduce((acc, current) => {
    return acc + current
}, 0)
const averageNo = totalNoDevSalaries / noDevelopersSalaries.length
console.log(averageNo)
