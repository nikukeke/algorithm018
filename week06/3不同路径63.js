// 解题思路
// 一、暴力递归 -- 超时
var uniquePathsWithObstacles = function (obstacleGrid) {
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    if (!obstacleGrid || obstacleGrid[0][0] == 1) {
        return 0;
    }
    function helper(i, j) {
        var tmp = 0;
        if (i == n - 1 && j == m - 1 && obstacleGrid[i][j] != 1) {
            return 1;
        }
        if (i >= n || j >= m || obstacleGrid[i][j] == 1) {
            return 0;
        }
        tmp += helper(i + 1, j);
        tmp += helper(i, j + 1);
        return tmp;
    }
    return helper(0, 0);
};

// 二、动态规划
// 时间复杂度: O(mn)
// 空间复杂度: O(mn)

var uniquePathsWithObstacles = function (obstacleGrid) {
    // 出发点就是障碍物情况
    if (obstacleGrid[0][0] == 1) return 0;
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    dp[0][0] = 1;
    // 第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 1 ? 0 : 1
    }
    // 第一行
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] == 1 || dp[0][j - 1] == 1 ? 0 : 1
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};

// 与62 不同路径 
//  区别就是此题设置了障碍物而已
//  既然是障碍物，说明此路不通，即经过此节点的路径数为0，所以当遇到障碍物时，设置dp[i][r] = 0即可
//  那么第一行第一列数据初始化的时候就不能都是1了，因为有的地方有障碍物存在
//  初始化dp二维数组的时候各个节点都不可达
//      这样dp递推的时候，只需要在62题的基础上加上obstacleGrid[i][j]当前节点不为障碍物的条件即可
//      而有障碍物的地方为0，加0也就等于没走


// 三、动态规划-压缩降维
// 减少空间复杂度
// 时间复杂度: O(mn)
// 空间复杂度: O(n)
var uniquePathsWithObstacles = function (obstacleGrid) {
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var result = Array(m).fill(0);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (i == 0 && j == 0) {
                result[j] = 1;
            }
            if (obstacleGrid[i][j] == 1) {
                result[j] = 0;
            } else if (j > 0) {
                result[j] += result[j - 1]
            }
        }
    }
    return result[m - 1]
};

// 优化
//      初始化第一步可达，为1
//      for双循环内就可以少一层判断

// 时间复杂度: O(mn)
// 空间复杂度: O(n)
var uniquePathsWithObstacles = function (obstacleGrid) {
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var result = Array(m).fill(0);
    result[0] = 1;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (obstacleGrid[i][j] == 1) {
                result[j] = 0;
            } else if (j > 0) {
                result[j] += result[j - 1]
            }
        }
    }
    return result[m - 1]
};