// 解题思路
// 1、直接排序
var getLeastNumbers = function (arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k)
};