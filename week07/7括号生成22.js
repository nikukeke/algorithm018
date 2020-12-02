// 解题思路
// 1、回溯
// 卡特兰数
// 时间复杂度：O(4n方/根号n)在回溯过程中，每个答案需要O(n)的时间复制到答案数组中。
// 空间复杂度：O(n)，除了答案数组之外，我们所需要的空间取决于递归栈的深度，每一层
//          递归函数需要O(1) 的空间，最多递归2n层，因此空间复杂度为O(n)。

var generateParenthesis = function (n) {
    const res = [];
    const generate = (str, left, right) => {
        if (str.length == 2 * n) {
            res.push(str)
            return;
        }
        if (left > 0) {
            generate(str + '(', left - 1, right)
        }
        if (right > left) {
            generate(str + ')', left, right - 1)
        }
    }
    generate('', n, n);
    return res;
};

// 2、按括号序列的长度递归