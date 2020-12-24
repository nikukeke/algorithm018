// 解题思路
// 1、直接排序
// 高级排序（代码用的是快排）
// 时间复杂度是O(NlogN)
// 空间复杂度是O(logN)。
var getLeastNumbers = function (arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k)
};

// 二、最大堆
// 最大堆的性质，节点值大于子节点的值，堆顶元素是最大元素。利用这个性质
// 创建大小为k的最大堆
// 将数组的前k个元素放入堆中
// 从下表k继续开始一次遍历数组的剩余元素
//      如果元素小于堆顶元素，那么取出堆顶元素，将当前元素入堆
//      如果元素大于/等于堆顶元素，不左操作
// 由于堆的大小是K，空间复杂度是O(K)，时间复杂度是O(NlogK)

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
class MaxHeap {
    constructor(arr = []) {
        this.container = [];
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }

    insert(data) {
        const { container } = this;

        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (container[index] <= container[parent]) {
                break;
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract() {
        const { container } = this;
        if (!container.length) {
            return null;
        }

        swap(container, 0, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = 0,
            exchange = index * 2 + 1;

        while (exchange < length) {
            // 如果有右节点，并且右节点的值大于左节点的值
            let right = index * 2 + 2;
            if (right < length && container[right] > container[exchange]) {
                exchange = right;
            }
            if (container[exchange] <= container[index]) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }
        return res;
    }

    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}

var getLeastNumbers = function (arr, k) {
    const length = arr.length;
    if (k >= length) {
        return arr;
    }

    const heap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < length; ++i) {
        if (heap.top() > arr[i]) {
            heap.extract();
            heap.insert(arr[i]);
        }
    }
    return heap.container;
}

// 解法三、基于快速排序的partition
//      解法一中使用了快速排序，但其实并需要堆全部元素进行排序，题目只需要前k个元素
//      回顾快速排序中的partition操作，可以将元素arr[0]放入排序后的正确位置，并且
// 返回这个位置index。利用partition的特点，算法流程如下：
//      - 如果index = k，说明第k个元素已经放入正确位置，返回前k个元素
//      - 如果k < index，前k个元素在[left, index - 1]之间，缩小查找范围，继续查找
//      - 如果index < k，前k个元素在[index + 1, right]之间，缩小查找范围，继续查找

// 时间复杂度是:O(N)
// 空间复杂度是:O(N)
function partition(arr, start, end) {
    const k = arr[start];
    let left = start + 1, right = end;
    while (1) {
        while (left <= end && arr[left] <= k) ++left;
        while (right >= start + 1 && arr[right] >= k) --right;
        if (left >= right) {
            break;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]]
        ++left;
        --right;
    }
    [arr[right], arr[start]] = [arr[start], arr[right]]
    return right;
}

var getLeastNumbers = function (arr, k) {
    const length = arr.length;
    if (k >= length) return arr;
    let left = 0, right = length - 1;
    let index = partition(arr, left, right);
    while (index !== k) {
        if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        } else if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        }
    }
    return arr.slice(0, k)
}