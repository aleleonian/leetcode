// According to the definition of h-index on Wikipedia: 
// The h-index is defined as the maximum value of h such that 
// the given researcher has published at least h papers that have 
// each been cited at least h times.

/*

If a researcher has 5 papers and they are cited 10, 8, 5, 3, and 2 times respectively, the h-index would be 3. This is because the first three papers have at least 3 citations each.

If another researcher has 8 papers and they are cited 50, 20, 15, 10, 8, 5, 3, and 2 times respectively, the h-index would still be 3. The first three papers have 50, 20, and 15 citations, which satisfies the condition.

*/

/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function (citations) {

    // if (citations.length == 0) return 0;

    citations.sort((a, b) => b - a);

    let hIndex = 0;

    let foundIt = false;

    let highestCase = citations[0];

    while (!foundIt && highestCase >= 0) {
        findTheIndex(highestCase, citations);
        highestCase--;
    }

    function findTheIndex(currentCitationsNumber, citations) {
        if (currentCitationsNumber > citations.length) return;
        let citationsCounter = 0;
        for (let x = 0; x < currentCitationsNumber; x++) {
            if (citations[x] >= currentCitationsNumber) {
                citationsCounter++
                if (citationsCounter == currentCitationsNumber) {
                    hIndex = currentCitationsNumber;
                    foundIt = true;
                }
            }
            else break;
        }
    }
    return hIndex;

}
//[0,1,3,5,6]
// console.log(hIndex([3, 0, 6, 1, 5]));
// console.log(hIndex([0]));
// console.log(hIndex([1, 3, 1]));

//ChatGPT version:
var hIndexGPT = function(citations) {
    citations.sort((a, b) => b - a);

    let hIndex = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex++;
        } else {
            break;
        }
    }

    return hIndex;
};
console.log(hIndexGPT([6,5,3,2]));

/*

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total 
and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each
and the remaining two with no more than 3 citations each, their h-index is 3

[0,1,3,5,6]

*/

