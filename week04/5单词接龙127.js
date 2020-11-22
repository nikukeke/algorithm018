// 解题思路
//      从起点词出发，每次变一个字母，经过n次变换，变成终点词，希望n尽量少。
//      我们需要找出邻接关系，比如hit它变一个字母会变成_it、h_t、hi_形式的单词，然后看这个新词是否存在于
//   单词表，如果存在，就找到了一个下一层的转换次
//      同时，要避免重复访问，比如hot->dot->hot这样变回来，只会徒增转换的长度。
//   因此，要将下一个转换词从单词表中删除（单词表的单词是唯一的）

//   可能下一层的单词有多个，都要考察，哪一条转换路径先遇到终点次，它就最短。

// 整理一下
//      由一个结点带出下一层的邻接点，所以用BFS，把单词看作结点。
//      维护一个队列，让起点词入列，level为1，然后出列考察
//      把它的每个字符变成26字符之一，逐个看是否在单词表，如果在，这个新词为下一层的转变词。
//      当它入列，它的level+1，并从单词和表中删去这个词。
//      出列入列...重复，当出列的单词和终点词相同，说明遇到了终点词，返回它的level。
//      当队列为空时，BFS结束，始终没有遇到终点词，没有路径通往终点，返回0。
// 1、BFS
var ladderLength = function (beginWord, endWord, wordList) {
    const workSet = new Set(wordList);
    const queue = [];
    queue.push([beginWord, 1]);

    while (queue.length) {
        const [word, level] = queue.shift();
        if (word == endWord) {
            return level;
        }
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (workSet.has(newWord)) {
                    queue.push([newWord, level + 1])
                    workSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};