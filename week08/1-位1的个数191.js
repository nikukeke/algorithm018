// 解题思路
// 一、循环和位移动
// 时间复杂度: O(1)。运行时间依赖于数字n的位数。由于这题中n是一个32位数，所以运行时间是O(1)的。
// 空间复杂度: O(1)。没有使用额外空间。
var hammingWeight = function (n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) != 0) {  // 按位与，只要有一个二进制为0，那么与出来的结果就是0
            count++;
        }
        mask <<= 1
    }
    return count;
};

// 二、位操作技巧
var hammingWeight = function (n) {
    let sum = 0;
    while (n != 0) {
        sum++;
        n &= (n - 1)
    }
    return sum;
};

// 三、正则匹配
var hammingWeight = function (n) {
    return ((n.toString(2).match(/1/g)) || []).length;
};

// 四、模拟十转二进制、取模
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        // n % 2 == 1;
        if (n & 1 == 1) {
            count++;
        }
        n >>>= 1;
    }
    return count;
}