// 解题思路
// 一、2的幂数的数字的二进制特点 + 位操作
//    2的幂数的数字的二进制有且只有一个1，其余均是0
//    n&(n-1)：清零最低位的1
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) == 0
};

// 二、调用函数
var isPowerOfTwo = function (n) {
    return Number.isInteger(Math.log2(n));
};

// 三、位运算
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (-n)) == n
};

// 四、取模
var isPowerOfTwo = function (n) {
    while (n > 1) {
        n /= 2;
    }
    if (n == 1) {
        return true;
    } else {
        return false;
    }
};