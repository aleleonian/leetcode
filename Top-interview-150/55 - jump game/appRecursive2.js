var canJump = function (nums) {
    return jump(nums, 0, nums[0]);
}

function jump(array, position, stepstoWalk) {
    console.log("stepsToWalk->", stepstoWalk);
    console.log("position->", position);

    if (array.length - 1 == position) {
        console.log("We've arrived at the end!");
        return true;
    } else if (position >= array.length) {
        console.log("We're out of bounds!");
        return false;
    }

    return jump(array, position + stepstoWalk, array[position + stepstoWalk]);

    // Try all possible jump lengths from stepstoWalk down to 1
    for (let i = stepstoWalk; i > 0; i--) {
        if (jump(array, position + i, array[position + i])) {
            return true;
        }
    }

    return false;
}
