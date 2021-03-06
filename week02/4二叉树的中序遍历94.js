// 解题思路
// 1、递归
// 二叉树的中序遍历 左子树-根结点-右子树
// 时间复杂度 O(n)，其中n为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
// 空间复杂度 O(n)，空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n)的级别。
var inorderTraversal = function (root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right)
    }
    inorder(root);
    return res;
};

// 2、栈
// 方法一的递归函数我们也可以用迭代的方式实现，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，
// 而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同，具体实现可以看下面的代码
// 时间复杂度 O(n)
// 空间复杂度 O(n)
var inorderTraversal = function (root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};