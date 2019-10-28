/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    //get banned into dic
    const bandDic = {};
    banned.forEach((b) => {bandDic[b] = true;});

    //seperate words into array
    const words = paragraph.match(/\b\w+\b/g);

    //go through words check freq
    const dic = {};
    let result = "";
    let maxTimes = 0;

    for(let i = 0; i < words.length; i++) {
        const w = words[i].toLowerCase();
        if(bandDic[w]) {continue;}
        dic[w] = dic[w] === undefined ? 1 : dic[w] + 1;
        if(dic[w] > maxTimes) {
            result = w;
            maxTimes = dic[w];
        }
    }

    return result;
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",
["hit"]));
