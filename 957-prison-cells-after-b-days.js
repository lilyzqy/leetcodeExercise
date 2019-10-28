/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    let ans = [];

    for(let day = 1; day <= N; day++) {
      console.log(N% 16, day);
      for(let i = 0; i < 8; i++) {
        if(i === 0 || i === 7) {
          ans[i] = 0;
        } else {
          ans[i] = cells[i - 1] ^ cells[i + 1] ? 0 : 1;
        }
      }
      cells = ans;
      console.log(cells);
      ans = [];
    }

    return cells;
};

// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],1));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],2));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],3));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],4));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],5));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],6));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],7));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],8));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],9));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],10));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],11));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],12));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],13));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],14));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],15));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],16));
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1],17));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],100000000));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],2));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],3));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],4));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],5));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],6));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],7));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],8));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],9));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],10));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],11));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],12));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],13));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],14));
// console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],15));
console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],16));
