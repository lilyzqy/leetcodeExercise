/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    //cal Manhattan distance
    const dis = (w,b) => Math.abs(w[0] - b[0]) + Math.abs(w[1] - b[1]);

    //prepare result
    const ans = [];

    //list
    let lists = [];

    //dic for checking if worker or bike is assigned
    const assignedW = {};
    const assignedB = {};

    //loop through every bike and worker to get distance
    for(let i = 0; i < workers.length; i++) {
        for(let j = 0; j < bikes.length; j++) {
            const b = bikes[j];
            const w = workers[i];

            let distance = dis(w,b);
            console.log(distance);
            if(!lists[distance]) lists[distance] = [];
            lists[distance].push([i,j]);
            console.log(lists);
        }
    }

    //loop through lists and assign w b,stop when all worker done assigning
    for(let k = 0; k < lists.length; k++) {
        //got list of k distance
        const list = lists[k];
        if(list) {

          //go through list and assign w-b
          for(let pair = 0; pair < list.length; pair++) {
            const wIndex = list[pair][0];
            const bIndex = list[pair][1];

            if(!assignedW[wIndex] && !assignedB[bIndex]) {
              ans[wIndex] = bIndex;
              assignedW[wIndex] = true;
              assignedB[bIndex] = true;
            }
          }
        }
    }

    return ans;
};

console.log(assignBikes([[0,0],[2,1]],[[1,2],[3,3]]));
