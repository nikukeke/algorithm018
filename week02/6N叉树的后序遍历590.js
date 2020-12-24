// 解题思路
// 1、递归
var postorder = function (root) {
    const res = [];
    function postorderTraveral(root) {
        if (root !== null) {
            root.children.forEach(child => postorderTraveral(child))
            res.push(root.val)
        }
    }
    postorderTraveral(root);
    return res;
};

// 二、栈
// 1、后序遍历输出节点的顺序是从下到上，从左到右。
// 2、我们可以使用栈来进行遍历，每次循环入栈元素都为从上到下，从左到右。
// 3、那么每次循环时出栈元素的顺序都为从上到下，从右到左。
// 4、但此时的栈的元素输出顺序与需要的结果顺序正好相反。
// 5、解决方案就是将输出的结果插入到结果数组的头部，这样最终输出结果顺序就为从下到上，从左到右。

var postorder = function (root) {
    let res = [];
    let stk = [];
    root && stk.push(root);
    // 遍历，直到清空栈，即为遍历所有节点
    while (stk.length) {
        // 从栈中弹出元素，顺序为从上到下，从右到左
        const node = stk.pop();
        // 将节点的值插入到结果数组的前端
        // 保证了输出结果的顺序为从上到下，从左到右
        res.unshift(node.val);
        // 将子节点按照从左到右入栈，保证来出栈顺序
        if (node.children) {
            for (const child of node.children) {
                stk.push(child);
            }
        }
    }
    return res;
};