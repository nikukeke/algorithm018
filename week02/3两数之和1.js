// 解题思路
// 1、哈希
//    用hashMap 存遍历过的元素和对应的索引
//    每访问一个元素，查看hashMap中是否存在满足要求的目标数字
//    所有事情在一次遍历中完成(用了空间换取时间)

var twoSum = function (nums, target) {
    let i = 0;
    let temp = [];
    while (i < nums.length) {
        let num = target - nums[i];
        if (temp[num] != undefined) {
            return [temp[num], i];
        }
        temp[nums[i]] = i;
        i++;
    }
};

// 2、寻找差值
//    1.用while循环从后往前遍历
//    2.每次遍历先pop最后一个值，再通过indexOf来查找是否有对应的差，pop的好处
//      是为了防止两个数相等
//    3.如果有对应的值，所有就是indexOf和数组的长度
var twoSum = function (nums, target) {
    let i = nums.length;
    while (i > 0) {
        let lastNum = nums.pop();
        if (nums.indexOf(target - lastNum) > -1) {
            return [nums.indexOf(target - lastNum), nums.length];
        }
    }
    i--;
};


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