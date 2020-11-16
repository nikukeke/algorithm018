// 解题思路
// 1、递归 

var combine = function (n, k) {
    const res = [];
    // start是枚举选择的起点 path是当前构建的路径（组合）
    const helper = (start, path) => {
        if (path.length == k) {
            // 拷贝一份path，推入res
            res.push(path.slice());
            // 结束当前递归
            return;
        }
        // 枚举出所有选择
        for (let i = start; i <= n; i++) {
            // 选择
            path.push(i);
            // 向下继续选择
            helper(i + 1, path);
            // 撤销选择
            path.pop();
        }
    }
    helper(1, []);
    return res;
};