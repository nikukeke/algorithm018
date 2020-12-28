// 解题思路
// 一、
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


// 二、暴力循环
// 旋转k次
// 每次旋转都取出数组最后一个元素插入到队首
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
}

// 三、splice
// 利用spilice的添加和删除特性
// nums.splice(nums.length - k)取出需旋转的数组
// splice添加到队首
var rotate = function (nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k))
}

// 四、unshift + splice
// 利用splice的删除特性
// nums.splice(nums.length - k )取出需旋转的数组
// unshift添加到队首 

var rotate = function (nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
}