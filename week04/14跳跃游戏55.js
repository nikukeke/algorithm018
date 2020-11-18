var canJump = function (nums) {
    let lenPoint = nums.length - 1;
    let leftPos = lenPoint;
    for (let left = lenPoint; left >= 0; left--) {
        if (nums[left] + left >= leftPos) {
            leftPos = left;
        }
    }
    return leftPos == 0;
};

var canJump = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) return false;
        k = Math.max(k, i + nums[i]);
    }
    return true;
};

