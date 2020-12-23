// 解题思路
// 1、map+数组
// 利用map记录每个元素出现的贫路，哭用数组来比较排序元素

let topKFrequent = function (nums, k) {
    let map = new Map(), arr = [...new Set(nums)]
    nums.map((num) => {
        if (map.has(num)) map.set(num, map.get(num) + 1)
        else map.set(num, 1)
    })
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};