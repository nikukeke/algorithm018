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

var twoSum = function (nums, target) {
    let i = 0;
    let temp = [];
    while (i < nums.length) {
        let num = target - nums[i];
        if (temp[num] != undefined) {
            return [temp[num], i];
        }
        temp[nums[i]] = i
        i++;
    }
};
// 三、哈希表
// 用hashMap 存储遍历过的元素和对应的索引
// 每遍历一个元素，看看hashMap中是否存在满足要求的目标数字
// 所有事情在一次遍历中完成（用了空间换取时间）
var twoSum = function (nums, target) {
    // 存储出现过的数字，和对应的索引
    const prevNums = {};
    // 遍历元素
    for (let i = 0; i < nums.length; i++) {
        // 当前元素
        const curNum = nums[i];
        // 满足要求的目标元素
        const targetNum = target - curNum;
        // 在prevNums中获取目标元素的索引
        const targetNumIndex = prevNums[targetNum];
        // 如果存在，直接返回[目标元素的索引，当前索引]
        if (targetNumIndex !== undefined) {
            return [targetNumIndex, i];
        } else {
            // 如果不存在，说明之前每出现过目标元素
            // 存入当前的元素和对应的索引
            prevNums[curNum] = i
        }
    }
};


var twoSum = function (nums, target) {
    let result = [];
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i],i)
    }
    for(let i = 0; i < nums.length; i++) {
        let anotherOne = target - nums[i];
        if(map.has(anotherOne) && map.get(anotherOne) !== i) {
            return [i, map.get(anotherOne)]
        }
    } 
};


var twoSum = function(nums, target){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if (map.has(nums[i])){
            return [map.get(nums[i]),i];
        }else{
            map.set(target-nums[i],i);
        }
    }
}


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