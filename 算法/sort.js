const testArr = [1,3,2,7,2,4,10,8,5];

/**
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

/**
 * 选择排序
 * @param arr
 * @returns {*}
 */
function selectionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort(testArr));
