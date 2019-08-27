// Complete the findNumber function below.
function findNumber(arr, k) {
  arr.sort((a,b) => { return a - b;});
  return biSearch(arr,k);
}

function biSearch(arr,k) {
    let result;
    if(arr.length === 0){ return "no"; }
    let mid = Math.floor(arr.length / 2);
    if(k > arr[mid]){
        result = biSearch(arr.slice(mid + 1),k);
    } else if( k < arr[mid]) {
        result = biSearch(arr.slice(0,mid),k);
    } if(k === arr[mid]){
        return "yes";
    }

    return result;
}

console.log(findNumber([1,2,3],5));

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    for (var i = 0; i<n;i++) {
        var _line = __input_stdin_array[__input_currentline].trim();
        __input_currentline += 1;
        var line = _line.split(" ");
        var _a = parseInt(line[0]);
        var _b = parseInt(line[1]);
        res = _a + _b;
        process.stdout.write(""+res+"\n");
    }
});
