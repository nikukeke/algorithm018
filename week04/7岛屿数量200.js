var numIslands = function (grid) {
    if (!grid.length) return 0;
    const row = grid.length, col = grid[0].length
    let quantity = 0;

    const dfs = (grid, i, j) => {
        if (i < 0 || j < 0 || i >= row || j >= col) return;
        if (grid[i][j] !== '1') return;

        grid[i][j] = '0';

        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
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