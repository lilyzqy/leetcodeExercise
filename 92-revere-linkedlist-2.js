/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
 var reverseBetween = function(head, m, n) {

    /* edge case no head or one node list */
    if(!head || !head.next || m === n) {
        return head;
    }

    /* set pointer */
    let currNode = head;
    let counter = 1;

    /* find m - 1 */
    while(counter < m - 1) {
        currNode = currNode.next;
        counter++;
    }

    let mthNode;
    let prevMNode;

    if(m === 1) {
        mthNode = head;
        counter = 0;
    } else {

        /* save m - 1 and m */
        prevMNode = currNode;
        mthNode = currNode.next;
    }

    /* move current node to m + 1 */
    currNode = mthNode.next;
    counter += 2;
    let prev = mthNode;

    /* find n */
    while(counter < n) {

        /* save next */
        const tempNext = currNode.next;

        /*link the prev */
        currNode.next = prev;

        /* move to next node */
        prev = currNode;
        currNode = tempNext;
        counter++;

    }

    /* save tempNext*/
    const tempNext = currNode.next;

    /* link n to n - 1 */
    currNode.next = prev;

    /* link m - 1 to n, edge case m is headNode */
    if(prevMNode) {

        prevMNode.next = currNode;
    } else {
        head = currNode;
    }

    /* link m to rest of the list */
    mthNode.next = tempNext;

    return head;
};

 const a = new ListNode(1);
 const b = new ListNode(2);
 const c = new ListNode(3);
 const d = new ListNode(4);
 const e = new ListNode(5);
 const f = new ListNode(6);

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 e.next = f;

 console.log(reverseBetween(a,2,4));

 /** edge case :
  *    m === 1;
  *    m === n;
  */
