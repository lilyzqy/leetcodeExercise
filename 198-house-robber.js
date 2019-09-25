/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    let prevMax = 0;
    let currMax = 0;

    for(let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(prevMax + nums[i], currMax);
        prevMax = temp;
    }

    return currMax;
};

console.log(rob([2,7,9,3,1,10,5,4,6]));
