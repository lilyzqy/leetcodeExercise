/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let smallest = 1;
  const occured = {};

  for(let i = 0; i < nums.length; i++) {
    // console.log(nums[i],smallest, occured);
    if(nums[i] === smallest) {
      smallest++;
      while(occured[smallest]){
        smallest++;
      }
    } else if (nums[i] > 0 && nums[i] < smallest && occured[nums[i]] === undefined) {
      smallest = nums[i];
    }

    occured[nums[i]] = 1;
  }

  return smallest;
};
