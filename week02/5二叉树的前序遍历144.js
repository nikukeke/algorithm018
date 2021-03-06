// 解题思路
// 1、递归
//    二叉树的中序遍历 根结点-左子树-右子树
//    对每个节点，都是先处理当前节点，拿这个节点执行我们的处理逻辑，再递归它的左子树，
//    然后递归它的右子树，对子数中的节点执行相同的逻辑。
var preorderTraversal = function (root) {
    const res = [];
    const preOrder = (root) => {
        if (!root) {
            return false;
        }
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return res;
};

// 2、迭代版
//    1.维护一个栈stack，模拟递归的压栈出栈。
//    2.比照递归DFS，我们首先让左子节点尽可能地压入栈
//    3.循环结束时，栈顶的节点是位于树地部最左的一个左子节点，让它出栈，带出它的右
//      子节点入栈（如果有）
//    4.并且这个右子节点，也要重复前面的逻辑『让左节点尽可能的压入栈』，可以看到这
//      部分代码重复了两次：
//    5.没有了左节点可入栈，就取出栈顶的节点，重复上面的操作，栈中节点的出栈，“牵扯”
//      出所有的右子树，从而遍历了整个树。
//    6.我们知道，前序遍历是在递归左子树和递归右子树之前，处理当前节点，对迭代版来说，
//      就是压栈之前做事——把节点值推入 res 数组。
var preorderTraversal = function (root) {
    const res = [];
    const stk = [];
    while (root) {
        res.push(root.val);
        if (root.right) stk.push(root.right);
        root = root.left
    }
    while (stk.length) {
        root = stk.pop();
        res.push(root.val);
        if (root.right) stk.push(root.right);
        root = root.left;
        while (root) {
            res.push(root.val);
            if (root.right) stk.push(root.right);
            root = root.left;
        }
    }
    return res;
};