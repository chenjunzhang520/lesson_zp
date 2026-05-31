function remove(head, val) {
  // 要删除的节点是头节点， 对头节点特殊处理
  // 能不能省？头节点没有前驱节点，尾节点没有后继节点
  // 给他一个前驱节点 dummy 节点 假的 哨兵节点
  // 遍历
  if (head && head.val === val) {
    return head.next
  }

  let cur = head
  while(cur.next) { // 遍历
    if (cur.next.val === val) {
      cur.next = cur.next.next
      break;
    } 
    cur = cur.next
  }
  return head
}