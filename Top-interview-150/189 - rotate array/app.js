/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    for (let i = 0; i < k; i++) {
        // let's pop the array's last item
        let poppedItem = nums[nums.length - 1];

        // let's move each item in the array one position forward
        for (let x = nums.length - 1; x > 0; x--) {
            nums[x] = nums[x - 1];
        }
        // let's unshift the saved item
        nums[0] = poppedItem;
    }

    console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);