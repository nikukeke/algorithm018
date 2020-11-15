// 太难了
// 在leetcode上找到一个比较好理解的思路，之后看
var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    wordSet.add(beginWord);

    // 单词表中没有终点词，无法变到终点词
    if (!wordSet.has(endWord)) return [];

    // 存放图中的单词所在的层
    const levelMap = new Map();
    // 存放图中的单词的邻接单词
    const wordMap = new Map();
    // 记录访问过的节点
    const visited = new Set();
    // 维护一个队列，初始放入起点词
    const queue = [beginWord];
    // 入列即访问，存入visited
    visited.add(beginWord);

    // 是否存在变化到终点词的路径
    let finished = false;
    // 起始词的level为0
    let level = 0;
    levelMap.set(beginWord, 0);

    // 队列空了，所有邻接节点就遍历完了
    while (queue.length) {
        // 当前level的单词个数
        const levelSize = queue.length;
        // 遍历当前层的单词，level+1
        level++;
        // 当前层的单词逐个出列考察
        for (let i = 0; i < levelSize; i++) {
            // 当前出列的单词
            const word = queue.shift();
            // 遍历单词的所有字符
            for (let i = 0; i < word.length; i++) {
                // 遍历26个字母字符
                for (let c = 97; c <= 122; c++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                    // 不是单词表中的单词就忽略
                    if (!wordSet.has(newWord)) continue;
                    // 已经存在于wordMap
                    if (wordMap.has(newWord)) {
                        // 对应的数组推入出列的单词
                        wordMap.get(newWord).push(word);
                        // 初始化一个数组
                        // 并放入“父单词”
                    } else {
                        wordMap.set(newWord, [word]);
                    }

                    // 该新单词已经访问过就忽略
                    if (visited.has(newWord)) continue;
                    // 遇到了终点词
                    if (newWord == endWord) {
                        // 存在抵达终点词的路径
                        finished = true;
                    }
                    // 记录这个单词的level
                    levelMap.set(newWord, level);
                    // 该新单词是下一层的，入列
                    queue.push(newWord);
                    // 入列即访问，记录一下
                    visited.add(newWord);
                }
            }
        }
    }
    // 无法到达终点词，返回[]
    if (!finished) return [];

    const res = [];
    const dfs = (path, beginWord, word) => {
        // 当前遍历的word，和起始词相同
        if (word == beginWord) {
            // 将当前路径推入res数组，加上起始词
            res.push([beginWord, ...path]);
            return;
        }
        // 将当前单词加入到path数组的开头
        path.unshift(word);
        // 当前单词有对应的“父单词”们
        if (wordMap.get(word)) {
            // 遍历“父单词”们
            for (const parent of wordMap.get(word)) {
                // 满足要求的
                if (levelMap.get(parent) + 1 == levelMap.get(word)) {
                    // 递归dfs
                    dfs(path, beginWord, parent);
                }
            }
        }
        // 回溯，撤销选择，将path数组开头的单词弹出
        path.shift();
    }
    dfs([], beginWord, endWord);
    return res;
};