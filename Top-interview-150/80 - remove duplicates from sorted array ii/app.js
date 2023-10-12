/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    let memory = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            memory = nums[i];
            k++;
        }
        else {
            if (memory == nums[i]) {
                memory = null;
                nums[k] = nums[i];
                k++;
            }
        }
    }
    console.log(nums);
    return k;
}

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4]));