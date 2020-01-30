function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let tail = dummyHead;
  let l1Current = l1;
  let l2Current = l2;
  const pushToTail = val => {
    tail.next = new ListNode(val);
    tail = tail.next;
  };
  while (l1Current && l2Current) {
    if (l1Current.val < l2Current.val) {
      pushToTail(l1Current.val);
      l1Current = l1Current.next;
    } else {
      pushToTail(l2Current.val);
      l2Current = l2Current.next;
    }
  }
  if (!l1Current) {
    tail.next = l2Current;
  }
  if (!l2Current) {
    tail.next = l1Current;
  }
  return dummyHead.next;
};

const formatList = list => {
  if (!list) {
    return "null";
  }
  let result = `${list.val}`;
  let current = list.next;
  while (current) {
    result = `${result}->${current.val}`;
    current = current.next;
  }
  return result;
};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(formatList(mergeTwoLists(l1, l2)));
