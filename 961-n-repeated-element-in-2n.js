/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let N = A.length / 2;
    let dic = {};
    console.log(N);

    for(let i = 0; i <  A.length; i++) {
      console.log(A[i]);
        if(dic[A[i]] === undefined) {
            dic[A[i]] = 1;
        } else {
            dic[A[i]] = dic[A[i]] + 1;
        }
        console.log(dic);

        if(dic[A[i]] === N) {
            return A[i];
        }
    }
};

console.log(repeatedNTimes([1,2,3,3]));
