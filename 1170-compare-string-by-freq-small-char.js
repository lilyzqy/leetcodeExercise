/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
// var numSmallerByFrequency = function(queries, words) {
//     //prepare ans
//     const ans = [];
//     //through q
//     for(let i = 0; i < queries.length; i++) {
//         const freQ = frequencySC(queries[i]);
//         let count = 0;
//         for(let j = 0; j < words.length; j++) {
//           console.log(j);
//             const freW = frequencySC(words[j]);
//             if(freW > freQ) {
//                 count++;
//             }
//         }
//         ans.push(count);
//     }
//     return ans;
// };

const numSmallerByFrequency = (queries,words) => {
  const wordsF = words.map((w) => frequencySC(w));

  const queriesF = queries.map((q) => frequencySC(q));

  return queriesF.map((qf) => {
    let count = 0;
    for(let i = 0; i < wordsF.length;i++) {
      if(wordsF[i] > qf){ count++;}
    }
    return count;
  });
};

//helper to get Frequency of the Smallest Character
function frequencySC(s) {
    const sorted = s.split("").sort();
    let count = 1;
    let i = 1;
    while(sorted[i] === sorted[0]) {
        count++;
        i++;
    }
    return count;
}

// console.log(numSmallerByFrequency(["cbd"],["zaaaz"]));
console.log(numSmallerByFrequency(["bbb","cc"],["a","aa","aaa","aaaa"]));
