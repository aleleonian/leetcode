/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // nums.reverse();

    console.log(nums);
    reverseIt(nums, 0, nums.length - 1);
    console.log(nums);
    reverseIt(nums, 0, k - 1);
    console.log(nums);
    reverseIt(nums, k, nums.length - 1);
    console.log(nums);

    function reverseIt(array, startingPoint, endingPoint) {
        for (let i = 0; ; i++) {
            let temp = array[endingPoint];
            array[endingPoint] = array[startingPoint];
            array[startingPoint] = temp;
            if (i >= (Math.floor((endingPoint - startingPoint) / 2))) break;
            endingPoint--;
            startingPoint++;
        }
    }
};

rotate([1, 2, 3, 4, 5, 6, 7], 7);
// rotate([-1, -100, 3, 99], 2);
//[3,99,-1,-100]