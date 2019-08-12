/**
 * Definition for singly-linked list.
 */
  function ListNode(val) {
     this.val = val;
     this.next = null;
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    /* return head if list contain only one or no node */
    if( !head || !head.next) {
        return head;
    }

    /* start from head */
    let currNode = head;
    let nextNode = head.next;

    /* loop through list */
    while(nextNode) {

        /* save nextNode */
        const tempSaveNext = nextNode.next;

        /* reverse */
        nextNode.next = currNode;

        if(currNode === head) {
            currNode.next = null;
        }

        /* reset current and next */
        currNode = nextNode;
        nextNode = tempSaveNext;
    }

    return currNode;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

console.log(reverseList(a));
