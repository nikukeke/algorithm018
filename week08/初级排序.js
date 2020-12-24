// 1、冒泡排序 Bubble Sort
// 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们
// 的排序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该
// 数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

// 算法描述、
//      比较相邻的元素。如果第一个比第二个大，就交换它们两个
//      对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数
//      针对所有的元素重复以上的步骤，除了最后一个
//      重复步骤1～3，直到排序完成
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for(var j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}

// 2、选择排序 Selection Sort
// 选择排序(Selection Sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列
// 中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最
// 小（大）元素，然后放到已排序序列的末尾。以此类推，直到所以元素均排序完毕。

// 算法描述、
//      n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：
// 初始状态：无序区为R[1..n]，有序区为空；
//      第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1,...u-1]和R(i...n)。
// 该趟排序从当前无序区中-选出关键字最小的记录R[k],将它与无序区的第1个记录R交换，使R[1...i]
// 和R[i+1...n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区。
//      n-1趟结束，数组有序化了

// 算法分析
// 表现最稳定的排序算法之一，因为无论什么数据进去都是O(n方)的时间复杂度，所以用到它的时候，数据
// 规模越小越好。唯一的好处可能就是不占用额外的内存空间。理论上讲，选择排序可能也是平时排序一般人
// 想到的最多的排序方法了吧。
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

// 3、插入排序 Insertion Sort
//      插入排序(Insertion Sort)的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，
// 对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 算法描述
// 一般来说，插入排序都采用in-place在数组上实现
//      从第一个元素开始，该元素可以认为已经被排序
//      取出下一个元素，在已经排序的元素序列中从后向前扫描
//      如果该元素（已排序）大于新元素，将该元素移动到下一位置
//      重复步骤3，直到找到已排序的元素小于或等于新元素的位置
//      将新元素插入到该位置后
//      重复步骤2～5
// 算法分析
//      插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，
// 需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
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

// 4、希尔排序 (Shell Sort)
//      1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不
// 同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。



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
function heap_sort(a, len) {

    for (let i = 0; i < len; i++) {
        q.push(a[i]);
    }
    for (let i = 0; i < len; i++) {
        a[i] = q.pop();
    }
}