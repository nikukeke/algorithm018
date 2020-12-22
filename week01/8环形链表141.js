// 解题思路
// 1、哈希表
// 时间复杂度为 O(n)
// 空间复杂度为 O(n)
var hasCycle = function (head) {
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;
        map.set(head, true);
        head = head.next;
    }
    return false;
};

// 2、快慢指针
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        if (fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};