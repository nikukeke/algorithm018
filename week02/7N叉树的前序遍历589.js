// 解题思路
// 一、前序遍历递归写法
var preorder = function (root) {
    const res = [];
    function traversal(root) {
        if (root != null) {
            res.push(root.val);
            root.children.forEach(child => traversal(child))
        }
    }
    traversal(root)
    return res;
};

var preorder = function (root) {
    const res = [];
    var diff = function (node) {
        if (node === null) {
            return
        }
        res.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            diff(node.children[i])
        }
        return
    }
    diff(root)
    return res;
};

// 二、利用栈，层序遍历的思想，然后通过改变当前遍历节点的子几点children的插入位置来实现的
var preorder = function (root) {
    if (root === null) {
        return []
    }
    let array = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let node = queue.shift()
        array.push(node.val);
        if (node.children.length > 0) {
            queue = node.children.concat(queue);
            // 这里有别于层序遍历，用node.children链接queue，而不是
            // queue.concat(node.children)这样就实现了前序遍历的效果
        }
    }
    return array;
};