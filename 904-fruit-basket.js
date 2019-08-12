/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {

    //pointers & type limit
    let secondTypeTree = 0;
    let fruitTotal = 0;
    let fruitCount = 0;
    let typeCount = 0;
    let fruitBasket = {};

    //loop
    for(let i = 0; i < tree.length; i++) {
        const fruit = tree[i];
        console.log(fruit ,i, fruitBasket, typeCount, fruitCount);

        //full and reset
        if(typeCount === 2 && fruitBasket[fruit] === undefined){
          fruitBasket={};
          if(fruitCount > fruitTotal) {
              fruitTotal = fruitCount;
          }
          typeCount = 0;
          fruitCount = 0;
          i = secondTypeTree - 1;

        // not full and old fruit
        } else if(typeCount <= 2 && fruitBasket[fruit] !== undefined){
          fruitCount++;

        //not full new fruit
        } else {
            fruitCount++;
            typeCount++;
            fruitBasket[fruit] = 1;
            //change 2ndpoint when it's the 2nd type
            if(typeCount === 2) {
                secondTypeTree = i;
            }
        }
    }
    if(fruitCount > fruitTotal) {
        fruitTotal = fruitCount;
    }
    return fruitTotal||fruitCount;
};


console.log(totalFruit([1,2,1]));
console.log(totalFruit([0,1,2,2]));
console.log(totalFruit([1,2,3,2,2]));
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));
