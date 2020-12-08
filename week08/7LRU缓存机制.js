// 解题思路
//      如果用数组，时间复杂度是O(N)，所以只能用链表了。
//      用链表的话，随意移除一个节点的时间复杂度是O(1)，移除节点后，我们还得把前后两个节点连起来
// 所以用双向链表会比较方便。
//      但是链表获取节点的时间复杂度是O(N)，所以需要一个数据结构（哈希表）来记录位置

// 复杂度分析
// 时间复杂度:O(1)
// 空间复杂度:链表O(N),哈希表O(N),结果还是O(N)

// 伪代码
// put
//  if key 存在
//      更新节点值
//      把节点移到链表头部
//  else
//      if 缓存满来
//          移动最后一个节点
//          删除它在哈希表中的映射
//      
//      新建一个节点
//      在哈希表中增加映射
//      把节点加到链表头部

//  get
//  if  key 存在
//        返回节点值
//        把节点移到链表头部
//  else
//      返回 -1

class DoubleLinkedListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.hashmap = {};
    this.dummyHead = new DoubleLinkedListNode(null, null);
    this.dummyTail = new DoubleLinkedListNode(null, null);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

LRUCache.prototype._isFull = function () {
    return Object.keys(this.hashmap).length === this.capacity;
}

LRUCache.prototype._removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    return node;
}

LRUCache.prototype._addToHead = function (node) {
    const head = this.dummyHead.next;
    node.next = head;
    head.prev = node;
    node.prev = this.dummyHead;
    this.dummyHead.next = node;
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (key in this.hashmap) {
        const node = this.hashmap[key];
        this._addToHead(this._removeNode(node));
        return node.value
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (key in this.hashmap) {
        const node = this.hashmap[key];
        node.value = value;
        this._addToHead(this._removeNode(node));
    } else {
        if (this._isFull()) {
            const node = this.dummyTail.prev;
            delete this.hashmap[node.key];
            this._removeNode(node)
        }
        const node = new DoubleLinkedListNode(key, value);
        this.hashmap[key] = node;
        this._addToHead(node);
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


 