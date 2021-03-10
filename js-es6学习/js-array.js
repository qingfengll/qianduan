/************** 数组方法 *************/
/************** 改变原数组 ***********/

let arr = [1,2,3]

/**
 * Array.prototype.push
 * 向数组末尾添加一个元素,返回数组的长度
 */
arr.push(4);

/**
 * Array.prototype.pop
 * 从数组末尾取出一个元素，返回取出的元素
 */
arr.pop();

/**
 * Array.prototype.unshift
 * 向数组头部添加一个元素，返回数组的长度
 */
arr.unshift(0);

/**
 * Array.prototype.shift
 * 从数组头部取出一个元素，返回取出的元素
 */
arr.shift();

/**
 * Array.prototype.join
 * 将数组以某一分割符分隔成字符串
 * 参数：separator 可选，若不传则以逗号分割。
 * 如果数组长度为1，则不分割
 */
arr.join('-');

/**
 * Array.prototype.keys
 * 返回数组中每个元素的索引
 */
arr.keys();

/**
 * Array.prototype.sort
 * 对数组进行排序
 * 默认排序是将元素转换成字符串，然后比较他们的UTF-16代码单元值序列
 * 参数为一个方法，比较函数
 */
let compareFunction = function(a,b) {
    if (a - b < 0) {
        return -1; // a在b前
    } else if (a - b > 0) {
        return 1; // a在b后
    } else {
        return 0; // a和b相对位置不变
    }
}
arr.sort(compareFunction(a,b));

/**
 * Array.prototype.reverse
 * 颠倒数组中的元素
 */
arr.reverse();

/**
 * Array.prototype.splice
 * 向数组中添加或删除元素，或者替换数组中的元素
 * 参数: start, deleteCount, item
 * start: 从数组哪个位置开始
 * deleteCount：可选，删除元素的个数
 * item: 可选，要向数组中添加的元素
 */
arr.splice(0,1,6); // 从第一个位置开始，删除一个元素，再添加一个6，相当于把数组的第一个元素替换成6