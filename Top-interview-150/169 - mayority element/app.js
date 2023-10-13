/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let stats = nums.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue]) {
            accumulator[currentValue] = {};
            accumulator[currentValue] = 0;
        }
        accumulator[currentValue]++;
        return accumulator;
    }, {});

    console.log(stats);

    return Number(Object.entries(stats).sort((a, b) => b[1] - a[1])[0][0]);

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

/*

ChatGPT's version

var majorityElement = function(nums) {
    let candidate, count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += num === candidate ? 1 : -1;
    }

    return candidate;
};

We maintain a candidate variable and a count variable to keep track of the majority element.

We iterate through the nums array, and if count becomes zero, we update the candidate to the current number.

We adjust count based on whether the current number matches the candidate. If it matches, we increment count; otherwise, we decrement it.

The final candidate will be the majority element.

This version simplifies the code and improves readability. It uses the Boyer-Moore Majority Vote algorithm to find the majority element in O(n) time and with O(1) space complexity.

*/