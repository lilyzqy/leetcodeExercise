function quickSort(array) {
  /* edge case */
  if(array.length <= 1) {
    return array;
  }

  /* find pivot */
  const pivot = array.shift();

  const left = [];
  const right = [];

  /* compare, smaller to pivot to the left */
  for( let i = 0; i < array.length; i++) {

    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([3,5,2,5,8,1,4]));
