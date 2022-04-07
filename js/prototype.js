function Person() {

}
function SubPerson() {

}
SubPerson.prototype = new Person();
Person.prototype.address = 'beijing';
const person = new Person();
console.log(person.address);
console.log(new SubPerson().address);
