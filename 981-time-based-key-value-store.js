// /**
//  * Initialize your data structure here.
//  */
// var TimeMap = function() {
//     this.store = {};
// };
//
// /**
//  * @param {string} key
//  * @param {string} value
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function(key, value, timestamp) {
//     if(this.store[key] !== undefined) {
//         this.store[key].push({value, timestamp});
//     } else  {
//         this.store[key] = [{value, timestamp}];
//     }
// };
//
// /**
//  * @param {string} key
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function(key, timestamp) {
//     if(this.store[key] === undefined) {
//         return '';
//     }
//
//     const values = this.store[key];
//
//     return biSearch(values,timestamp);
// };
//
// const biSearch = (arr,target) => {
//   console.log(arr);
//     let result;
//
//     if(arr.length === 1){
//       console.log(arr[0].timestamp <= target);
//         if(arr[0].timestamp <= target) {
//             return arr[0].value;
//         } else {
//             return '';
//         }
//     }
//
//     let mid = Math.floor(arr.length / 2);
//         console.log(arr[mid]);
//
//     if(arr[mid].timestamp === target){
//        return arr[mid].value;
//     }else if(arr[mid].timestamp > target) {
//         result = biSearch(arr.slice(0,mid), target);
//     } else if(arr[mid].timestamp < target) {
//         result = biSearch(arr.slice(mid),target);
//     }
//
//     return result;
// };
//
//
// /**
//  * Your TimeMap object will be instantiated and called as such:
//  */
//  var obj = new TimeMap();
//  obj.set("a","b3",5);
//  obj.set("a","b4",7);
//  obj.set("a","b4",10);
//  var param_2 = obj.get("a",4);
//
//  console.log(param_2);
