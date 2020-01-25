function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let getValue = function(l) {
    return l === null ? 0 : l.val;
  };
  let getNext = function(l) {
    return l === null ? null : l.next;
  };
  let sum = l1.val + l2.val;
  let carry = Math.floor(sum / 10);
  let l3 = new ListNode(sum % 10);
  let next3 = l3;
  for (
    let next1 = l1.next, next2 = l2.next;
    next1 !== null || next2 !== null;
    next1 = getNext(next1), next2 = getNext(next2)
  ) {
    sum = getValue(next1) + getValue(next2) + carry;
    carry = Math.floor(sum / 10);
    next3.next = new ListNode(sum % 10);
    next3 = next3.next;
  }
  if (carry > 0) {
    next3.next = new ListNode(carry);
  }
  return l3;
};

const printList = function(l) {
  let num = l.val;
  let out = `${num}`;
  for (let next = l.next; next; next = next.next) {
    out = `${out} -> ${next.val}`;
    num = `${next.val}${num}`;
  }
  console.log(`${out} (${num})`);
};

const l1 = new ListNode(3);
l1.next = new ListNode(7);
l1.next.next = new ListNode(8);
l1.next.next.next = new ListNode(3);

const l2 = new ListNode(9);
l2.next = new ListNode(0);
l2.next.next = new ListNode(5);

printList(l1);
printList(l2);
printList(addTwoNumbers(l1, l2));
