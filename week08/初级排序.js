// 1、选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {    // 寻找最小的数
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 2、插入排序
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current
    }
    return arr;
}

// 3、冒泡排序



// 归并排序
function mergeSort(arr, left, right) {
    if (right <= left) return;
    let mid = (left + right) >> 1;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right)
}
function merge(arr, left, mid, right) {
    let temp = new Array(right - left + 1);
    let i = left, j = mid + 1, k = 0;
    while (i <= mid && j <= right) {
        temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    for (let p = 0; p < temp.length; p++) {
        arr[left + p] = temp[p]
    }
}


// 堆排序
function heap_sort(a, len){

    for(let i = 0; i < len; i++) {
        q.push(a[i]);
    }
    for(let i = 0; i < len; i++) {
        a[i] = q.pop();
    }
}