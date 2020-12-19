var findAnagrams = function (s, p) {
    const res = [];
    const need = new Map();
    for (let i = 0; i < p.length; i++) {
        need.set(p[i], need.has(p[i]) ? need.get(p[i]) + 1 : 1)
    }
    let left = 0, right = 0, valid = 0
    const window = new Map()
    while (right < s.length) {
        const c = s[right]
        right++
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1)
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left)
            }
            const d = s[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return res;
};