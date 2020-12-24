// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/sliding-window-maximum/solution/239-hua-dong-chuang-kou-zui-da-zhi-by-alexer-660/
// 滑动窗口11道

// 一、暴力法
var maxSlidingWindow = function (nums, k) {
    let n = nums.length;
    if (n == 0) return [];
    let res = [];
    for (let i = 0; i < n - k + 1; i++) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        res.push(max);
    }
    return res;
};




var maxSlidingWindow = function (nums, k) {
    if (!nums || !nums.length || k <= 0) return []
    if (k === 1) return nums;
    let res = [], queue = [];
    for (let i = 0; i < nums.length; i++) {
        if (i >= k) {
            let outElem = nums[i - k];
            if (outElem === queue[0]) queue.shift();
        }
        let inElem = nums[i];
        while (queue.length && queue[queue.length - 1] < inElem) queue.pop()
        queue.push(inElem)
        if (i >= k - 1) res.push(queue[0])
    }
    return res
};