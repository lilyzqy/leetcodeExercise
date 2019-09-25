/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //prepare result
    let islands = 0;
    //loop
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "1") {
                islands++;
                explore(grid, i, j);
            }
        }
    }
    return islands;
};

function explore(grid, i, j) {
    //base case
    if(i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1 || grid[i][j] === "0"){
        return;
    }

    grid[i][j] = "0";
    explore(grid, i - 1, j);
    explore(grid, i + 1, j);
    explore(grid, i, j - 1);
    explore(grid, i, j + 1);

    return;
}

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
