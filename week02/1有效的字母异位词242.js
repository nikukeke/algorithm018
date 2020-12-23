// 解题思路
// 1、排序
//    先用split将字符串转化为数组
//    再执行sort进行排序
//    再把数组join转化为字符串
//    返回两个字符串的强对比
// 时间复杂度为O(nlogn), 空间复杂度O(1)
var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};


// 2、哈希
//    两个计数器进行比较，s++，j--，最后结果键值全部为0
//    时间复杂度为O(n), 空间复杂度O(1)
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

// 3、reduce + hash
//    用哈希表h存储任一字符串【字符，字符出现次数】
//    遍历另一字符串，消费哈希表h中字符，剩余次数 = 字符出现次数 - 1
//          出现h中没有的字符
//          有，但是剩余次数为0
//          遍历完，h中还有没被消费的字符
//    以上出现一种，则返回false
//    unicode字符被当作单一字符处理，与普通字符一样适用本方法
var isAnagram = function (s, t) {
    return h = s.split('').reduce((p, v) => (p[v] = (p[v] || 0) + 1, p), {}), t.split('').every(v => h[v] && h[v]-- || false) && !Object.values(h).find(v => v)
};