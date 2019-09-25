/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    //rob First
    let rF = 0;
    //rob First Not Robbing Current
    let rFNC = 0;
    //not robbing first
    let nF = 0;
    //rob neither first nor Current
    let nFNC = 0;

    for(let i = 0; i < nums.length; i++){
        let temp = rFNC;
        rFNC = Math.max(rF, rFNC);
        rF = temp + nums[i];
        if(i !== 0) {
            temp = nFNC;
            nFNC = Math.max(nFNC, nF);
            nF = temp + nums[i];
        }
    }

    return Math.max(nF,rFNC);
};

console.log(rob([2,7,9,3,1,10,5,4,6]));
