// 解题思路
// 一、暂存数组长度，先将所有数，往后平移k位
// 二、将超出数组长度的数，移回前k位，截断数组
var rotate = function (nums, k) {
    let l = nums.length;
    for (let i = nums.length; i--;) {
        nums[i + k] = nums[i];
    }
    for (let i = k; i--;) {
        nums[i] = nums[nums.length - k + i]
    }
    nums.length = l;
};