/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 */

 /* Definition for singly-linked list. */
 function ListNode(val) {
    this.val = val;
    this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /* preset overflow */
    let overflow = 0;
    let headNode;
    let nextNode;

    /* loop through two lists if lists not ended */
    while ( l1 || l2 ) {

        /* sum up */
        const d1 = l1 ? l1.val : 0;
        const d2 = l2 ? l2.val : 0;
        const sum = d1 + d2 + overflow;

        /* get digit */
        overflow = Math.floor( sum / 10 );
        const digit = sum % 10;

        const newNode = new ListNode(digit);

        /* set head if there is none */
        if (!headNode) {
            headNode = newNode;
            nextNode = newNode;
        /* link the node and set the nextnode for next link */
        } else {
            nextNode.next = newNode;
            nextNode = newNode;
        }

        if(l1) { l1 = l1.next; }
        if(l2) { l2 = l2.next; }

    }

    /* add 1 to next node if still overflow left */
    if (overflow) {
        const newNode = new ListNode(1);
        nextNode.next = newNode;
    }

    return headNode;

};
