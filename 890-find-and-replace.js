/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const matchPattern = (w, p) => {
    if(w.length !== p.length) { return false; }
    const dic = {};
    const dic2 = {};

    for(let i = 0; i < w.length; i++) {
        if(dic[p[i]] === undefined && dic2[w[i]] === undefined) {
            dic[p[i]] = w[i];
            dic2[w[i]] = p[i];
        } else  {
            if(w[i] !== dic[p[i]] || p[i] !== dic2[w[i]]) {
                return false;
            }
        }
    }

    return true;
};

var findAndReplacePattern = function(words, pattern) {
    //prepare result
    const result = [];
    //loop through words and see if match pattern
    for(let i = 0; i < words.length; i++) {
        const w = words[i];
        //check if match and put into result
        if(matchPattern(w,pattern)) {
            result.push(w);
        }
    }

    return result;
};



console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],"abb"));
