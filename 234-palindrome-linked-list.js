/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    /* no head */
    if (head === null) {
        return true;
    }

    /* two pointers */
    let slow = head;
    let fast = head;
    const vals = [];

    /* find the middle */
    while (fast !== null && fast.next !== null) {

        /* save each value */
        vals.push(slow.val);

        /* move one step */
        slow = slow.next;

        /* move two steps until find the end*/
        fast = fast.next.next;
    }

    /* compare the value to the value of next nodes */
    /* odd number of nodes need to move to the next node to compare */
    if (fast) {
        slow = slow.next;
    }

    while (slow) {

        /* return false when one is not matching */
        if (vals.pop() !== slow.val) {
            return false;
        }

        slow = slow.next;

    }

    return true;

};

const a = new ListNode(0);
const b = new ListNode(0);
a.next = b;

console.log(isPalindrome(a));

/* edage cases no head */
