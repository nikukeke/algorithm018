// 解题思路
// 1、递归
var postorder = function (root) {
    const res = [];
    function traveral(root) {
        if (root !== null) {
            root.children.forEach(child => traveral(child))
            res.push(root.val)
        }
    }
    traveral(root);
    return res;
};