/**
 * Definition for singly-linked list.
 */
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

/**
 * 2pass: get length then go again arrive at l - n + 1, remove
 * 1pass: two pointers, n + 1 from each other, when fast pointer to null,
 *    slow pointer will be the node looking for, remove
 */



/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    if(!head || !head.next) {
        return null;
    }

    /* define pointer */
    let fast = head;
    let slow = head;
    let counter = 1;
    let prev;

    /* loop */
    while(fast.next !== null) {

        /* move fast only to sepreate fast and slow to n length*/
        if(counter < n) {
            fast = fast.next;
            counter++;
        } else {

            /* move two pointers at same time until reach end */
            fast = fast.next;
            prev = slow;
            slow = slow.next;
        }

    }

    /* slow pointer is the nth from end */
    if(!prev) {

        head = slow.next;
    } else {
        prev.next = slow.next;
    }
    slow.next = null;

    return head;
};

 const a = new ListNode(1);
 const b = new ListNode(2);
 const c = new ListNode(3);
 const d = new ListNode(4);

 a.next = b;
 b.next = c;
 c.next = d;

console.log(removeNthFromEnd(a,1));
