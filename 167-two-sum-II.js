
  /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    //edge cases
    if(numbers.length <= 1) {
        return;
    }

    //prepare start and end pointer
    let start = 0; let end = numbers.length - 1;

    //loop
    while(start < numbers.length && end >= 0) {

        const a = numbers[start] + numbers[end];

        if(a > target) {
            end--;
        }else if(a < target) {
            start++;
        }else {
            return [ start + 1, end + 1 ];
        }
    }

    return;
};


console.log(twoSum([2,7,11,15], 9));
