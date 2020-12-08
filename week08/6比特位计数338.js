// 解题思路
// 一、内置函数 + 正则

var countBits = function (num) {
    let result = [];
    let n = 0;
    while (n <= num) {
        result.push((n.toString(2).match(/1/g) || []).length)
        n++
    }
    return result;
}

// 二、位操作
var countBits = function (num) {
    let result = [0];
    let n = 1;
    while (n <= num) {
        let count = 0;
        let tmpN = n;
        while (tmpN != 0) {
            count++;
            tmpN &= (tmpN - 1)
        }
        result.push(count);
        n++;
    }
    return result;
}

// 三、模拟十转二进制、取模
var countBits = function (num) {
    let result = [0];
    let n = 1;
    while (n <= num) {
        let count = 0;
        let tmpN = n;
        while (tmpN) {
            // tmpN % 2 == 1
            if (tmpN & 1 == 1) {
                count++;
            }
            tmpN >>>= 1;
        }
        n++;
        result.push(count);
    }
    return result;
}

// 四、奇偶+位操作
var countBits = function (num) {
    let result = [0];
    let n = 1;
    while (n <= num) {
        let count = 0;
        if (n & 1 == 1) {
            result[n] = result[n - 1] + 1
        } else {
            result[n] = result[n >> 1]
        }
        n++;
    }
    return result;
}

// 五、循环和位移动
var countBits = function (num) {
    let result = [0];
    let n = 1;
    while (n <= num) {
        let count = 0;
        let mask = 1;
        for (let i = 0; i < 32; i++) {
            if ((n & mask) != 0) {
                count++;
            }
            mask <<= 1;
        }
        n++;
        result.push(count);
    }
    return result;
}

// 六、三+四
var countBits = function (num) {
    let result = [0];
    let n = 1;
    while (n <= num) {
        let tmpN = n;
        result.push(result[tmpN >> 1] + (tmpN & 1));
        n++;
    }
    return result;
}

// 七
var countBits = function (num) {
    let dp = [0];
    let n = 1;
    while (n <= num) {
        dp[n] = dp[n - (Math.pow(2, Math.floor(Math.log2(n))))] + 1;
        n++;
    }
    return dp;
}

// 八、
var countBits = function (num) {
    let dp = [0];
    let n = 1;
    while (n <= num) {
        dp[n] = dp[(n & (n - 1))] + 1;
        n++;
    }
    return dp;
}
