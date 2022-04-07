/**
 * n的阶乘
 * @param n
 * @returns {number}
 */
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

let arr = [1,3,4,5,2,6,10];

function getMaxFormLR(arr, left, right) {
    if (left === right) {
        return arr[left];
    }
    let mid = Math.floor((left + right) / 2);
    console.log('left');
    let leftMax = getMaxFormLR(arr, left, mid);
    console.log('right');
    let rightMax = getMaxFormLR(arr, mid + 1, right);
    console.log('compare');
    return Math.max(leftMax, rightMax);
}

console.log(getMaxFormLR(arr, 0,6));
