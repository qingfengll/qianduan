function isArray(val) {
    return toString.call(val) === '[object Array]';
}

let arr1 = [1,2,3];
let obj1 = {
    name: '1'
}
console.log({}.toString.call(arr1));
console.log(obj1.toString());

const arr2 = [1,2,3,4];
arr2.splice(6,0,'hello');
console.log(arr2);
console.log(arr2.length);

let emptyArr = [];
emptyArr.forEach(item => {
    item.name = '111';
})

/**
 * 数组方法
 * 改变原数组
 */
