// 解题思路
// 一、排序法
// 字符串用sort按字符编码的顺序默认排序，做哈希表key
var groupAnagrams = function (strs) {
    let hash = {};
    for (let str of strs) {
        let key = Array.from(str).sort().join();
        hash[key] ? hash[key].push(str) : hash[key] = [str]
    }
    return Object.values(hash);
};

// 二、二进制法
// charCodeAt字母的ASCII码-97(a的ASCII码)，从0到26填充数组
// [00000000000000000000000001]表示a出现1次。toString逗号连成字符串作哈希表key

var groupAnagrams = function (strs) {
    let hash = {};
    for (let str of strs) {
        for (var i = str.length, p = new Array(26).fill(0); i--;) {
            p[str[i].charCodeAt() - 97]++
        }
        let key = p.toString();
        hash[key] ? hash[key].push(str) : hash[key] = [str]
    }
    return Object.values(hash);
};

// 三、质数法
// 从2到101共26个质数，对应字符a-z
// 因为为质数，质数不同，乘积不同。质数相同，乘积相同
// 字母顺序不同，但对应质数相同，乘积一定相同，乘积作哈希表key

var groupAnagrams = function (strs) {
    let hash = {};
    var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    for (let str of strs) {
        let key = Array.from(str).reduce((p, v) => p * prime[v.charCodeAt() - 97], 1)
        hash[key] ? hash[key].push(str) : hash[key] = [str]
    }
    return Object.values(hash);
};