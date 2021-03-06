// 解题思路
// 一、倒序遍历
// 当遇到9时，如何“进位”
//      1、该进位清零，遍历中的下一位加一
//      2、若，其下一位也是9，则同样清零，继续用同样的模式遍历，直到遇到第一个非9的元素.   

// 当数组digits元素全为9时，如何输出？
//      1、定义一个长度为digist.length + 1，首元素为1，其他
//         元素为0的数组
//      2、输出该数组

var plusOne = function (digits) {
    let len = digits.length;
    while (len >= 0) {
        for (let i = digits.length - 1; i > 0; i--) {
            if (digits[i] != 9) {
                digits[i]++;
                return digits;
            } else if (digits[i] == 9) {
                digits[i] = 0;
            }
        }
        len--;
    }
    let res = Array(digits.length + 1).fill(0);
    res[0] = 1;
    return res;
};


// 二、数组遍历
//      1.末位无进位，则末位加一即可，因为末位无进位，全面也不可能产生进位
//      2.末位有进位，在中间位置进位停止，则需要找到进位标志，即为当前位后为0，
//        则前一位加1，直到不为0为止，比如499->500 
//      3.末位有进位，并且一直进位导致最前方多出一位，对于这种情况，需要在第2
//        种情况遍历结束的基础上，进行单独处理，比如999->1000 
var plusOne = function (digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    let res = Array(len + 1).fill(0);
    res[0] = 1;
    return res;
};