/*
 * @Descripttion: 
 * @Author: yangxia
 * @Date: 2021-02-22 13:13:30
 */
function bubble(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function choose(arr) {
    const length = arr.length;
    for(let i = 0; i < length - 1; i++) {
        for(let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function insert(arr) {
    for(let i = 1; i < arr.length; i++) {
        let position = i;
        let value = arr[position];
        while(position > 0 && arr[position - 1] > value) {
            arr[position] = arr[position - 1];
            position--;
        }
        arr[position] = value;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length + 1);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    if (left.length) {
        result = result.concat(left);
    }
    if (right.length) {
        result = result.concat(right);
    }
    return result;
}

function quikSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.ceil(arr.length / 2);
    const midValue = arr.splice(mid, 1)[0];
    let left = [];
    let right = [];
    const preData = {
        left,
        right
    }
    arr.reduce((pre, value) => {
        if (value < midValue) {
            pre.left.push(value);
        } else {
            pre.right.push(value);
        }
        return preData;
    }, preData);
    return quikSort(left).concat([midValue]).concat(quikSort(right));
}

function heapSort(element) {
    buildHeap(element);
    changeHeap(element);
}

function buildHeap(element) {
    for(let i = Math.ceil(element.length / 2); i >= 0; i--) {
        headAjust(element, i, element.length);
    }
}

function changeHeap(element) {
    for(let i = element.length - 1; i > 0; i--) {
        const temp = element[i];
        element[i] = element[0];
        element[0] = temp;
        headAjust(element, 0, i);
    }
}

function headAjust(element, pos, len) {
    const leftChildPosition = pos * 2;
    const rightChildPosition = pos * 2 + 1;
    let maxChildPosition = leftChildPosition;
    if (leftChildPosition >= len) {
        return;
    }
    if (len > rightChildPosition && element[rightChildPosition] > element[leftChildPosition]) {
        maxChildPosition = rightChildPosition;
    }
    if (element[maxChildPosition] > element[pos]) {
        const temp = element[pos];
        element[pos] = element[maxChildPosition];
        element[maxChildPosition] = temp;
        headAjust(element, maxChildPosition, len)
    }
}

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.ceil((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        const midIndex = Math.ceil((start + end) / 2);
        const midValue = arr[midIndex];
        if (midValue === target) {
            return midIndex;
        } else if (midValue > target) {
            end = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    }
    return -1;
}
// 数组去重
// 1. set
// 2. 

function flatten1(arr) {
    return arr.reduce((pre, value) => {
        return pre.concat(Array.isArray(value) ? flatten1(value) : [value])
    }, []);
}