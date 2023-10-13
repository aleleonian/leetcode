/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // nums.reverse();

    let firstPointer = 0;
    let secondPointer = nums.length - 1;

    console.log(nums);


    for (let i = 0; i < (nums.length - 1) / 2; i++) {
        let temp = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp;
        firstPointer++;
        secondPointer--;
    }

    console.log(nums);

    firstPointer = 0;
    secondPointer = 2;

    for (let i = 0; i < (3) / 2; i++) {
        let temp = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp;
        firstPointer++;
        secondPointer--;
    }

    console.log(nums);

    firstPointer = 3;
    secondPointer = nums.length - 1;

    for (let i = 0; i < (7) / 2; i++) {
        let temp = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp;
        firstPointer++;
        secondPointer--;
    }

    console.log(nums);



};

rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// rotate([-1, -100, 3, 99], 2);
//[3,99,-1,-100]