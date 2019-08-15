/**
 * There are N gas stations along a circular route,
 * where the amount of gas at station i is gas[i].

 * You have a car with an unlimited gas tank and it costs cost[i] of gas
 * to travel from station i to its next station (i+1).
 * You begin the journey with an empty tank at one of the gas stations.

 * Return the starting gas station's index
 * if you can travel around the circuit once in the clockwise direction,
 * otherwise return -1.
 */


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    /* the circuit will not be complete if
    there is no enough fuel for the whole trip*/
    let sumGas = 0; let sumCost = 0;
    for(let i = 0; i < gas.length; i++){
        sumGas += gas[i];
        sumCost += cost[i];
    }
    if(sumCost > sumGas) {return -1;}

    /* Reset the start point every time when there is not enough fuel*/
    let tank = 0; let start = 0; let i = 0;
    while(i < gas.length) {
        if(tank + gas[i] - cost[i] < 0) {
            start = i + 1;
            tank = 0;
        } else {
            tank += gas[i] - cost[i];
        }
        i++;
    }

    return start;
};

console.log(canCompleteCircuit([1,9,3],[11,1,1]));
