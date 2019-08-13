/**
 * Say you have an array for which the ith element is the price
 * of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (i.e., buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 */

 /* idea: loop once, find the low point first and keep track of the maxprofit,
 time:O(n),space:O(1), compare to burte force way will be O(n²) */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // prepare result
    let maxP = 0;
    //pointers, keep track of the low point and high point of prices;
    let low = 0;
    let high = 0;
    // loop and stop at second last element as one is compared to the next one.
    for(let i = 0; i < prices.length - 1; i++){
        //only renew the low point when the stock price is going down and is less than the current low point
        if(prices[i + 1] < prices[i] && prices[i + 1] < prices[low] ) {
            low = i + 1;
        //only check the new profit when the stock price is going up.
        } else if( prices[i] < prices[i + 1]){
            high = i + 1;
            maxP = Math.max(prices[high] - prices[low], maxP);
        }
    }

    return maxP;
};
