var isValid = function (s) {
    const cache = []
    const map = new Map()
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) cache.push(s[i])
        else {
            if (cache.length === 0) return false
            if (map.get(cache[cache.length - 1]) === s[i]) cache.pop()
            else return false
        }
    }
    if (cache.length) return false
    return true 
};