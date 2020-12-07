// 解题思路
// 1、二分法
var searchMatrix = function (matrix, target) {
    matrix = matrix.flat(2);
    let left = 0;
    let right = matrix.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (target == matrix[mid]) {
            return true;
        } else if (matrix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};