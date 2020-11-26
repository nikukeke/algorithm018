var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0
    }
    let len = prices.length;
    let dp = Array.from(new Array(len), () => new Array(3));
    for (let i = 0; i < len; i++) {
        for (let r = 0; r <= 2; r++) {
            dp[i][r] = new Array(2).fill(0);
        }
    }
    dp[0][1][0] = 0;
    dp[0][1][1] = -prices[0];
    dp[0][2][0] = 0;
    dp[0][2][1] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
        dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);
        dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
    }
    return dp[len - 1][2][0]
};