/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = {"I": 1,
                 "V": 5,
                 "X": 10,
                 "L": 50,
                 "C": 100,
                 "D": 500,
                 "M": 1000,
                 };
    let sum = 0;
    let last = 0;
    for(let i = 0; i < s.length; i++) {
        let curr = dic[s[i]];
        console.log(last, curr);
        if(last < curr){
            sum += curr - 2 * last ;
        } else {
            sum += curr;
        }
        last = curr;
    }

    return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
