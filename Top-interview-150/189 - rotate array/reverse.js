function reverseArray(arr, howManyElements, startingPosition) {

    for (let i = 0; i < Math.floor(howManyElements / 2); i++) {
        // Swap the elements at position i and arr.length - 1 - i
        const temp = arr[startingPosition];
        arr[startingPosition] = arr[startingPosition + howManyElements -1 - i];
        arr[startingPosition + howManyElements -1 - i] = temp;
        startingPosition++
    }
    return arr;
}


// console.log(reverseArray([1, 2, 3, 4, 5, 6], 3, 3));
console.log(reverseArray([-1], 2, 0));
