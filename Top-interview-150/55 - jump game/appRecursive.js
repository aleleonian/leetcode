var canJump = function (nums) {

    return jump(nums, 0, nums[0]);
}

function jump(array, position, stepstoWalk) {

    console.log("stepsToWalk->", stepstoWalk);
    console.log("position->", position);

    if (array.length - 1 == position + stepstoWalk) {
        console.log("We're arrived to the end!");
        return true;
    }
    else if (!array[position + stepstoWalk]) {
        console.log("We're out of bounds!");
        return false;
    }

    return jump(array, position + stepstoWalk, array[position + stepstoWalk]);

}

console.log(canJump([5, 4, 0, 2, 0, 1, 0, 1, 0]));