/**
 * @param {number} x
 * @return {number}
 *
 * Note: 0; -; out of range result and input.
 */
var reverse = function(x) {

    const range = Math.pow(2, 31);

    /* return 0 if input out of signed 32 bit range */
    if (x < -range || x > range - 1 || !x){ return 0;}

    /* prepare result */
    let revered = x < 0 ? "-" : "";

    x = Math.abs(x);

    /* loop through each digit */
    while(x !== 0) {

        /* get current dight and reset x to the remaining digits */
        const digit = x % 10;
        x = Math.floor(x / 10);

        /* ignore if first digit for revered number is 0 */
        if (!revered && !digit) {
            continue;
        }

        revered+=digit;
    }

    const result = parseInt(revered);

    /* return 0 if result out of signed 32 bit range */
    if (result < -range || result > range - 1) { return 0;}

    /* return the reversed int */
    return result;
};
