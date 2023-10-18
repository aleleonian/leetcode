/**
 * @param {number[]} prices
 * @return {number}
 */

//[2,1,2,1,0,1,2]

var maxProfit = function (prices) {

    let lowestPrice = prices[0];
    let highestPrice;
    let bestProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= lowestPrice) {
            if (highestPrice) {
                if (highestPrice - lowestPrice > bestProfit) {
                    bestProfit = highestPrice - lowestPrice;
                }
                highestPrice = null;
            }
            lowestPrice = prices[i];
        }
        else {
            if (prices[i] > highestPrice || !highestPrice) {
                highestPrice = prices[i];
            }
        }
    }

    if (highestPrice) {
        if (highestPrice - lowestPrice > bestProfit) {
            bestProfit = highestPrice - lowestPrice;
        }
    }

    if (bestProfit == 0) {
        if (highestPrice) {
            bestProfit = highestPrice - lowestPrice;
            return bestProfit;
        }

        else return 0;
    }
    else return bestProfit
}

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

//[3,2,6,5,0,3]
//[0,2,3,3,6,5]