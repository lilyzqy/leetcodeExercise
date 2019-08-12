/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //edge case when there is no 3 elements to add.
    if(nums.length < 3) {
        return [];
    }

    //prepare result
    const result = [];

    //sort the nums as numbers
    nums.sort((a,b) => { return a - b;});

    //i is the first of the three, so i can stop at nums.length - 2
    for(let i = 0; i < nums.length - 2; i++) {
      console.log(nums);
        //no more 3sums will be find if the first element is positive
        if(nums[i] > 0) {
            return result;
        }

        //skip the same number, move on to the next element if current number is the same as the last number
        if(i === 0 || (i > 0 && nums[i] !== nums[ i - 1])){
          console.log(nums[i]);

            let j = i + 1;
            let k = nums.length - 1;
            let sum = 0 - nums[i];

            // stops when j met k
            while(j < k) {
                //find the 3sum, find the next
                if(nums[j] + nums[k] === sum) {
                    result.push([nums[i],nums[j],nums[k]]);
                    //skip the same element for j and k
                    while(j < k && nums[j] === nums[j + 1]) {
                      j++;
                    }
                    while(j < k && nums[k] === nums[k - 1]) {
                      k--;
                    }
                    j++; k--;
                //move j , k to find the 3sum
                } else if(nums[j] + nums[k] > sum) {
                   k--;
                } else {
                   j++;
                }
            }

        }
    }

    return result;

};


// var threeSum = function(num) {
//     num.sort((a, b) => a - b);
//     const res = [];
//     for (let i = 0; i < num.length - 2; i++) {
//         if (i == 0 || (i > 0 && num[i] != num[i-1])) {
//             let lo = i+1, hi = num.length-1, sum = 0 - num[i];
//             while (lo < hi) {
//                 if (num[lo] + num[hi] == sum) {
//                     res.push([num[i], num[lo], num[hi]]);
//                     while (lo < hi && num[lo] == num[lo+1]) lo++;
//                     while (lo < hi && num[hi] == num[hi-1]) hi--;
//                     lo++; hi--;
//                 } else if (num[lo] + num[hi] < sum) lo++;
//                 else hi--;
//            }
//         }
//     }
//     return res;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
// console.log(threeSum([0,0,0]));
console.log(threeSum([-2,0,0,2,2]));
