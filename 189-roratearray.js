/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    const length = nums.length;

    /* edge case */
    if(length <= 1 || k === length) {
        return;
    }

    k = k > length ? k % length : k;

    const kthFromRightIndex = length - k;

    nums.length = k;

    nums = nums.slice(kthFromRightIndex).concat(nums.slice(0,kthFromRightIndex));

    // const rotatePart = nums.slice(kthFromRightIndex);

    // nums.length = length - k;

    // nums.splice(0, 0, ...rotatePart);

};

rotate([1,2,3,4,5,6],4);
