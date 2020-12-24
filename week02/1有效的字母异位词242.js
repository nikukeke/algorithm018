// 解题思路
// 1、排序
//    先用split将字符串转化为数组
//    再执行sort进行排序
//    再把数组join转化为字符串
//    返回两个字符串的强对比
// 时间复杂度为O(nlogn), 空间复杂度O(logn)
var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};


// 2、哈希
//    两个计数器进行比较，s++，j--，最后结果键值全部为0
//    时间复杂度为O(n)

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var hash = Array(26).fill(0);
    var codeA = 'a'.charCodeAt();
    let length = s.length;
    for (let i = 0; i < length; i++) {
        hash[s.charCodeAt(i) - codeA]++;
        hash[t.charCodeAt(i) - codeA]--;
    }
    for (let value of hash) {
        if (value != 0) {
            return false;
        }
    }
    return true;
};

