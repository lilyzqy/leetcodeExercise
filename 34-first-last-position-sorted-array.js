function searchRange(nums,target) {
  const foundIndex = binarySearch(nums,target);

  if (foundIndex === -1) return [-1, -1];

  let start = foundIndex;
  let end = foundIndex;

  //search left
  while(nums[start] === target) {
    start--;
  }
  //search right
  while(nums[end] === target) {
    end++;
  }
  return [start + 1, end - 1];
}

function binarySearch(nums,target) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high)/2);
    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return  -1;
}

console.log(searchRange([1,2,4,4,4,7,8],4));
