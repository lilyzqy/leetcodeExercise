/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const sorted = nums.slice().sort();

    for(let i = 0; i < sorted.length; i++) {

        if(sorted[i] === sorted[i+1]) {
            return sorted[i];
        }
    }

};

console.log(findDuplicate([3,1,3,4,2]));
