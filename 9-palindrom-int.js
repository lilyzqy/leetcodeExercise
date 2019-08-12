/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    /* cases when negtive number or last digit 0, except 0 itself*/
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    /* prepare the revered number */
    let reversed = 0;

    /* get digits to form the reversed number */
    while (x > reversed) {

        /* get digit */
        const digit = x % 10;

        /* reverse the number */
        reversed = reversed * 10 + digit;

        /* get new number */
        x = Math.floor(x / 10);

    }
    /* compare to see if is palindrome */
    /* even digits compare to x; odd digits / 10 */
    return x === reversed || x === Math.floor(reversed / 10);

};

/* edage cases 0 10 -121 , test 1001 121*/
