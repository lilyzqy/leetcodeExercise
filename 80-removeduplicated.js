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

    /*counter to track how many keeped */
    let counter = 1;

    /* loop through array*/
    for(let i = 1; i < nums.length; i++) {

        /* delete if same */
        if(nums[pointer] === nums[i]) {

            /* check counter */
            if(counter >= 2) {
                nums.splice(i,1);
                i--;
            } else {
                counter++;
            }
        } else {
            pointer += counter;
            counter = 1;
        }
    }

    return pointer + counter;

};

console.log(removeDuplicates([0,1,1,2]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([0,0,1,1,1,1,2,5,5]));
