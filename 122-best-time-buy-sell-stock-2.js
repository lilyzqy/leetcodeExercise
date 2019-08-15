/**
 * Say you have an array for which the ith element is the price
 * of a given stock on day i.
 * Design an algorithm to find the maximum profit.
 * You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions at the same time
 * (i.e., you must sell the stock before you buy again).
 */


 /**
  * @param {number[]} prices
  * @return {number}
  */
 var maxProfit = function(prices) {
     let bought = false;
     let low = 0;
     let profit = 0;

     for(let i = 0; i < prices.length; i++) {
         //price start to go up, buy
         if(prices[i] < prices[i + 1] && !bought) {
             low = i;
             bought = !bought;
         //price start to go down or at the end, sell
         } else if( (prices[i] > prices[i + 1] ||i === prices.length - 1) && bought) {
             profit += prices[i] - prices[low];
             bought = !bought;
         }

     }

     return profit;
 };
console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1,2]));
// console.log(maxProfit([2,1,4]));
