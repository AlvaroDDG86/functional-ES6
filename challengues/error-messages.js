const currentInputs = {
    name: '', // must be 5 characters
    zipCode: '12', // must be 2 characters
    password: '122345' // must be 6 characters
}

const validLength = (field, length) => value => value.length >= length ? '' : `${field} must be at least ${length} characters`

const inputCriteria = {
    name: [validLength('name', 5)],
    zipCode: [validLength('zipCode', 2)],
    password: [validLength('password', 10)]
}

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, current) => [
        ...acc,
        ...criteria[current].map(test => test(inputs[current]))
    ], []).filter(msg => msg)
}

console.log(getErrorMessages(currentInputs, inputCriteria))
/**
 * Expected Output
 * [
 *  'name must be at least 5 characters'
 *  'zipCode must be at least 2 characters'
 *  'password must be at least 6 characters'
 * ]
 */