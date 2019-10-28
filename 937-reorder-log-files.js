/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {

    logs.sort((a,b) => {
      console.log(a,"---",b);


        let indexA = a.indexOf(" ");
        let indexB = b.indexOf(" ");
        let idA = a.slice(0,indexA);
        let idB = b.slice(0,indexB);
        let nonIDA = a.slice(indexA + 1);
        let nonIDB = b.slice(indexB + 1);

        let isDigitA = !!nonIDA.match(/[0-9]/);
        let isDigitB = !!nonIDB.match(/[0-9]/);
        console.log(isDigitA,isDigitB);

        //both not digit-log
        if(!isDigitA && !isDigitB) {

            for(let i = 0; i < nonIDA.length; i++) {
                const codeA = nonIDA.charCodeAt(i);
                const codeB = nonIDB.charCodeAt(i);
                if(codeA - codeB !== 0) {
                    return codeA - codeB;
                }
            }

            for(let j = 0; j < idA.length; j++) {
                const codeA = idA.charCodeAt(j);
                const codeB = idB.charCodeAt(j);
                if(codeA - codeB !== 0) {
                    return codeA - codeB;
                }
            }
        }

        //both digit keep order, one digit digit come later
        return isDigitA ? (isDigitB ? 0 : 1) : -1 ;

    });

    return logs;
};

// console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
// console.log(reorderLogFiles(["1 n u", "r 527", "j 893", "6 14", "6 82"]));
// console.log(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]));
console.log(reorderLogFiles(["6p tzwmh ige mc", "ns 566", "ubd cujg", "ha6 1 938", "3yx 97 66", "d 84 34", "0 tllg", "s 10887", "ys0 sp", "uhb rf r", "u lr", "ah4 420", "rap 7729 ", "4 nivg", "apx 81"]));
