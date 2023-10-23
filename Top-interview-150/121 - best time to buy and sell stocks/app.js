/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {

    let lowPrice = prices[0];
    let highPrice;
    let bestProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // if we arrive to a new lowPrice we must calculate the current lowPrice's profit
        if (prices[i] <= lowPrice) {
            // in case there was a high price for it
            if (highPrice) {
                //if there was a highPrice set, we calculate the profit and if it's better than the previous ones
                //we store it
                if (highPrice - lowPrice > bestProfit) {
                    bestProfit = highPrice - lowPrice;
                }
                highPrice = null;
            }
            //let's keep track of the latest lowPrice
            lowPrice = prices[i];
        }
        else {
            if (prices[i] > highPrice || !highPrice) {
                highPrice = prices[i];
            }
        }
    }

    if (highPrice) {
        if (highPrice - lowPrice > bestProfit) {
            bestProfit = highPrice - lowPrice;
        }
    }

    return bestProfit != 0 ? bestProfit : 0;
}

console.log(maxProfit([7,1,5,3,6,4]));


/*
ChatGPT's version:

var maxProfit = function(prices) {
    let lowPrice = prices[0];
    let bestProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowPrice) {
            lowPrice = prices[i];
        } else {
            bestProfit = Math.max(bestProfit, prices[i] - lowPrice);
        }
    }

    return bestProfit;
};


*/ 