// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function addTwoNumbers(l1, l2) {
  let carry = 0;
  while (l1 !== null && l2 !== null) {
    let total = l1.data + l2.data + carry;
    if (total > 9) {
      carry = 1;
      l1.data = total % 10;
    } else {
      carry = 0;
      l1.data = total;
    }

    l1 = l1.next;
    l2 = l2.next;
  }
}
