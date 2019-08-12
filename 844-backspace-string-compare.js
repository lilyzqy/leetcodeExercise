/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function(S, T) {
//     S = resultString(S);
//     T = resultString(T);
//
//     return S === T;
// };
//
// const resultString = (string) => {
//     for(let i = 0; i <= string.length; i++) {
//         if(string[i] === "#"){
//             if(i === 0) {
//                 string = string.slice(1,string.length);
//                 i--;
//             } else {
//                 string = string.slice(0, i - 1) + string.slice(i + 1, string.length);
//                 i-= 2;
//             }
//         }
//     }
//     return string;
// };

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipCountS = 0;
    let skipCountT = 0;

    while(i >= 0 || j >= 0) {
        while(i >= 0) {
            if(S[i] === '#'){
                skipCountS++;
                i--;
            } else if(skipCountS > 0) {
                skipCountS--;
                i--;
            } else {
                break;
            }
        }
        while(j >= 0) {
            if(T[j] === '#'){
                skipCountT++;
                j--;
            } else if(skipCountT > 0) {
                skipCountT--;
                j--;
            } else {
                break;
            }
        }
        if(j < 0 && i < 0) {
            break;
        }

        if(S[i] !== T[j]) {
            return false;
        } else {
            i--; j--;
        }
    }

    return true;

};

console.log(backspaceCompare("ab##", "c#d#"));
