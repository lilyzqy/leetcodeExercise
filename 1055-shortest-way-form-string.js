/**???
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
    // let minNumber = 0;
    let iS = 0;
    let iT = 0;
    // go through target
    while(iT < target.length) {
      console.log(iT,iS);
        let iSTemp = iS;
        let charT = target[iT];
        let match = false;
        // keep checking charS until match
        while(!match){
          const lengthS = source.length;
            let charS = source[iS % lengthS];

            console.log(charT,charS);
            //match, move to next charT amd charS
            if(charT === charS) {
                iT++;
                iS++;
                match = true;
            } else {
              console.log(iSTemp, iS, iSTemp - iS);
                //already checked all charSs and no match
                if(iS - iSTemp === lengthS) {
                    return -1;
                //not match move to next charS
                } else {
                    iS++;
                }
            }
        }
    }

    return iS / source.length;
};

// console.log(shortestWay("abc","abcbc"));
console.log(shortestWay("abc","abdbc"));
