var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0;
    }
    let len = prices.length;
    let dp = Array.from(new Array(len), () => new Array(2));
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    return dp[len - 1][0]
};


var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0;
    }
    let profit0 = 0, profit1 = -prices[0];
    let len = prices.length;

    for (let i = 1; i < len; i++) {
        profit0 = Math.max(profit0, profit1 + prices[i]);
        profit1 = Math.max(profit1, -prices[i]);
    }
    return profit0
};
