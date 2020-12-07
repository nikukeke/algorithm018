// 解题思路
// 1、二分法
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (nums[mid] === target) return mid;

        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (target < nums[0] && target > nums[mid]) {
            left = mid + 1;
        } else if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left == right && nums[left] == target ? left : -1;
}