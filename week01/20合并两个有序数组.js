// 解题思路
// 一 
// 1、nums1、nums2有序，若把nums2全部合并到nums1，则合并后的nums1长度为m+n
// 2、我们可以从下标 m+n-1 的位置填充 nums1 ，比较 nums1[len1] 与 nums2[len2] 
//    的大小，将最大值写入 nums1[len]，即
//        1.nums1[len1]>=nums2[len2] ，nums1[len--] = nums1[len1--] ,这里-- 
//        是因为写入成功后，下标自动建议，继续往前比较
//        2.否则 nums1[len--] = nums2[len2--]
// 3、边界条件
//        1.若 len1 < 0 ，即 len2 >= 0 ，此时 nums1 已重写入， nums2 还未合并完，
//         仅仅需要将 nums2 的剩余元素（0…len）写入 nums2 即可，写入后，合并完成
//        2.若 len2 < 0，此时 nums2 已全部合并到 nums1 ，合并完成

var merge = function (nums1, m, nums2, n) {
    let length = m + n;
    while (n > 0) {
        if (m <= 0) {
            nums1[--length] = nums2[--n];
            continue
        }
        nums1[--length] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n]
    }
};