// 解题思路
// 1、DFS
var largestValues = function (root) {
    let result = [];
    function bfs(node, level) {
        if (!node) {
            return;
        }  
        typeof result[level] === "number"
            ? (result[level] = Math.max(node.val, result[level]))
            : (result[level] = node.val)
        const newLevel = level + 1;
        bfs(node.left, newLevel);
        bfs(node.right, newLevel);
    }
    bfs(root, 0);
    return result;
};

var largestValues = function (root) {
    let result = [];
    function bfs(node, level) {
        if (!node) {
            return;
        }
        if (level >= result.length) {
            result[level] = Number.MIN_SAFE_INTEGER
        }
        result[level] = Math.max(result[level], node.val)
        const newLevel = level + 1;
        bfs(node.left, newLevel);
        bfs(node.right, newLevel);
    }
    bfs(root, 0);
    return result;
};

// 2、bfs
var largestValues = function (root) {
    if (!root) {
        return [];
    }
    const res = [], queue = [root];
    while (queue.length) {
        const curLevLen = queue.length;
        let curMax = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < curLevLen; i++) {
            const node = queue.shift();
            curMax = Math.max(curMax, node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(curMax);
    }
    return res;
};