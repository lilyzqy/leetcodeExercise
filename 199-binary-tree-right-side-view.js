/**
 * Definition for a binary tree node.
 */
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    if (!root) { return []; }

    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
          console.log(queue.length);
            let node = queue.shift();
            console.log(node.val);
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
            level.push(node);
        }
        res.push(level.pop().val);
    }

    return res;
};

var rightSideView1 = function(root) {
    var result = [];

   return helper(root, 0, result);
};

const helper = (node, level, res) => {
    if (!node)  return res;
    if (res.length === level) res.push(node.val);

    helper(node.right, level + 1, res);
    helper(node.left, level + 1, res);

    return res;
};

var rightSideView2 = function(root){
  console.log(root);
	var res = [];
	const helper1 = function(node, level){
		if(!node) {
			return;
			}
      console.log(node.val,level);
		if(!res[level]){
      console.log("when");
			res.push(node.val);
		}
		helper1(node.right, level +1 );
		helper1(node.left, level + 1 );
	};
	helper1(root, 0);
	return res;
};


let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

// console.log(rightSideView(node1));
console.log(rightSideView2(node1));
