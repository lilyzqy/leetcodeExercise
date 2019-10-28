/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {return "";}
    let lCP = "";

    for(let i = 0; i < strs[0].length; i++) {
        const letter = strs[0][i];
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== letter) {
                return lCP;
            }
        }
        lCP += letter;
    }

    return lCP;
};
