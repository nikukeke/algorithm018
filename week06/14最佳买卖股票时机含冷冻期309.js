var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0;
    }
    let len = prices.length;
    let dp = Array.from(new Array(len), () => new Array(2));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], (i >= 2 ? dp[i - 2][0] : 0) - prices[i]);
    }
    return dp[len - 1][0]
};


var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0;
    }
    let prevProfit0 = 0;
    let profit0 = 0;
    let profit1 = -prices[0];
    let len = prices.length;
    for (let i = 1; i < len; i++) {
        let nextProfit0 = Math.max(profit0, profit1 + prices[i]);
        let nextProfit1 = Math.max(profit1, prevProfit0 - prices[i])
        prevProfit0 = profit0;
        profit0 = nextProfit0;
        profit1 = nextProfit1;
    }
    return profit0
};
