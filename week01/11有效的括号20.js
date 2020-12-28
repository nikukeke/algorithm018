var isValid = function (s) {
    const n = s.length;
    if(n % 2 === 1) return false;
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


var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // 是左括号，入栈
        if (c == "{" || c == "[" || c == "(") {
            stack.push(c);
            // 是右括号
        } else {
            // 此时栈空，无法匹配
            if (stack.length == 0) {
                return false;
            }
            // 获取栈顶
            const top = stack[stack.length - 1];
            // 如果栈顶是对应的左括号，被匹配，出栈
            if (top == "(" && c == ")" || top == "[" && c == "]" || top == "{" && c == "}") {
                // 不是对应的左括号，无法匹配
                stack.pop();
            } else {
                return false;
            }
        }
    }
    // 栈空，则所有左括号找到匹配；栈中还剩右左括号，则没被匹配
    return stack.length == 0;
};