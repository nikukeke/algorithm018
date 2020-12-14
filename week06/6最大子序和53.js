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

// 二、动态规划
// 如果sum > 0，则说明sum对结果有增益效果，则sum保留并加上当前遍历数字
// 如果sum <= 0，则说明sum对结果无增益效果，则需要舍弃，则sum直接更新为当前遍历数字
// 每次比较sum和ans的大小，将最大值置为ans，遍历结束返回结果
// 时间复杂度为O(n)。
// 空间复杂度为O(1)。

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



// 三、分治
// 这个分治方法类似于「线段树求解 LCIS 问题」的 pushUp 操作。 
// 也许读者还没有接触过线段树，没有关系，方法二的内容假设你没有任何线段树的基础。
// 当然，如果读者有兴趣的话，推荐看一看线段树区间合并法解决 多次询问 的
// 「区间最长连续上升序列问题」和「区间最大子段和问题」

function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
};
 
