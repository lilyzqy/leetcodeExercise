/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function(root) {
//     return !root ? 0 : 1 + countNodes(root.left) + countNodes(root.right);
// };


var countNodes = function(root) {
    //edge case
    if(!root) return 0;
    //go deep to get how many levels thus how many nodes except last level
    const levels = depth(root);
    if(levels === 1) return 1;

    //2 power level except last
    const temp = Math.pow(2, levels - 1);

    //total nodes except last
    const nodesExceptLast = temp - 1;

    let left = 0;
    let right = temp - 1;
    while(left <= right) {
      let mid = Math.floor((right + left) / 2);
        if(!isNodeAtThisIndex(mid,levels,root)) {
          console.log("check left");
            right = mid - 1;
        } else {
          console.log("check right");
            left = mid + 1;
        }
        console.log(left, right,mid);
    }

    return nodesExceptLast + left;
};

function isNodeAtThisIndex(idx,level,node) {
  console.log("============");
    let left = 0;
    let right = Math.pow(2,level - 1) - 1;
    let mid;

    for(let i = 0; i < level - 1; i++) {
        mid = Math.floor((right + left) / 2);
        if(idx <= mid) {
          console.log("go left");
            node = node.left;
            right = mid;
        } else {
          console.log("go right");
            node = node.right;
            left = mid + 1;
        }
    }
    console.log(left, right, node);
    return node !== null;
}

function depth(node) {
    if(!node) {return 0;}
    return depth(node.left) + 1;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);
const h = new TreeNode(8);
const i = new TreeNode(9);
const k = new TreeNode(10);
const l = new TreeNode(11);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
// d.right = i;
// e.left = k;
// e.right = l;

console.log(countNodes(a));
