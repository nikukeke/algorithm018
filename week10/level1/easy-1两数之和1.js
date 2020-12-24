// 解题思路：

// 一、暴力法
// 时间复杂度：O(N^2)
// 时间复杂度：O(1)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j]
            }
        }
    }
};

// 二、差值解法
// 1、用while从后向前遍历
// 2、每次pop最后一个值，用IndexOf来查找是否有对应的差
// 3、如果有对应的值，索引就是indexOf得到的值和数组的长度

var twoSum = function (nums, target) {
    let i = nums.length;
    while (i > 1) {
        let last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length]
        }
        i--;
    }
};

// 三、哈希表
const twoSum = (nums, target) => {
    // 1.构建哈希表
    // 存储方式{need, index}
    const map = new Map();
    // 2.遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 2.1如果找到target - nums[i]的值
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            // 2.2 如果每找到则进行设置
            map.set(target - nums[i], i)
        }
    }
}