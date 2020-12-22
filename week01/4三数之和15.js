// 解题思路
// 双指针
// 思路：外层循环：指针i遍历数组
//      内层循环：用双指针，去寻找满足三数和等于0的项
// 排序的意义：因为不能有重复的解，为了简化，先对数组排序，判断一个元素是否重复，只需看它和前一个元素是否相等即可。
// 双指针的移动时，避免出现重复解
//      得到一个解后，左右指针向‘内’收缩，为了避免只想重复的元素
//      左指针保证left < right 的前提下，一直右移，直到指向不重复的元素
//      右指针保证left < right 的前提下，一直左移，直到指向不重复的元素
// 小优化：经过了排序，如果外层遍历的数已经大于0，则另外两个数一定大于0，sum不会等于0，直接break

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let n1 = nums[i];
        if (n1 > 0) break;
        if (i - 1 >= 0 && n1 == nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let n2 = nums[left], n3 = nums[right];
            if (n1 + n2 + n3 === 0) {
                res.push([n1, n2, n3])
                while (left < right && nums[left] == n2) left++;
                while (left < right && nums[right] == n3) right--;
            } else if (n1 + n2 + n3 < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};