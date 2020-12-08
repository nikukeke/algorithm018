// 解题思路
// 1、位运算
// DFS
// 当前列、左斜对角线、右斜对角线
// 二进制为1代表不可放置，0相反
// x & -x: 得到最低位的1
// x & (x-1): 清零最低位的1
// x & ((1 << n) - 1)：将x最高位至第n位(含)清零
var totalNQueens = function (n) {
    let res = 0;
    const dfs = (n, row, cols, pie, na) => {
        if (row >= n) {
            res++;
            return;
        }
        // 得到当前所有的空位
        let bits = (~(cols | pie | na)) & ((1 << n) - 1)
        while (bits) {
            // 取最低位的1
            let p = bits & -bits
            // 把P位置上放入皇后
            bits = bits & (bits - 1)
            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)
        }
    }
    dfs(n, 0, 0, 0, 0);
    return res;
};