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