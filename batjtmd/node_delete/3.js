/**
 * 使用dummy哨兵节点 + 头插法
 */
function reverseList(head) {
  // 他的next 将始终指向当前已反转部分的头节点
  const dummy = new ListNode(0);
  let cur = head; // 当前要处理的节点
  while(cur) {
    const next = cur.next; // 先保存下一个节点
    // 头插法 核心三步
    // 原来的head， 反转后指向了空
    // 下一轮 指向dummy.next
    cur.next = dummy.next; // 让当前节点指向已反转的头
    dummy.next = cur; // 成为新的反转头
    cur = next; // 移动到原链表的下一个节点
  }
  // 反转后的新头节点
  return dummy.next;
}