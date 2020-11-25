// 解题思路
// 一、动态规划
var rob = function (nums) {
    var n = nums.length;
    if (n == 1) {
        return nums[0]
    } else if (n == 0) {
        return 0;
    }
    function dpoo(nums) {
        var n = nums.length;
        var dp = Array.from(new Array(n), () => new Array(n));
        dp[0][0] = 0;
        dp[0][1] = nums[0];
        for (var i = 1; i < nums.length; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
            dp[i][1] = nums[i] + dp[i - 1][0];
        }
        return Math.max(dp[n - 1][0], dp[n - 1][1])
    }
    var need1 = dpoo(nums.slice(1));
    var need2 = dpoo(nums.slice(0, nums.length - 1));
    return Math.max(need1, need2);
};


// 二、降维
var rob = function (nums) {
    var n = nums.length;
    if (n == 1) {
        return nums[0]
    } else if (n == 0) {
        return 0;
    }
    function dpoo(nums) {
        var n = nums.length;
        var dp = new Array(n - 1);

        dp[0] = 0;
        dp[1] = nums[0];
        for (var i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
        }
        return dp[n - 1]
    }
    var need1 = dpoo(nums.slice(1));
    var need2 = dpoo(nums.slice(0, nums.length - 1));
    return Math.max(need1, need2);
};


// 三、去维
var rob = function (nums) {
    var n = nums.length;
    if (n == 1) {
        return nums[0]
    } else if (n == 0) {
        return 0;
    }
    function dpoo(nums) {
        var prevMax = 0;
        var currMax = 0;
        for (var i = 0; i < nums.length; i++) {
            var tmp = currMax;
            currMax = Math.max(currMax, prevMax + nums[i]);
            prevMax = tmp;
        }
        return currMax;
    }
    var need1 = dpoo(nums.slice(1));
    var need2 = dpoo(nums.slice(0, nums.length - 1));
    return Math.max(need1, need2);
};