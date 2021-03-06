// 1、深度优先搜索
// 时间复杂度：O(n)，其中N是树的节点数。对每个节点访问一次。
// 空间复杂度：O(height)，其中height表示树的高度，平均O(logN)，最坏O(n)
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    if (root.left != null) {
        ans = Math.min(minDepth(root.left), ans);
    }
    if (root.right != null) {
        ans = Math.min(minDepth(root.right), ans);
    }
    return ans + 1;
};

// 2、广度优先搜索
// 时间复杂度：O(n)
// 空间复杂度：O(n)

var minDepth = (root) => {
    if (root == null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur.left == null && cur.right == null) {
                return depth;
            }
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        depth++;
    }
}