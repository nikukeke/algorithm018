// 解题思路
// 1.BFS
// 时间复杂度：O(N)
// 空间复杂度：O(N)
var levelOrder = function (root) {
    const result = [];
    if (!root) {
        return result;
    }
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const currentLevelSize = queue.length;
        result.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = queue.shift();
            result[result.length - 1].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
};

// 2.DFS
var levelOrder = function (root) {
    if (!root) return []
    let res = []
    dfs(root, 0, res)
    return res;
};
function dfs(root, step, res) {
    if (root) {
        if (!res[step]) res[step] = [];
        res[step].push(root.val)
        dfs(root.left, step + 1, res);
        dfs(root.right, step + 1, res);
    }
}