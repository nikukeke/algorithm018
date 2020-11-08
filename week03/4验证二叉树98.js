// 一、递归
// 时间复杂度: O(n)
// 空间复杂度: O(n)
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity)
};

const helper = (root, lower, upper) => {
    if (root == null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}

// 二、中序遍历
// 时间复杂度: O(n)
// 空间复杂度: O(n)
var isValidBST = function (root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};