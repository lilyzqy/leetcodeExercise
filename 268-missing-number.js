/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums === [0]) { return 1; }
    let ordered = [];

    for(let i = 0; i < nums.length; i++) {
        ordered[nums[i]] = nums[i];
    }

    for(let j = 0; j < ordered.length; j++) {
        if(ordered[j] === undefined) {
            return j;
        }
    }

    return ordered.length;
};

var missingNumberOp = function(nums) {
    let ans = nums.length;
    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ i ^ nums[i]; // ^all i and num
    }
    return ans;
};
