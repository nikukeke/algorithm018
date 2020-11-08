// 1、递归
// 时间复杂度：O(N)
// 空间复杂度：O(N)(链)，平均O(logN)
var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};