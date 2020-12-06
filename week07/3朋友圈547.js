// 解题思路
// 1、DFS求图的连通分量
// 时间复杂度 O(n^2)
// 空间复杂度 O(n)，访问数组的大小
var findCircleNum = function(M) {
    let n = M.length;
    if(n == 0) {
        return 0;
    }
    let count = 0;
    let dfs = (i) => {
        for(let j = 0; j < n; j++) {
            if(M[i][j] == 1 && !visited[j]) {
                visited[j] = true;
                dfs(j);
            }
        }
    }
    let visited = {};
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    return count;
};

// 2、BFS求图的连通分量
// 时间复杂度 O(n^2)
// 空间复杂度 O(n)，
// DFS是针对一个顶点无限度的追溯与相连的顶点，直到最后一级
// BFS是针对每个顶点的邻接顶点访问，再访问这些邻接顶点的连接顶点，一级或一层层的访问
var findCircleNum = function(M) {
    let n = M.length;
    if(n == 0) {
        return 0;
    }
    let count = 0;
    let bfs = (i) => {
        let queue = [i];
        while(queue.length > 0) {
            let adjacentPoint = queue.pop();
            for(let j = 0; j < n; j++) {
                if(M[adjacentPoint][j] == 1 && !visited[j]) {
                    visited[j] = true;
                    queue.push(j);
                }
            }
        }
    }
    let visited = {};
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            bfs(i);
            count++;
        }
    }
    return count;
};


// 3、并查集 + 路径压缩
var findCircleNum = function(M) {
    let n = M.length;
    if(n == 0) {
        return 0;
    } 
    // 求连通分量
    let count = n;
    // 给每个元素单集建立秩
    let rank = new Array(n);
    let find = (p) => {
        while(p != parent[p]){
            // 路径压缩
            // 区别与上述模版，很巧妙，通过直接将当前结点的父结点直接指向爷爷节点
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    // 查询两个相交集合
    let union = (p,q) => {
        let rootP = find(p);
        let rootQ = find(q);
        // 集合相交则不合并
        if(rootP == rootQ) {
            return
        }
        // 按秩合并
        if(rank[rootP] > rank[rootQ]) {
            parent[rootQ] = rootP;
        } else if(rank[rootP] > rank[rootQ]) {
            parent[rootP] = rootQ;
        } else {
            parent[rootQ] = rootP;
            // 相同的秩都加1
            rank[rootP]++;
        }
        // 求连通分量，每合并两个集合，即整体减少一个独立集合
        count--;
    }
    let parent = new Array(n);
    for(let i = 0; i < n; i++) {
        parent[i] = i;
        // 初始化秩
        rank[i] = 1;
    }
    // 并查集搜查开始
    for(let i = 0; i < n ;i++) {
        for(let j = 0; j < n ; j ++) {
            if(M[i][j] == 1) {
                union(i,j);
            }
        }
    }
    // 返回连通分量结束
    return count;
};

// 4、并查集森林 + 路径压缩 + 按秩合并

var findCircleNum = function (M) {
    let n = M.length;
    if (n == 0) {
        return 0;
    }
    let count = n;
    let rank = new Array(n);
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
            parent[rootQ] = rootP;
            rank[rootP]++;
        }
        count--;
    }
    let parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (M[i][j] == 1) {
                union(i, j);
            }
        }
    }
    return count;
};