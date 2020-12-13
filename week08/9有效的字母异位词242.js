var isAnagram = function (s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};

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