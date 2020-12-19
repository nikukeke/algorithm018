var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

// 二、HashMap
var firstUniqChar = function (s) {
    const map = Object.create(null);
    for(let c of s) map[c] ? map[c]++:map[c] = 1
    for(let i = 0, l = s.length; i < l; i++) {
        if(map[s[i]] === 1) return i
    }
    return -1
};

// 三、用字母对应数组下表，构建哈希表 (适用于ASICC字符集合)
var firstUniqChar = function (s) {
    const map = new Array(256).fill(0)
    for(let c of s) map[c.charCodeAt()]++
    for(let i = 0, l=s.length; i<l;i++) {
        if(map[s[i].charCodeAt()] === 1) return i
    }
    return -1
};