// 有bug，待修改
var maxProfit = function (k, prices) {
    if (prices == null || prices.length == 0) {
        return 0
    }

    let len = prices.length;
    if (k >= len / 2) {
        return maxProfitPrice(prices);
    }


    
    let dp = Array.from(new Array(len), () => new Array(k + 1));
    for (let i = 0; i < len; i++) {
        for (let r = 0; r <= 2; r++) {
            dp[i][r] = new Array(2).fill(0);
        }
    }

    for (let i = 1; i <= k; i++) {
        dp[0][i][0] = 0;
        dp[0][i][1] = -prices[0];
    }

    for (var i = 1; i < len; i++) {
        for (var j = k; j > 0; j--) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
        }
    }
    return dp[len - 1][k][0];
};
function maxProfitPrice(prices) {
    if (prices == null || prices.length == 0) {
        return 0
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
}