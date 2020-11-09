// 解题思路
// 1、BFS
var minMutation = function (start, end, bank) {
    let count = 0;
    let queue = [start];
    let visited = new Set();

    while (queue.length) {
        let queueLength = queue.length;
        while (--queueLength >= 0) {
            const str = queue.shift();
            for (let i = 0; i < bank.length; i++) {
                if (visited.has(bank[i])) {
                    continue;
                }
                let diff = 0;
                for (let j = 0; j < bank[i].length; j++) {
                    if (str[j] !== bank[i][j]) {
                        diff++;
                        if (diff > 1) {
                            break;
                        }
                    }
                }
                if (diff === 1) {
                    if (bank[i] === end) {
                        return count + 1;
                    }
                    visited.add(bank[i]);
                    queue.push(bank[i])
                }
            }
        }
        count++;
    }
    return -1;
};