// 1、3. 无重复字符的最长子串
// 2、30. 串联所有单词的子串
// 3、76. 最小覆盖子串
// 4、159. 至多包含两个不同字符的最长子串
// 5、209. 长度最小的子数组
// 6、239. 滑动窗口最大值
// 7、340. 至多包含 K 个不同字符的最长子串
// 8、438. 找到字符串中所有字母异位词
// 9、567. 字符串的排列
// 10、632. 最小区间
// 11、727. 最小窗口子序列

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