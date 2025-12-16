const removeNthFromEnd = function(head, n) {
  // dummy 节点
  const dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // 快指针先移动 N 步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 慢指针开始移动
  while(fast.next) { // 末尾
    fast = fast.next;
    slow = slow.next;
  }

  // 慢指针指向的就是倒数第 N 个结点的前一个
  slow.next = slow.next.next;// dummy 确保了 有值

  return dummy.next;
}