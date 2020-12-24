// 一、哈希表
//    一个非常直观的思路是：我们遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历
// 过的节点，就可以判定链表中存在环。借助哈希表可以很方便地实现。
// 时间复杂度: O(n)
// 空间复杂度: O(n)
var detectCycle = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null
};

// 二、快慢指针
// 时间复杂度: O(n)
// 空间复杂度: O(1)
var detectCycle = function (head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};
