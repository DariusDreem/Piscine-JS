const clone1 = Object.assign({},person)
Object.freeze(clone1)
const clone2 = Object.assign({},person)
Object.freeze(clone2)
const samePerson = person

person.age++
person.country='FR'

console.log(clone2)
console.log(samePerson)