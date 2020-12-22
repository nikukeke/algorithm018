// 解题思路
// 一、
//  返回的长度 = 原数组的长度 - 重复元素的长度
//      1 设置数组重复元素的个数为count = 0
//      2 从数组第二个元素开始遍历i=1;i<nums.length;i++
//      3 当遇到第一个重复的元素时count++
//      4 当遍历到与上一个元素不重复即不相同时，此时当前元素需要向前移n个重复元素的
//        位置即替换即相当于替换最近一次重复元素第一次出现的索引位置上的元素 最近一
//        次重复元素第一次出现的位置上的元素 = 当前元素 => nums[i-count] = nums[i] 
//        && 符合循环条件则继续遍历回到第<2>步 否则进入下一步
//      5 返回长度n-count    

var removeDuplicates = function (nums) {
    let count = 0;
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[i - count] = nums[i];
        } else {
            count++;
        }
    }
    return n - count;
};