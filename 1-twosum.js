/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = {};

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined){
            return [map[nums[i]], i];
        }else{
          console.log(nums[i],map);
            const sub = target - nums[i];
            map[sub] = i;
        }
    }
    return [];
};

console.log(twoSum([2,7,55,6],9));
