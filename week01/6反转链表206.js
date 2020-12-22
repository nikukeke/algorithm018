// 解题思路
// 一、迭代法
//     思路：设置一个前指针prev和推进指针curr，推进直到curr为空，返回prev
// 时间复杂度: O(n)
// 空间复杂度: O(1)
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
};
// 简化
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};