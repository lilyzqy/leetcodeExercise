/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */


var assignBikes = function(workers, bikes) {
    //distance compute
    const dis = (w,b) => Math.abs(w[0] - b[0]) + Math.abs(w[1] - b[1]);

    //prepare sum
    let sum = 0;

    //bucket to store pairs according to distance
    const bucket = [];

    //sort w,b pairs by distance
    for(let i = 0; i < workers.length; i++) {
        for(let j = 0; j <bikes.length; j++) {
            const distance = dis(workers[i],bikes[j]);
            if(!bucket[distance]){
                bucket[distance] = [];
            }
            bucket[distance].push([i,j]);
        }
    }

    console.log(bucket);
    // from small distance to large, assign the worker and add the sum
    bucket.forEach((list, distance) => {
        if(list) {
            for(let k = 0; k < list.length; k++) {
                const w = list[k][0];
                const b = list[k][1];
                //assign when both available
                if(workers[w] && bikes[b]){
                  console.log(w,b);
                    //add up the distance
                    console.log(distance);
                    sum += distance;
                    //remove from worker and bike data
                    workers[w] = null;
                    bikes[b] = null;
                    console.log(workers,bikes);
                }
            }
        }
    });

    return sum;
};

console.log(assignBikes([[0,0],[2,1]],[[1,2],[3,3]]));
