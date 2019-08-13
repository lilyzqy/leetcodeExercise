/**
* Given an integer array nums, find the contiguous subarray
*   (containing at least one number) which has the largest sum
*    and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let sum = nums[0];
    let maxSum = nums[0];

    /* if the prev sum is negtive which is ganna make the sum smaller,
       there is no need to keep the prev sum, just restart summing up from
       the current number */
    for(let i = 1; i < nums.length; i++){
        sum = sum > 0 ? sum + nums[i] : nums[i];

        maxSum = sum > maxSum ? sum : maxSum;
    }

    return maxSum;
};

console.log(maxSubArray([-2,-1,-9,-2,-1,-2]));
console.log(maxSubArray([-1]));
