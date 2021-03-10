/**
 * Es6 class
 * class是构造函数的语法糖
 */
class Person {
    name = 'zhang' // 该属性是给实例的
    static age = '18' // 静态属性
    getName () {   // 方法是挂载在原型上的
        return 'li';
    }
}

let person1 = new Person();
let person2 = new Person();
person2.name = 'wang';
console.log(person1.name, '======person1.name'); // zhang
console.log(person2.name, '======person2.name'); // wang
console.log(Person.prototype.getName(), '======Person.prototype.getName()') // li
console.log(Person.prototype.name, '======Person.prototype.name') // undefined 证明类下直接声明的属性和在constructor中声明的属性一样，都是挂载在实例上的
console.log(Person.age, '======Person.age'); // 静态属性可以直接用类名调用
console.log(person1.age, '======perosn1.age') // undefined 静态属性不能通过实例调用