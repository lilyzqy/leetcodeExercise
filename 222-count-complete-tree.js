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
    //go deep to get how many levels thus how many nodes except last level
    const levelsExceptLast = depth(root) - 1;
    const nodesExceptLast = Math.pow(2, levelsExceptLast) - 1;
    return nodesExceptLast;
};

function isNodeWhere(idx,level,root) {

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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;

console.log(countNodes(a));
