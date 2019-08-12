function bubbleSort(array) {

  /* flag */
  let sorted = false;

  /* loop until sorted */
  while(!sorted) {

    /* assume sorted already */
    sorted = true;

    /* loop through array */
    for(let i = 0; i < array.length; i++) {
      /* switch if left is bigger than right */
      if(array[i] > array[i + 1]) {

        /* tricky part*/
        array[i + 1] = [array[i], array[i] = array[i + 1]][0];

        /* turn the flag to false when unsorted situation is found */
        sorted = false;
      }
    }
  }

  /* return the sorted array */
  return array;
}

console.log(bubbleSort([2, 6, 7, 2, 4, 1]));
