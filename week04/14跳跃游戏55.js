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