/**
 * @param {number} N
 * @return {number}
 */
 /**
  * @param {number} N
  * @return {number}
  */
 var rotatedDigits = function(N) {
     let validNs = 0;
     for( let i = 1; i <= N; i++) {
       console.log("====", i, isValid(i));
         if(isValid(i)) {
             validNs++;
         }
     }
     return validNs;
 };

 function isValid(n) {
     let rotated = '';
     let temp = n;
     let dic = {0:0,
                1:1,
                8:8,
                2:5,
                5:2,
                6:9,
                9:6};

     while(n !== 0 ) {
         let digit = n % 10;
         console.log(digit);
         if( dic[digit] === undefined) {
             return false;
         }

         rotated = dic[digit] + rotated;
         n = parseInt(n / 10);
         console.log(rotated, n);
     }

     console.log(rotated, temp);
     return temp !== parseInt(rotated);
 }
console.log(rotatedDigits(10));
