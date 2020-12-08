// 解题思路
// 1、位移+拼接
//    每次获取原数的最低位，拼接到结果数字结尾里
//      获得下一位时右移原数一位
//      拼接下一位时提前左移结果数一位

var reverseBits = function (n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) + (n & 1);
        n >>= 1;
    }
    return result >>> 0
}

var reverseBits = function (n) {
    let result = 0;
    // result 从右往移动空出来末位 + n从左往右移动获取末位 + n次 = 倒序
    for (let i = 0; i < 32; i++) {
        // 左移空出一位
        result <<= 1
        // n & 1 获取n的末位，result的末位换成n的末位
        result |= n & 1;
        // 右移1位
        n >>= 1;
    }
    return result >>> 0;
}