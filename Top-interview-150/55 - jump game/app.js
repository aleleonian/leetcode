/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    //how long have we been able to jump so far.
    let maxReach = 0;

    //if there's only one position, the game is pretty much over.
    if (nums.length == 1) return true;

    //if the first position gives you 0 possibilities of jumping
    //the game is pretty much over.
    if (nums[0] == 0) return false;

    for (let i = 0; i < nums.length - 1; i++) {
        //if i have 0 possibilities of jumping and i have not been able to jump
        //over this 0, then i'm toast.
        if (nums[i] == 0 && maxReach <= i) {
            return false;
        }
        // let's record the maximum jump capacity so far
        if (i + nums[i] > maxReach) maxReach = i + nums[i];

        //if what we've been able to jump is equal to or exceeds the length of the array
        //that's a win
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    return false;

}
// console.log(canJump([1, 0, 1, 0]));
console.log(canJump([5, 4, 0, 2, 0, 1, 0, 1, 0]));

// console.log(canJump([1, 2, 3]));
// console.log(canJump([1]));
// console.log(canJump([1, 2, 3]));