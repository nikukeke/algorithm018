
var maxProfit = function (prices) {
    let ans = 0;
    let len = prices.length;
    for(let i = 1; i < len; i++) {
        ans += Math.max(0,prices[i] - prices[i-1])
    }
    return ans;
};

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
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[len - 1][0]
};

var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) {
        return 0;
    }
    let profit0 = 0;
    let profit1 = -prices[0];
    let len = prices.length;
    for (let i = 1; i < len; i++) {
        let newProfit0 = Math.max(profit0, profit1 + prices[i]);
        let newProfit1 = Math.max(profit1, profit0 - prices[i])
        profit0 = newProfit0;
        profit1 = newProfit1;
    }
    return profit0
};

