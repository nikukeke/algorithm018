// 解题思路 动态规划
// 遍历数组时计算当前最大值，不断更新
// 令imax为当前最大值，则当前最大值为imax = max(imax * nums[i], nums[i])
// 由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin=min(imin * nums[i], nums[i])
// 当负数出现时则imax与imin进行交换再进行下一步计算
// 时间复杂度: O(n)
// 空间复杂度为: O(1)
var maxProduct = function (nums) {
    var max = Number.MIN_SAFE_INTEGER, imax = 1, imin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = imax;
            imax = imin;
            imin = temp;
        }
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        max = Math.max(max, imax);
    }
    return max;
};
