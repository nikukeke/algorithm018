
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