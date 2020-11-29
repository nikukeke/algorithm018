var leastInterval = function (tasks, n) {
    if (n < 1) return tasks.length;
    let map = new Map();
    for (let task of tasks) {
        map.set(task, map.has(task) ? map.get(task) + 1 : 1)
    }
    let counts = Array.from(map).map(item => item[1]).sort((a, b) => b - a)
    let maxCount = 0;
    for (let count of counts) {
        if (count === counts[0]) maxCount++
        else break
    }
    let sum = (counts[0] - 1) * (n + 1) + maxCount;
    return sum > tasks.length ? sum : tasks.length;
};