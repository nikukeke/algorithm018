// 解题思路
// 1、二分法
var searchMatrix = function (matrix, target) {
    matrix = matrix.flat(2);
    let start = 0, end = matrix.length - 1;
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (matrix[mid] === target) {
            return true;
        } else if (matrix[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};