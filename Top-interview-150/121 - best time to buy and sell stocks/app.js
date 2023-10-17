/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    const lowestDay = Math.min(...prices);

    if (prices.indexOf(lowestDay) == prices.length - 1) return 0;

    const highestDay = Math.max(...prices.slice(prices.indexOf(lowestDay) + 1));

    return highestDay - lowestDay;
};

console.log(maxProfit([2, 4, 1]));