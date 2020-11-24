// 解题思路
// 一、排列组合
//      如何向右移动一格用0表示，向下移动一格用1来表示。那么，这道题就是看m-1个0和
//      n-1个1能产生多种不重复的排列组合
//     即在n+m-2个位置里，m-1个0和n-1个1有多少种不重复的排列组合
//     C_{n+m-2}^{n-1} = (n+m-2)!/((n-1)!*(m-1)!)
//  时间复杂度: O(m+n),递归求阶乘的最大深度为n+m-2
//  空间复杂度: O(1)
var uniquePaths = function (m, n) {
    return fr(n + m - 2) / (fr(n - 1) * fr(m - 1))
};
var fr = (i) => {
    if (i <= 1) return 1;
    return i * fr(i - 1);
}

// 二、动态规划
// 机器人只能向下或向右移动，所以：
// 那么从左上角到右下角的走法 = 从右边开始走的路径总数+从下边开始走的路径总数
// dp[i][j] = dp[i-1][j] + dp[i][j-1]
// dp矩阵的最上一行与最左一列可初始化为1，因为，一直向下或一直向右不转向的话，只有一种走法
// 时间复杂度: O(m*n). dp[i][j] = dp[i][j-1] + dp[i-1][j]; 运行了(n-1)*(m-1) 次.
// 空间复杂度: O(n*m). 二维数组 dp包含n个一维数组, 每个一维数组里有m个元素.

var uniquePaths = function (m, n) {
    var dp = new Array(m);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        dp[i][0] = 1;
    }
    for (let j = 0; j < m; j++) {
        dp[0][j] = 1;
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[n - 1][m - 1];
};


// 优化
//      减少空间复杂度
//      变为O(2n)
//      分析:
//          由解法一可知：从左上角到右下角的走法 = 从右边开始走的路径总数 + 从下边开始走的路径总数
//          下一行的值 = 当前行的值 + 上一行的值
//          dp[i][j] = dp[i-1][j] + dp[i][j-1]
//          <=> dp[j] = dp[j] + dp[j-1]
//          此时的dp[j-1]代表上一阶段dp[j]的值
//          即仅仅维护递推状态的最后两个状态


var uniquePaths = function (m, n) {
    var pre = new Array(n).fill(1);
    var cur = new Array(n).fill(1);
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            cur[j] = cur[j - 1] + pre[j]
        }
        pre = cur.slice(0);
    }
    return pre[n - 1];
};


var uniquePaths = function (m, n) {
    var cur = new Array(n).fill(1);
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            cur[j] = cur[j - 1] + cur[j]
        }
    }
    return cur[n - 1];
};

