// 解题思路：
// 1、DFS
//      遇到“1”，则岛屿数量+1，且将相邻所有陆地变为0，直至遍历完整个网格

var numIslands = function (grid) {
    // 边界处理
    if (!grid.length) return 0;
    // row 行数， col列数
    const row = grid.length, col = grid[0].length
    let quantity = 0;

    const dfs = (grid, i, j) => {
        // 递归终止条件
        // 条件一： 要在网格范围内
        if (i < 0 || j < 0 || i >= row || j >= col) return;
        // 条件二：当前值为‘1’
        if (grid[i][j] !== '1') return;
        // 处理当前层逻辑 是‘0’不是0
        grid[i][j] = '0';
        // 下沉，方向上下左右
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
    // 遍历整个网格
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                quantity++;
                dfs(grid, i, j);
            }
        }
    }
    return quantity;
};

