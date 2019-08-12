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
var detectCycle = function(head) {

    if (head === null || head.next === null) {
        return null;
    }

    if(head.next === head) {
        return head;
    }

    let slow = head.next;
    let fast = head.next.next;
    let entry = head;

    while (slow !== fast) {

      console.log(slow.val);
        if (fast === null || fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast === fast.next) {
        return fast;
    }

    while(slow !== entry) {
        slow = slow.next;
        entry = entry.next;
    }

    return entry;
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
e.next = c;


console.log(detectCycle(a));
