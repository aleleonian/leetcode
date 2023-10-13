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
    reverseIt(nums, k, 4);
    console.log(nums);

    function reverseIt(array, startingPoint, endingPoint) {
        for (let i = startingPoint; i < (endingPoint) / 2; i++) {
            let temp = array[endingPoint - i];
            array[endingPoint - i] = array[i];
            array[i] = temp;
        }
    }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
//[5,6,7,1,2,3,4]