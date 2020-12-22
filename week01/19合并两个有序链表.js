// 解题思路
// 一、递归
// 1、如果l1或l2一开始为空链表，那么没有任何操作需要合并，所以我们只需要返回非空链表
// 2、判断l1和l2哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点
// 3、如果两个链表有一个为空，递归结束。
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


// 二、迭代
// 1、首先设定一个哨兵节点prehead，这可以在最后让我们比较容易地返回合并后的链表
// 2、我们委会一个prev指针，我们需要做的是调整它的next指针。
// 3、然后，我们重复以下过程，直到l1或者l2指向了null，如果l1当前节点的值小雨等于;2，
//    我们就把l1当前的节点接在prev节点的后面同时将l1指针往后移一位。否则，我们对l2
//    做同样的操作。
// 4、不管我们将哪一个元素接在了后面，我们都需要把prev向后移一位。
// 5、在终止循环的时候，l1和l2至多有一个是非空的。由于输入的两个链表都是有序的，所以
//    不管哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的所有元素都要大。
//    这意味着我们只需要简单地将非空链表接在合并链表的后面，并返回合并的链表即可
var mergeTwoLists = function (l1, l2) {
    const prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return prehead.next;
};