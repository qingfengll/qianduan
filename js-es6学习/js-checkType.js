/**
 * typeof 用于检测基本类型
 * 检测引用类型值都是object
 */

let str = 'hello world'
console.log(typeof str)   // string

let arr = [1,2,3];
console.log(typeof arr) // object

let date = new Date();
console.log(typeof date) // object

/**
 * instanceof 判断变量是否是对象的实例
 * instanceof 检测基础类型不准确
 */

console.log(arr instanceof Array) // true
console.log(date instanceof Date) // true
console.log(str instanceof String) // false,str不是String的实例

//检测原理 arr instanceof Array 意思即是Array.prototype 是否在arr的原型链上
/**
 * 
 * @param {*} obj 被检测变量
 * @param {*} tarObj 目标对象
 * @returns 
 */
function myInstanceOf(obj, tarObj) {
    let tarObjProto = tarObj.prototype;
    let objProto = obj.__proto__;
    while (true) {
        if (objProto === null) {
            return false;
        }
        if (objProto === tarObjProto) {
            return true;
        }
        objProto = objProto.__proto__;
    }
}


/**
 * toString 方法检验不受基础类型，引用类型影响
 */

console.log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(date)) // [object Date]
console.log(Object.prototype.toString.call(str)) // [object String]
// 因为Array，Date等很多对象都重写了toString方法，所以直接调用Object的toString方法