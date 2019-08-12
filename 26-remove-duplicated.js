/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    /* edge case when length is 1 */
    if( nums.length <= 1) {
        return nums.length;
    }

    /*pointer to compare */
    let pointer = 0;

    /* loop through array*/
    for(let i = 1; i < nums.length; i++) {

        /* delete if same */
        if(nums[pointer] === nums[i]) {
            nums.splice(i,1);
            i--;
        } else {
            pointer++;
        }
    }

    return pointer + 1;

};

console.log(removeDuplicates([0,1,1,2]));
console.log(removeDuplicates([0,1,1,2,3,4,5,5,5,7]));
