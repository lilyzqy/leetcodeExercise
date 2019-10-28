/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ans = {};

    strs.forEach((s) => {
        const sorted = s.split("").sort().join("");
        if(ans[sorted] === undefined) {
            ans[sorted] = [s];
        } else {
            ans[sorted].push(s);
        }
    });

    return Object.values(ans);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
