// 解题思路
// 一、动态规划
// 时间复杂度为O(n)，其中n为nums数组的长度。我们只需要遍历一遍数组即可求得答案
// 空间复杂度为O(1)，我们只需要常数空间存放若干变量。
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre+x, x);
        maxAns = Math.max(maxAns, pre);
    })
    return maxAns;
};

var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
