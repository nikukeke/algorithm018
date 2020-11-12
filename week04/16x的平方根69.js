// 解题思路
// 1.
var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x;
    };
    let left = 1;
    let right = x;
    while (right - left > 1) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid > x) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return left;
};