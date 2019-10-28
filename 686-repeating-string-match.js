// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {number}
//  */
// var repeatedStringMatch = function(A, B) {
//     if(A.indexOf(B) !== -1) {return 1;}
//     let i = 0; let j = 0;
//     let times = 0;
//     let matching = false;
//     while(j < B.length) {
//
//         while(i < A.length && j < B.length) {
//             if(B[j] === A[i]) {
//                 matching = true;
//                 i++;
//                 j++;
//             } else {
//                 //
//                 if(matching){
//                   j = 0;
//                   i = 0;
//                 }
//                 i++;
//             }
//         }
//         i = 0;
//         times++;
//         console.log(times);
//     }
//
//     return times || -1;
// };
//
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    //go through B and keep repeating A and record how many times repeated
    //return false if B has letters that A does not have, return false
    let times = 1;
    let repeated = A;

    for(let i = 0; i < B.length; i++) {
        if(!repeated[i]) {
            repeated += A;
            times++;
            console.log(i,A,times);
        }
        if(A.indexOf(B[i]) === -1) {
            return -1;
        }
    }
    console.log(A,B,times);

    if(repeated.indexOf(B) === -1) {
        repeated += A;
            times++;
    }

    console.log(A,B);

    return repeated.indexOf(B) === -1 ? -1 : times;
};
// console.log(repeatedStringMatch("aaac","aac"));
// console.log(repeatedStringMatch("abcd","cdabcdab"));
console.log(repeatedStringMatch("abc","cabcabca"));
// console.log(repeatedStringMatch("abababaaba","aabaaba"));
