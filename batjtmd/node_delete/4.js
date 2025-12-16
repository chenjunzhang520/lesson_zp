function hasCycle(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) { 
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { // 同一块内存
      return true;
    }
  }
  // 快指针先到尾部
  return fast
}