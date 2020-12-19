var reverseWords = function (s) {
    const res = [];
    const length = s.length;
    let i = 0;
    while (i < length) {
        let start = i;
        while (i < length && s.charAt(i) != ' ') {
            i++;
        }
        for (let p = start; p < i; p++) {
            res.push(s.charAt(start + i - 1 - p))
        }
        while (i < length && s.charAt(i) == ' ') {
            i++;
            res.push(' ')
        }
    }
    return res.join('')
};


var reverseWords = function (s) {
    let res = '', word = ''
    for (let c of s) {
        if (c !== ' ') {
            word = c + word
        } else {
            res += word + c
            word = ''
        }
    }
    return res + word
};