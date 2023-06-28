export class ListNode {
  val: number

  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export class MyLinkedListNode {
  val: number

  next: MyLinkedListNode | null

  constructor(val?: number, next?: MyLinkedListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/*
* ==============================================================虚拟头节点=========================================================
* 1. 为什么要使用虚拟头节点？
*    因为要操作一个节点时，需要拿到待操作节点的前一个节点，因为头节点没有前一个节点，所以需要对操作头节点的情况进行单独的判断和处理，如删除节点时，如果删除的是普通节点，
*    那么只需要将待删除节点的前一个节点指向待删除节点的下一个节点即可，如果删除的是头节点，因为头节点没有前一个节点，所以就需要将头节点指向头节点的下一个节点。
*    需要对链表节点进行操作时，都需要单独对头节点进行处理，这样比较麻烦。
* 2. 什么是虚拟头节点？
*    虚拟头节点是在对节点进行操作前先定义的一个节点，这个节点的下一个节点指向头节点，这样头节点就有前一个节点了，这样再对头节点进行操作时，
*    就可以将头节点看成是一个普通的节点进行操作了，因为虚拟头节点的 next 就是真实头节点，所以有需要返回头节点的情况就直接返回虚拟头节点的 next
* 3. 什么时候使用虚拟头节点？
*    在需要对节点进行操作时，因为对节点进行操作，需要拿到待操作节点的前一个节点，这时就需要使用虚拟头节点时头节点也有前一个节点。
*    如果只是对节点进行查询和访问，就不需要使用虚拟头节点
*/

/**
 * @description 203. 移除链表元素
 * 使用虚拟头节点dummyHead进行求解：定义一个虚拟头节点，使其指向真实的头节点，然后对所有节点的删除操作就跟删除普通节点一样了，不用再判断是否是头节点，然后真实的头节点就为虚拟头节点的next
 * @param head
 * @param val
 */
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let currentNode = dummyHead;
  while (currentNode.next) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
      continue;
    }
    currentNode = currentNode.next;
  }
  return dummyHead.next;
}

// 206. 反转链表
export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

// 面试题 02.07. 链表相交

// 707. 设计链表
export class MyLinkedList {
  head: MyLinkedListNode | null

  constructor() {
    this.head = null;
  }

  // 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1
  get(index: number): number {
    let cur = this.head;
    while (index > 0 && cur) {
      cur = cur.next;
      index--;
    }
    return cur ? cur.val : -1;
  }

  // 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
  addAtHead(val: number): void {
    const newNode = new MyLinkedListNode(val, this.head);
    this.head = newNode;
  }

  // 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
  addAtTail(val: number): void {
    let dummyHead = new MyLinkedListNode(0, this.head);
    let cur = dummyHead;
    const newNode = new MyLinkedListNode(val);
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = newNode;
    this.head = dummyHead.next;
  }

  // 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
  addAtIndex(index: number, val: number): void {
    let dummyHead = new MyLinkedListNode(0, this.head);
    let cur = dummyHead;
    const newNode = new MyLinkedListNode(val);
    while (index > 0 && cur) {
      cur = cur.next;
      index--;
    }
    if (cur) {
      newNode.next = cur.next;
      cur.next = newNode;
    }
    this.head = dummyHead.next;
  }

  // 如果下标有效，则删除链表中下标为 index 的节点。
  deleteAtIndex(index: number): void {
    const dummyHead = new MyLinkedListNode(0, this.head);
    let cur = dummyHead;
    while (index > 0 && cur) {
      cur = cur.next;
      index--;
    }
    if (cur && cur.next) {
      cur.next = cur.next.next;
    }
    this.head = dummyHead.next;
  }
}

/**
 * @description 24. 两两交换链表中的节点
 * 使用虚拟头结点，这样会方便很多，要不然每次针对头结点（没有前一个指针指向头结点），还要单独处理。
 * 因为需要交换两个节点，所以必须要拿到需要操作的两个节点的前一个节点，这样才能对两个节点进行操作，正因为需要拿到操作的两个节点的前一个节点，
 * 所以才要使用虚拟头节点，因为虚拟头节点的next就指向头节点，这样对头节点进行操作时，就跟普通节点操作一样，不用特殊处理，因为头节点的前一个节点就是虚拟头节点
 * @param head
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let cur = dummyHead;
  while (cur?.next?.next) {
    const temp1 = cur.next;
    const temp2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp1;
    temp1.next = temp2;
    cur = cur.next.next;
  }
  return dummyHead.next;
}

/**
 * @description  剑指 Offer II 021. 删除链表的倒数第 n 个结点
 * 1. 使用虚拟头节点方式：因为倒数第 n 个节点可能为头节点，使用虚拟头节点即可不用单独处理头节点的情况
 * 2. 要删除倒数第 n 个节点，那么就需要拿到倒数第 n + 1 个节点的指针，这样才能操作倒数第 n 个节点
 *    例如：要删除倒数第 2 个节点，那么就需要拿到倒数第 3 个节点的指针，然后将倒数第 3 个节点的 next 指向 next 的 next，就达到了删除的目的
 * 3. 如何找倒数第 n 个节点：使用双指针的方式，定义两个指针slow，fast，初始化时都指向虚拟头节点 dummyHead，fast 先走 n + 1 步后，两个指针再同步向后移动，
 *    当前 fast 移动到最后一个节点的 next时，即 fast === null 时，slow 就指向了倒数第 n + 1 个节点，这时只需要使 slow.next = slow.next.next，就删除了倒数第 n 个节点
 * @param head
 * @param n
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;
  n++;
  while (n-- && fast) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  if (slow?.next) {
    slow.next = slow.next.next;
  }
  return dummyHead.next;
}
/**
 * @description 142. 环形链表 II
 * 使用双指针进行解答：
 *  定义快慢指针 slow 和 fast ，快指针每次移动 2 步，慢指针每次移动一步，假如慢指针走了 k 步之后与快指针相遇，这时快指针走了 2k 步，同时 k 一定是环长度的整数倍，
 *  假如相遇点距离环起点的距离为 m，则从头节点到环起点的的距离为 k - m，即从头节点走 k - m 步就到了环的起点。
 *  因为 k 为环长度的整数倍，所以从相遇点走 k 步之后又到了相遇点，往前倒退 m 步则到了环起点，这时走过的距离为 k - m ，即从相遇点继续向前走 k - m 步同样也到了环的起点。
 *  由此可知，从头节点到环起点要走 k - m 步，从相遇点到环起点也可以沿环走 k - m 步，即走的距离相同，那么此时只需要将快慢指针中的一个指向头节点 head，然后两个节点再以相同的速度前进，
 *  那么当两个指针相遇时，这时的节点就是环的起点
 * @param head
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}
