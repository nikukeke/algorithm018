// 解题思路
// 1、数理
var isPerfectSquare = function (num) {
    let n = num;
    for (let i = 1; i <= num; i += 2) {
        n = n - i;
        if (n == 0) return true;
        if (n < 0 || n == 1) return false;
    }
};


// 2、二分法
var isPerfectSquare = function (num) {
    if (num == 1) {
        return true;
    }
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        let temp = mid * mid;
        if (temp == num) {
            return true;
        } else if (temp > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};