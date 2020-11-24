// 解题思路
// 1、dp
var climbStairs = function (n) {
    let cb = [];
    cb[0] = 1;
    cb[1] = 1;
    for (let i = 2; i <= n; i++) {
        cb[i] = cb[i - 1] + cb[i - 2]
    }
    return cb[n]
};