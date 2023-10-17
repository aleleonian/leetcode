/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let deals = new Map();

    const sortedByPrice = [...prices];

    sortedByPrice.sort((a, b) => a - b);

    let highPrice, lowPrice;

    for (let i = 0; i < sortedByPrice.length; i++) {

        lowPrice = sortedByPrice[i];

        console.log("lowPrice->" + lowPrice);

        const newPricesSlice = prices.slice(prices.indexOf(lowPrice) + 1);

        console.log("newPricesSlice->" + newPricesSlice);

        for (let x = 0; x < newPricesSlice.length; x++) {
            const highestPriceCandidate = newPricesSlice[x];
            if (highestPriceCandidate <= lowPrice || highestPriceCandidate < highPrice) continue;
            else {
                if (!highPrice || highestPriceCandidate > highPrice) {
                    highPrice = highestPriceCandidate;
                }
            }
        }
        deals.set(lowPrice, highPrice);
    }
    console.log(deals);

    // return highPrice - lowPrice || 0;
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));


//[3,2,6,5,0,3]
//[0,2,3,3,6,5]