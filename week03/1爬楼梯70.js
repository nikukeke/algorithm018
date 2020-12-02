// 解题思路
// 1、动态规划
// 爬n级台阶的方式数 = 爬n-1级台阶的方式数 + 爬n-2级台阶的方式数
// 调用栈的深度是楼梯数n
// 空间复杂度是O(n),时间复杂度是O(n)
var climbStairs = function (n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};

// 2、优化
// 因为dp[i]只和dp[i-1]和dp[i-2]有关，所以可以分别用变量存储
// 空间复杂度：O(1)
var climbStairs = function (n) {
    let prev = 1;
    let cur = 1;
    for (let i = 2; i < n + 1; i++) {
        const temp = cur;
        cur = prev + cur;
        prev = temp;
    }
    return cur;
};

// 3、斐波那契公式
// 时间复杂度O(logn),pow 方法将会用去O(logn) 的时间
// 空间复杂度：O(1)
var climbStairs = function (n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
    return Math.round(fib_n / sqrt_5);
};


// 超时递归
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};