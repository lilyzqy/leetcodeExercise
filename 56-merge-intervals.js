// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function(intervals) {
//
//     for( let i = 0; i < intervals.length -1 && i >= 0; i++) {
//       console.log(intervals[i],intervals[i + 1], i, intervals.length);
//         if(intervals[i][1] >= intervals[i + 1][0]) {
//           if(intervals[i][0] > intervals[i+1][0] && intervals[i][1] > intervals[i+1][1]) {
//             [intervals[i],intervals[i+1]] = [intervals[i+1], intervals[i]];
//             if(i === 0){
//               console.log("1,1");
//               i--;
//             } else {
//               console.log("1,2");
//               i-=2;
//             }
//           } else {
//           const range1 = intervals[i][0] > intervals[i + 1][0] ? intervals[i + 1][0] : intervals[i][0];
//           const range2 = intervals[i][1] < intervals[i + 1][1] ? intervals[i + 1][1] : intervals[i][1];
//           intervals.splice(i, 2, [range1, range2]);
//           if(i === 0){
//             console.log("2,1");
//             i--;
//           } else {
//             console.log("2,2");
//             i-=2;
//           }
//         }
//       }
//         console.log(intervals);
//     }
//
//     return intervals;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let i = 0;
    while(intervals[i] && intervals[i + 1]) {
        const aS = intervals[i][0];
        const aE = intervals[i][1];
        const bS = intervals[i + 1][0];
        const bE = intervals[i + 1][1];

        if(aE >= bS) {
            // one replace two
            if(aS < bE || (aE === bS && aS === bE)) {
                const range1 = aS > bS ? bS : aS;
                const range2 = aE < bE ? bE : aE;

                intervals.splice(i, 2, [range1, range2]);
            //swtich, compaire with the one in the front
            } else {
                [intervals[i],intervals[i+1]] = [intervals[i+1], intervals[i]];
            }
            if(i !== 0) {
                i--;
            }
        } else {

            i++;
        }

    }

    return intervals;
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log("---------------------------------");
// console.log(merge([[1,4],[0,0]]));
// console.log("---------------------------------");
// console.log(merge([[1,4],[0,1]]));
// console.log("---------------------------------");
// console.log(merge([[1,4],[0,2],[3,5]]));
// console.log("---------------------------------");
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));
// console.log("---------------------------------");
// console.log(merge([[2,3],[5,5],[2,2],[3,4],[3,4]]));
// console.log("---------------------------------");
// console.log(merge([[5,5],[1,2],[2,4],[2,3],[4,4],[5,5],[2,3],[5,6],[0,0],[5,6]]));
// console.log("---------------------------------");
console.log(merge([[4,4],[3,5],[2,3],[1,1],[3,3],[1,3],[2,2],[0,0],[5,5],[0,0],[4,6]]));
