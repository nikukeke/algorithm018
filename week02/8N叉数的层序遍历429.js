// var levelOrder = function (root) {
//     if (root === null) {
//         return []
//     }
//     let res = [];
//     let queue = [root];
//     while (queue.length > 0) {
//         let length = queue.length;
//         let tmp = [];
//         for (let i = 0; i < length; i++) {
//             let cur = queue.shift();
//             tmp.push(cur.val);
//             queue.push(...cur.children);
//         }
//         res.push(tmp);
//     }
//     return res;
// };


// var levelOrder = function (root) {
//     // 存储层序遍历结果
//     let result = [];
//     // 使用队列进行层序遍历，队列中存储的是每一层的所有节点
//     let queue = [];
//     // 如果树存在，才进行遍历
//     root && queue.push(root);

//     // 不断遍历队列，直到队列为空时，完成树的层序遍历
//     while (queue.length) {
//         // 缓存当前层的节点数量，确认队列的出队元素数量
//         let queueLen = queue.length;
//         // 在result中存入一个数组，用于存储当前层的节点值
//         result.push([]);

//         // 当前层有多少个节点，就进行多少次循环取出节点
//         while (--queueLen >= 0) {
//             // 将当前层的节点依次从队列取出
//             const node = queue.shift();
//             // 将当前层的数据存入result
//             result[result.length - 1].push(node.val);

//             // 如果子节点存在，则将子节点入队，作为下一层的节点
//             if (node.children) {
//                 for (let i = 0; i < node.children.length; i++) {
//                     queue.push(node.children[i])
//                 }
//             }
//         }
//     }
//     return result;
// };

var levelOrder = function (root) {
    let nums = [];
    search(nums, root, 0);
    return nums;
};

var levelOrder = function (root) {
    let nums = [];
    search(nums, root, 0)
    return nums;
};
function search(nums, node, k) {
    if (node == null) {
        return
    }
    if (nums[k] == undefined) {
        nums[k] = []
    }
    nums[k].push(node.val)
    for (let i = 0; i < node.children.length; i++) {
        search(nums, node.children[i], k + 1)
    }
}