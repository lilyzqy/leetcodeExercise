/**
 * Definition for singly-linked list.
 */ function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} root
  * @param {number} k
  * @return {ListNode[]}
  */
 var splitListToParts = function(root, k) {

     const result = new Array(k);

     result.fill(null);

     if(!root) {
         return result;
     }

     let pointer = root;
     let counter = 1;

     while(pointer.next){
         pointer = pointer.next;
         counter++;
     }

     const listLength = counter;

     for(let i = 0; i < result.length; i++) {
         const length = Math.floor(listLength / k) + (i < listLength % k ? 1: 0 );

         if(length === 0) {
             continue;
         }

         pointer = root;
         counter = 1;

         while(counter < length) {
             pointer = pointer.next;
             counter++;
         }

         const nextNode = pointer.next;

         pointer.next = null;

         result[i] = root;

         root = nextNode;
     }

     return result;

 };

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(splitListToParts(a, 3));
console.log("------------");
c.next = null;
console.log(splitListToParts(a, 3));
