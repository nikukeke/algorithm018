

// 一、语言内置函数
// 时间复杂度:O(n), 其N为输入字符串的长度
// 空间复杂度:O(n), 用来存储字符串分割之后的结果
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

var reverseWords = function(s) {
    let left = 0;
    let right = s.length - 1
    let queue = [];
    let word = ''
    while(s.charAt(left) === ' ') left++ 
    while(s.charAt(right) === ' ') right--
    while(left <= right) {
        let char = s.charAt(left) 
        if(char === ' ' && word) {
            queue.unshift(word)
            word = ''
        } else if (char !== ' ') {
            word += char
        }
        left++
    }
    queue.unshift(word)
    return queue.join(' ')
};