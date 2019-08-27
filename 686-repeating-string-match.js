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
// // console.log(repeatedStringMatch("aaac","aac"));
// // console.log(repeatedStringMatch("abcd","cdabcdab"));
// console.log(repeatedStringMatch("abababaaba","aabaaba"));
