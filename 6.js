/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    /* prepare buckets for result */
    const bucket = new Array(numRows);

    for ( let r = 0; r < bucket.length; r++) {
        bucket[r] = [];
    }

    let count = 0;

    /* loop throught the string */
    for (let i = 0; i < s.length ; i++) {

        count++;

        /* zigzag turn when row bigger than row number */
        if (count > numRows) {

            /* bucket number depends on row - count % numRows */
            const row = numRows - count % numRows;

            bucket[row - 1].push(s[i]);

            /* reset count if almost back to the top */
            if (row === 2) {

                count = 0;
            }
        } else {
            /* just put into bucket according to count */
            bucket[count - 1].push(s[i]);
        }
    }

    let result = [];

    /* get the result from buckets */
    for ( let r = 0; r < bucket.length; r++) {

      result = result.concat(bucket[r]);
    }

    return result.join("");

};

console.log(convert("PAYPALISHIRING", 3));
