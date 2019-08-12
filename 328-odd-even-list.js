/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    /* edge case */
    if(!head || !head.next || !head.next.next) {
        return head;
    }

    let odd = head;
    let even = head.next;

    const evenHead = head.next;

    /* find odd end and even end */
    while(odd.next && even.next) {

        const nextOdd = odd.next.next;
        const nextEven = even.next.next;

        odd.next = nextOdd;
        even.next = nextEven;

        odd = nextOdd ? nextOdd : odd;
        even = nextEven ? nextEven : even;
    }

    odd.next = evenHead;
    even.next = null;

    return head;


};
