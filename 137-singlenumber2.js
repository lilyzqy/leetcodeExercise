/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let flip = 0;
    let flop = 0;

    for(let i = 0; i < nums.length; i++) {
        flip ^= nums[i] & ~flop;
        flop ^= nums[i] & ~flip;
    }

    return flip;
};

console.log(singleNumber([1,2,2,2]));
