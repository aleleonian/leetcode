/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    console.log(nums);

    reverseArray(nums, nums.length, 0);

    console.log(nums);

    reverseArray(nums, 2, 0);

    console.log(nums);

    reverseArray(nums, 8, 2);

    console.log(nums);

    // reverseArray(nums, nums.length, 0);

    function reverseArray(arr, howManyElements, startingPosition) {

        for (let i = 0; i < Math.floor(howManyElements / 2); i++) {
            // Swap the elements at position i and arr.length - 1 - i
            const temp = arr[startingPosition + i];
            arr[startingPosition + i] = arr[startingPosition + howManyElements -1 -i];
            arr[startingPosition + howManyElements -1 -i] = temp;
        }
        return arr;
    }
}

rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
// rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// rotate([-1, -100, 3, 99], 2);
//[3,99,-1,-100]

// [1,2,3]
// 1st rotation
// [3,1,2]
// 2nd rotation
// [2,3,1]
// 3rd rotation
// [1,2,3]
// 4th rotation
// [3,1,2]

// if(rotation times > array.length { rotation times = rotation times - array.length })

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1st rotation
// [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 2nd rotation
// [9, 10, ,1 2, 3, 4, 5, 6, 7, 8]
//