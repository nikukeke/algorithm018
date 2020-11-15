// 解题思路
var jump = function (nums) {
    let curr = 0;
    let next = 0;
    let stepNum = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        // 跳一次的最远跳跃距离 = 当前位置 + 可跳跃的最大数
        next = Math.max(next, i + nums[i]);
        if (curr >= len) break;
        if (curr === i) {
            curr = next;
            stepNum++;
        }
    }
    return stepNum;
};