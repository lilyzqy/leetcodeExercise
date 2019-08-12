// /**
//  * @param {string} s
//  * @return {number}
//  */
//
// var lengthOfLongestSubstring = function(s) {
//
//     /* prepare result */
//     let longest = 0;
//     let map = {};
//
//     /* loop through string, with two pointers */
//     for (let start = 0 ; start < s.length; start++) {
//         let count = 1;
//         const charStart = s[start];
//         map[charStart] = 1;
//
//         for (let end = start + 1; end < s.length; end++) {
//             const charEnd = s[end];
//
//             /* add count and put into map if map does not have the letter */
//             if (!map[charEnd]) {
//                 map[charEnd] = 1;
//                 count++;
//
//             /*  and break the loop */
//             } else {
//                 break;
//             }
//         }
//
//         /* reset map */
//         map = {};
//
//         /* check longest with count */
//         if (count > longest) { longest = count; }
//     }
//
//     return longest;
//   };

//   var lengthOfLongestSubstring = function(s) {
//     let ans = 0;
//     const dictionary = {};
//
//         // try to extend the range [i, j]
//         for (let j = 0, i = 0; j < s.length; j++) {
//             if (dictionary[s[j]]) {
//                 i = Math.max(dictionary[s[j]], i);
//             }
//             ans = ans > j - i + 1 ? ans : j - i + 1;
//             dictionary[s[j]] = j + 1;
//         }
//         return ans;
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     const l = s.length;
//     let from = 0;
//     let to = 1;
//     let result = 1;
//     const dic = {[s[0]] : 1};
//
//     if(l <= 1) {
//         return l;
//     }
//
//     while(to < l) {
//
//         console.log(from, to, s[to], result, dic);
//
//         if(dic[s[to]] !== undefined) {
//             // dic[s[to]] can be small, and not in substring
//             from = Math.max(from, dic[s[to]]);
//         }
//
//         dic[s[to]] = to + 1;
//         to++;
//         result = to - from > result ? to - from : result;
//
//         console.log(from, to, s[to], result);
//
//     }
//
//     return result;
// };

/** best way
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const l = s.length;
    let from = 0;
    let to = 1;
    let result = 1;
    const dic = {[s[0]] : 1};

    if(l <= 1) {
        return l;
    }

    while(to < l) {
        const sub = s.slice(from, to);
        const i = sub.indexOf(s[to]);
        if(i !== -1) {
            from = from + i + 1;
        }

        to++;
        result = to - from > result ? to - from : result;
    }

    return result;
};



// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcadcdb"));
// console.log(lengthOfLongestSubstring("bbbb"));
// console.log(lengthOfLongestSubstring("au"));
