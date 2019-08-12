/**
 * Definition for singly-linked list.
 */ function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


/**
 * 1. k times :find end, end-1.next = null, end.next= head, head = end; 0(k*n)
 * 2. two pointer to find k from end, move the whole partial list to begining
 *      - edge case: k === 0
 *      - O(2n - k)
 */
 var rotateRight = function(head, k) {

     if(!head || !head.next || k === 0) {
         return head;
     }

     /* set counter */
     let counter = 1;
     let slow = head;
     let fast = head;
     let prev;

     /* separate slow and fast to k */
     while(counter < k) {
       console.log("counter",counter);

         /* keep moving fast*/
         fast = fast.next;
         counter++;

         /* when no more node before find k */
         if(!fast.next) {
           console.log("no more node");

             const length = counter;

             /* reset */
             fast = head;
             counter = 1;

             k = k % length;

             if(k === 0) {
                return head;
            }
         }
     }

     /* k === list length */
     if(!fast.next) {
         return head;
     }

     while(fast.next) {
         prev = slow;
         slow = slow.next;
         fast = fast.next;
     }

     prev.next = null;
     fast.next = head;
     head = slow;

     return head;
 };







var rotateLeft = function(head, k) {

  if(!head || !head.next) {
        return head;
    }

    /* set counter */
    let counter = 1;
    let currNode = head;

    /* find k */
    while(counter < k) {
        currNode = currNode.next;
        counter++;

        console.log(counter);

        if(!currNode.next) {

            const length = counter;
            /* reset currNode */
            currNode = head;
            counter = 1;

            k = k % length;
        }
    }

    const kth = currNode;

    if(!kth.next) {
        return head;
    }

    while(currNode.next) {
        currNode = currNode.next;
    }

    currNode.next = head;
    head = kth.next;
    kth.next = null;

    return head;

};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(rotateLeft(a,2));
console.log(rotateRight(a,2));
