var findWords = function (board, words) {
    let res = [], row = board.length, col = board[0].length;
    const getTrie = words => {
        let root = Object.create(null);
        for (let word of words) {
            let node = root;
            for (let c of word) {
                if (!node[c]) node[c] = Object.create(null)
                node = node[c]
            }
            node.word = word;
        }
        return root;
    }
    const search = (trie, x, y) => {
        if (trie.word) {
            res.push(trie.word);
            trie.word = null;
        }
        if (x < 0 || y < 0 || y >= row || x >= col) return;
        if (!trie[board[y][x]]) return;
        let prefixChar = board[y][x]
        board[y][x] = "#";
        search(trie[prefixChar], x, y - 1);
        search(trie[prefixChar], x, y + 1);
        search(trie[prefixChar], x - 1, y);
        search(trie[prefixChar], x + 1, y);
        board[y][x] = prefixChar;
    }
    let trie = getTrie(words);
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            search(trie, x, y)
        }
    }
    return res;
};