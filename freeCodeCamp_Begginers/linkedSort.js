const { List, Node } = require('./singleLinkedlist');

function merge_sort(linked_list) {
  if (!linked_list || linked_list.head === null) {
    return linked_list;
  }
  if (linked_list.size() === 1) {
    return linked_list;
  }

  const [leftHalf, rightHalf] = split(linked_list);
  const left = merge_sort(leftHalf);
  const right = merge_sort(rightHalf);

  return merge(left, right);
}

function split(linked_list) {
  if (!linked_list || linked_list.head === null) {
    return [linked_list, null];
  } else {
    const size = linked_list.size();
    const mid = Math.floor(size / 2);

    const mid_node = linked_list.nodeAtIndex(mid - 1);
    const left_half = linked_list;
    const right_half = new List();
    right_half.head = mid_node ? mid_node.next : null;
    if (mid_node) mid_node.next = null;

    // ajustar lengths e tails
    left_half.length = mid;

    let cur = right_half.head;
    let cnt = 0;
    let tail = null;

    while (cur) { tail = cur; cur = cur.next; cnt++; }
    right_half.length = cnt;
    right_half.tail = tail;

    // ajustar left_half.tail
    let lt = left_half.head;
    while (lt && lt.next) lt = lt.next;
    left_half.tail = lt;

    return [left_half, right_half];
  }
}

function merge(left, right) {
   const merged = new List();
   merged.add(0);

   let current = merged.head;

   let left_head = left.head;
   let right_head = right.head;

   while (left_head || right_head) {
    if (left_head === null) {
      current.next = right_head;
      right_head = right_head.next;
    } else if (right_head === null) {
      current.next = left_head;
      left_head = left_head.next;
    } else {
      const left_data = left_head.data;
      const right_data = right_head.data;

      if (left_data < right_data) {
        current.next = left_head
        left_head = left_head.next
      } else {
        current.next = right_head;
        right_head = right_head.next
      }
    }

    current = current.next
   }

   const head = merged.head.next
   merged.head = head;

   return merged
}

let l = new List()
l.add(1)
l.add(2)
l.add(0)
l.add(9)
l.add(5)

l = merge_sort(l)
console.log(l.stringify())