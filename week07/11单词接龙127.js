// 解题思路
// 1、BFS广度优先
// 第一层: beginWord
// 遍历当前层：查找出当前层的当前元素，能转换的所有单词，循环单词每个字符，依次替换a-z，得到的新单词newWord
// 如果newWord是endWord，则证明找到了终点，return
// 如果newWord在wordList中，则证明newWord是当前单词的下一层单词之一，push入queue
// 为防止重复互相转换，每找到一次wordList中的单词，则删除一次
// 如果queue为空，循环结束，证明不能从beginWord出发到达endWord，return 0

// 注意：
// 1、在处理的时候，把level和当前单词绑定，这样的数据结构[word, level]为queue的一个元素，进入下一层level+1
// 2、把wordList转换为Set类型，加速判断newWord是否在wordList中

