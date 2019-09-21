/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const digits = Array(10).fill(0);
    let bull = 0;
    let cow = 0;

    for(let i =0; i < guess.length; i++) {
        if(guess[i] === secret[i]) {
            bull++;
        } else {
            digits[secret[i]]++;
            cow += digits[secret[i]] === 0 ? 1 : 0;
            console.log(cow,digits);
            digits[guess[i]]--;
            cow += digits[guess[i]] === 0 ? 1: 0;
            console.log(cow,digits);
        }
    }

    return `${bull}A${cow}B`;
};

console.log(getHint("1122","2211"));
// console.log(getHint("0194","9038"));
