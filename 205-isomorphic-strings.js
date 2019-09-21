/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
     if(s.length !== t.length) {return false;}
     if(s === t) {return true;}

     const dicS = {};
     const dicT = {};

     for(let i = 0; i < s.length; i++) {
         //pair char into dics if not paired yet
         if(dicS[s[i]] === undefined && dicT[t[i]] === undefined) {
             dicS[s[i]] = t[i];
             dicT[t[i]] = s[i];
         //t[i] s[i] is not the paired one
         } else if(dicS[s[i]] !== t[i] || dicT[t[i]] !== s[i]){
             return false;
         }
     }

     return true;
 };

console.log(isIsomorphic("ab","aa"));
console.log(isIsomorphic("aa","ab"));
