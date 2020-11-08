// 一、递归
// 时间复杂度：O(n)
// 空间复杂度：O(height)，其中height表示二叉树的高度
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1
};

// 二、广度优先搜索
// 时间复杂度：O(n)，其中n为二叉树的节点个数
// 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到O(n)