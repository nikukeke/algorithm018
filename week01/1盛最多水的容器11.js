// 解题思路
// 一、双指针
// 时间复杂度O(n)
// 空间复杂度O(1)
// 首位两个指针，左指针，右指针
// 左指针右移，右指针左移，都会带来宽度的见效，要想面积右变大的可能
// 就要高度要变大
// 又根据木桶原理，高度由较矮的bar高决定
// 所以我们希望较矮的那个bar，能狗变高一些---移动较矮的指针，看看能不能变高
var maxArea = function (height) {
    let max_area = 0;
    let left = 0, right = height.length - 1
    while (left < right) {
        const curArea = (right - left) * Math.min(height[left], height[right])
        if (curArea > max_area) {
            max_area = curArea
        }
        if (height[left] < height[right]) {
            // 左边较矮，往右移，或许会变高
            left++;
        } else {
            // 右边较矮，往左移，或许会变高
            right--;
        }
    }
    return max_area;
};