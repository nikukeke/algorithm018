// 解题思路
// 一、双指针
// 时间复杂度O(n)
// 空间复杂度O(1)
// 1、i，j指针初始指向索引0
// 2、i负责扫描整个数组，遇到了非0项，就与j指向的项交换，不管它是否为零
// 3、所以非零项都被交换到数组的前部，0被交换到数组的尾部

var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
};

// 解题思路
// 二、直接覆盖
// 时间复杂度O(n)
// 空间复杂度O(1)
// 1、遍历数组，非零项直接移动到数组前部，从头部开始覆盖
// 2、剩下的项目覆盖零

var moveZeroes = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};


var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[j++], nums[i]] = [nums[i], nums[j]]
        }
    }
};