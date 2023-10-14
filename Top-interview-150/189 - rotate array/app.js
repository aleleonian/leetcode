/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    if (k > nums.length) k = k % nums.length;

    reverseArray(nums, nums.length, 0);

    reverseArray(nums, k, 0);

    reverseArray(nums, nums.length - k, k);

    function reverseArray(arr, howManyElements, startingPosition) {

        for (let i = 0; i < Math.floor(howManyElements / 2); i++) {
            // Swap the elements at position i and arr.length - 1 - i
            const temp = arr[startingPosition + i];
            arr[startingPosition + i] = arr[startingPosition + howManyElements - 1 - i];
            arr[startingPosition + howManyElements - 1 - i] = temp;
        }
        return arr;
    }
}