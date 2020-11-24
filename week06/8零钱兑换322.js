// 解题思路

// 一、暴力递归
var coinChange = function (coins, amount) {
    this.cal = function (amount) {
        // 目标金额为0，所需硬币数量为0
        if (amount === 0) {
            return 0;
        }
        if (amount < 0) {
            return -1;
        }

        // 正无穷大的数值
        let result = Infinity;
        for (let coin of coins) {
            // 计算子问题
            const subResult = cal(amount - coin);
            // 子问题无解
            if (subResult === -1) {
                continue;
            }
            // 个数为 1 + 子问题的解, 1为选择来当前coin金额的硬币
            result = Math.min(result, 1 + subResult);
        }
        return result != Infinity ? result : -1;
    };
    return cal(amount);
};


// 二、动态规划-自上而下
//      首先定义F(S):组合金额S所需的最少硬币数量
//      [c0...cn-1]:可选的n枚硬币面额值

//      假设我们知道 F(S)F(S) ，即组成金额 SS 最少的硬币数，最后一枚硬币的面值是C。
//      那么由于问题的最优子结构，转移方程应为
//                      F(S) = F(S-C)+1
//      但由于不知道最后一枚硬币的面值是多少，所以我们需要枚举每个硬币面额值并选择其中的最小值。

// 时间复杂度:O(Sn)，其中S是金额，n是面额数。我们一共需要计算S个状态的答案，且每个状态F(S)由于
//           上面的记忆化的措施只己算了一次，而计算一个状态的答案需要枚举n个面额值，所以一共需
//           要O(Sn)的时间复杂度。
// 空间复杂度:O(S)，我们需要额外开一个长为S的数组来存储计算出来的答案F(S)

// 解法一优化

var coinChange = function (coins, amount) {
    let subResultMap = {};
    this.cal = function (amount) {
        if (subResultMap[amount] !== undefined) {
            return subResultMap[amount];
        }
        if (amount === 0) {
            return 0;
        }
        if (amount < 0) {
            return -1;
        }
        let result = Infinity;
        for (let coin of coins) {
            // 计算子问题
            const subResult = cal(amount - coin);
            // 子问题无解
            if (subResult === -1) {
                continue;
            }
            // 个数为1 + 子问题的解
            result = Math.min(result, 1 + subResult);
        }
        subResultMap[amount] = result == Infinity ? -1 : result;
        return subResultMap[amount];
    }
    return this.cal(amount);
};


// 三、动态规划：自下而上
//      我们采用自下而上的方式进行思考。仍定义F(i)为组成金额i所需最少的硬币数量，假设在计算F(i)
//      之前，我们已经计算出F(0) - f(i-1)的答案。则F(i)对应的转移方程应为:
//                      F(i) = min F(i-cj) + 1  *(min范围j=0...n-1)
//      其中cj代表的是第j枚硬币的面值，即我们美剧最后一枚硬币面额是cj,那么需要从i-cj这个金额的
//      状态F(i-cj)转移过来，再算上枚举的这枚硬币数量1的贡献，由于要硬币数量最少，所以F(i)为前
//      面能转移过来的状态的最小值加上枚举的硬币数量1。

// 时间复杂度:O(Sn),其中S是金额，n是面额数。我们一共需要计算O(S)个状态，S为题目所给的总金额。对
//           于每个状态，每次需要枚举n个面额来转移状态，所以一共需要O(Sn)的时间复杂度。
// 空间复杂度:O(S)，DP数组需要开长度为总金额S的空间。

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// 优化
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};