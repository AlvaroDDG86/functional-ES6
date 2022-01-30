// Use of closure
const Person = ({ name, age, job }) => {
    let _name = name;
    let _age = age;
    let _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,
        setName: newName => _name = newName,
        setAge: newAge => _age = newAge,
        setJob: newJob => _job = newJob
    }
}

const me = Person({ name: 'Alvaro', age: 35, job: 'Programmer'})
console.log(me.getJob())
me.setJob('Developer')
console.log(me.getJob())