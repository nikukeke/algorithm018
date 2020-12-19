// 暴力法
var numJewelsInStones = function (J, S) {
    J = J.split('');
    return S.split('').reduce((prev, val) => {
        for (const ch of J) {
            if (ch === val) {
                return prev + 1;
            }
        }
        return prev;
    }, 0)
};

// 哈希
var numJewelsInStones = function (J, S) {
    const jewelsSet = new Set(J.split(''));
    return S.split('').reduce((prev, val) => {
        return prev + jewelsSet.has(val)
    }, 0)
};