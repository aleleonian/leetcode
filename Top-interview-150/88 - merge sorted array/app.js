/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    nums1.splice(m, n, ...nums2);

    const arrLength = nums1.length;

    for (let i = 0; i < arrLength; i++) {
        if (nums1[i] > nums1[i + 1]) {
            const temp = nums1[i];
            nums1[i] = nums1[i + 1];
            nums1[i + 1] = temp;
            i = -1;
        }
    }
}

const nums1 = [9, 8, 5, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

merge(nums1, m, nums2, n);