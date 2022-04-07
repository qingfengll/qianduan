var obj = new Person();
// 执行new操作时做了什么

// 1. 创建一个对象
// 2. 将构造函数的作用域赋给新对象（this指向这个新对象）
// 3. 执行构造函数中的操作（给这个新对象添加属性）
// 4. 返回这个新对象

var obj = {};
obj.__proto__ = Person.prototype;
Person.call(obj);
