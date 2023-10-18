/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let bestLowPrice = 0;
    let bestHighPrice = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        let lowPrice, highPrice = 0;
        lowPrice = prices[i];
        for (let x = i + 1; x < prices.length; x++) {
            if (prices[x] > highPrice && prices[x] > lowPrice) highPrice = prices[x];
        }
        if (highPrice - lowPrice > bestHighPrice - bestLowPrice) {
            bestHighPrice = highPrice;
            bestLowPrice = lowPrice;
        }

    }
    return bestHighPrice - bestLowPrice;

};

console.log(maxProfit([8, 6, 4, 3, 3, 2, 3, 5, 8, 3, 8, 2, 6]));


//[3,2,6,5,0,3]
//[0,2,3,3,6,5]