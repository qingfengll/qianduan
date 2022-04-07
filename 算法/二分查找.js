function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] < target) {
            end = mid - 1;
        }
        if (arr[mid] === target) {
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([1,3,5,2,1,6,8,9], 2));
