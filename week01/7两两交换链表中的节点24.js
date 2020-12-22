var swapPairs = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
}