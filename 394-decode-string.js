// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function(s) {
//     const stack = [];
//
//     //loop
//     for(let i = 0; i < s.length; i++) {
//       if(Number.isInteger(parseInt(s[i]))){
//           const start = i;
//           while(s[i] !== '['){
//             i++;
//           }
//           console.log([s.slice(start, i), i]);
//           stack.push([s.slice(start, i), i]);
//         } else if (s[i] === ']') {
//             let key = stack.pop();
//             console.log(key);
//             let times = key[0];
//             let timesLength = times.length;
//             let code = s.slice(key[1] + 1, i);
//             const originLength = i - (key[1] - times.length) + 1;
//             const newLength = parseInt(times) * code.length;
//             let decoded = '';
//             while(times > 0) {
//                 decoded += code;
//                 times--;
//             }
//             s = s.slice(0, key[1] - timesLength) + decoded + s.slice(i + 1);
//             i = i + newLength - originLength;
//         }
//     }
//
//     return s;
// };

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];

    //loop
    for(let i = 0; i < s.length; i++) {
        if(Number.isInteger(parseInt(s[i]))){
            let number = '';
            while(Number.isInteger(parseInt(s[i]))){
              number += s[i];
              i++;
            }
            i--;
            stack.push(parseInt(number));
        }else if(s[i] === '['){
            stack.push(s[i]);
        } else if (s[i] === ']') {
            let code = '';
            let repeat = '';
            while(stack[stack.length - 1] !== '['){
                repeat = stack.pop() + repeat;
            }
            console.log(repeat);
            stack.pop();
            let times = stack.pop();
            console.log(times);
            while(times > 0) {
                code += repeat;
                console.log(code);
                times--;
            }
            stack.push(code);
        } else {
            stack.push(s[i]);
        }
        console.log(stack);
    }

    return stack.join('');
};


// console.log(decodeString("10[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
