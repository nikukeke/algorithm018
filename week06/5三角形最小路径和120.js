// 解题思路
// 一、动态规划
//    自底向上
// 时间复杂度为O(n^2)
// 空间复杂度为O(n^2)

var minimumTotal = function (triangle) {
    const h = triangle.length;
    const dp = new Array(h);
    for (let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length);
    }
    for (let i = h - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i == h - 1) {
                dp[i][j] = triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }
    return dp[0][0];
};

// 优化 降维
// 时间复杂度为O(n^2)
// 空间复杂度为O(n)
var minimumTotal = function (triangle) {
    const bottom = triangle[triangle.length - 1];
    const dp = new Array(bottom.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = bottom[i];
    }
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j+1])+triangle[i][j];
        }
    }
    return dp[0];
};