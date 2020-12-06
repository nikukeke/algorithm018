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



//DFS

var numIslands = function (grid) {
    if (!grid || grid.length == 0) {
        return 0;
    }
    var len = grid.length;
    var size = grid[0].length;
    var island = 0;
    function sink(i, j) {
        // terminator
        if (grid[i][j] == '0') {
            return 0;
        }
        // process
        grid[i][j] = '0';
        // drill down
        if (i + 1 < len && grid[i + 1][j] == '1') {
            sink(i + 1, j);
        }
        if (i - 1 >= 0 && grid[i - 1][j] == '1') {
            sink(i - 1, j);
        }
        if (j + 1 < size && grid[i][j + 1] == '1') {
            sink(i, j + 1);
        }
        if (j - 1 >= 0 && grid[i][j - 1] == '1') {
            sink(i, j - 1);
        }
        return 1;
    }
    for (var i = 0; i < len; i++) {
        for (var r = 0; r < grid[i].length; r++) {
            if (grid[i][r] == '1') {
                island += sink(i, r);
            }
        }
    }
    return island;
};


var numIslands = function (grid) {
    if (!grid || grid.length == 0) {
        return 0;
    }
    var len = grid.length;
    var size = grid[0].length;
    var island = 0;
    // 方向向量
    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];
    // dfs 推平
    function sink(i, j) {
        // terminator
        if (grid[i][j] == '0') {
            return 0;
        }
        // process
        grid[i][j] = '0';
        // drill down
        for (var k = 0; k < dx.length; k++) {
            var x = i + dx[k];
            var y = j + dy[k];
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[i].length) {
                if (grid[x][y] == '1') {
                    sink(x, y)
                }
            }
        }
        return 1;
    }
    for (var i = 0; i < len; i++) {
        for (var r = 0; r < grid[i].length; r++) {
            if (grid[i][r] == 1) {
                island += sink(i, r);
            }
        }
    }
    return island;
};

// 优化
// BFS
var numIslands = function (grid) {
    if (!grid || grid.length == 0) {
        return 0;
    }
    var len = grid.length;
    var size = grid[0].length;
    var island = 0;
    // 从右到左 队列
    var queue = [];
    // 方向向量
    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];
    // dfs 推平
    function sink(i, j) {
        // terminator
        if (grid[i][j] == '0') {
            return 0;
        }
        // process
        grid[i][j] = '0';
        // drill down
        for (var k = 0; k < dx.length; k++) {
            var x = i + dx[k];
            var y = j + dy[k];
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[i].length) {
                if (grid[x][y] == '1') {
                    queue.push([x, y]);
                }
            }
        }
        return 1;
    }
    for (var i = 0; i < len; i++) {
        for (var r = 0; r < grid[i].length; r++) {
            if (grid[i][r] == 1) {
                island++;
                queue.push([i, r])
                while (queue.length > 0) {
                    var tmpIsland = queue.shift();
                    sink(tmpIsland[0], tmpIsland[1]);
                }
            }
        }
    }
    return island;
};


// 并查集
var numIslands = function (grid) {
    let m = grid.length;
    if (m == 0) {
        return 0;
    }
    let n = grid[0].length;
    let count = 0;
    let parent = [];
    let rank = [];


    let find = (p) => {
        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    let union = (p, q) => {
        let rootP = find(p);
        let rootQ = find(q);
        if (rootP == rootQ) {
            return;
        }
        if (rank[rootP] > rank[rootQ]) {
            parent[rootQ] = rootP;
        } else if (rank[rootP] < rank[rootQ]) {
            parent[rootP] = rootQ;
        } else {
            parent[rootP] = rootQ;
            rank[rootQ]++;
        }
        count--;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                parent[i * n + j] = i * n + j;
                count++;
            }
            rank[i * n + j] = 0;
        }
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                grid[i][j] = 0;
                i - 1 >= 0 && grid[i - 1][j] == 1 && union(i * n + j, (i - 1) * n + j);
                j - 1 >= 0 && grid[i][j - 1] == 1 && union(i * n + j, i * n + j - 1);
                i + 1 < m && grid[i + 1][j] == 1 && union(i * n + j, (i + 1) * n + j);
                j + 1 < n && grid[i][j + 1] == 1 && union(i * n + j, i * n + j + 1);
            }
        }
    }
    return count;
};


