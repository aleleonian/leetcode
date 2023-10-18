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
/*

ChatGPT's version:

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than the length of the array

    reverseArray(nums, 0, n - 1);        // Reverse the entire array
    reverseArray(nums, 0, k - 1);        // Reverse the first part
    reverseArray(nums, k, n - 1);        // Reverse the second part

    function reverseArray(arr, start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
};

What i like about ChatGPT's solution is that the reverseArray function does not depende on the
length of the array but the function ends when the pointers meet.
That's neat!

*/