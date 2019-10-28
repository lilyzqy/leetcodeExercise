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
var rob = function(root) {
    let robMoney = helper(root);
    return Math.max(robMoney[0],robMoney[1]);
};

function helper(node) {
    if(!node) return [0,0];

    let robLeft = helper(node.left);
    let robRight = helper(node.right);

    return [ robLeft[1] + robRight[1] + node.val, Math.max(robLeft[0], robLeft[1]) + Math.max(robRight[0], robRight[1])];
}


const a = new TreeNode(3);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(3);
const f = new TreeNode(6);
const g = new TreeNode(1);
const h = new TreeNode(8);

a.left = b;
a.right = c;
// b.left = d;
b.right = e;
// c.left = f;
c.right = g;
// d.left = h;

console.log(rob(a));
