/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //hash table
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    let store = {};
    let store2 = {};

    for(let i = 0; i < s.length; i++) {
        store[s[i]] = store[s[i]] === undefined ? 1 : store[s[i]] + 1;
        store2[t[i]] = store2[t[i]] === undefined ? 1 : store2[t[i]] + 1;
    }

    const letters = Object.keys(store);

    for(let j = 0; j < letters.length; j++) {
        if(store[letters[j]] !== store2[letters[j]]){
            return false;
        }
    }

    return true;
};

// sorting
var isAnagram2 = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    return s.split("").sort().join("") === t.split("").sort().join("");
};
