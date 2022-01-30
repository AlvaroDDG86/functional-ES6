const cars = [
    { type: 'SUB', brand: 'BMW' },
    { type: 'Sport', brand: 'Ferrari' },
    { type: 'SUB', brand: 'Toyota' },
    { type: 'Berlina', brand: 'Audi' },
]

const filterSubs = car => car.type === 'SUB'
const subs = cars.filter(filterSubs)
console.log(subs)


const filterByKey = (key, val) => car => car[key] === val
const sportsType = cars.filter(filterByKey('type', 'Sport'))

console.log(sportsType)