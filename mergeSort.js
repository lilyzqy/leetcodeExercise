function mergeSort(array) {

  /* base case when array length is 1 */
  if(array.length <= 1) {
    return array;
  }

  /* find middle */
  const mid = Math.floor(array.length / 2);

  /* seperate left and right part */
  const left = mergeSort(array.slice(0,mid));
  const right = mergeSort(array.slice(mid));

  console.log(left, right);

  /* connect the sorted left and right part */
  const sorted = [];

  /* when still have element in left or right */
  while(left.length > 0 && right.length > 0) {

    /* compare the first element and push the smaller one to sorted */
    if(left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left,right);
}

console.log(mergeSort([3,5,2,5,8,1,4]));
