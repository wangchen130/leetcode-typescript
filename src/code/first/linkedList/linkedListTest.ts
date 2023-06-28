import {
  ListNode,
  MyLinkedList,
  removeElements, removeNthFromEnd,
  reverseList,
  swapPairs
} from './linkedList';

const arrayToLinkedList = (arr: number[]) => {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
};

// 203. 移除链表元素
export const testRemoveElements = () => {
  const head1 = [1, 2, 6, 3, 4, 5, 6];
  const val1 = 6;
  let headNode1 = arrayToLinkedList(head1);
  console.log('head=', head1);
  console.log('val=', val1);
  console.log('结果为：', removeElements(headNode1, val1));

  const head2 = [];
  const val2 = 1;
  let headNode2 = arrayToLinkedList(head2);
  console.log('head=', head2);
  console.log('val=', val2);
  console.log('结果为：', removeElements(headNode2, val2));

  const head3 = [7, 7, 7, 7];
  const val3 = 7;
  let headNode3 = arrayToLinkedList(head3);
  console.log('head=', head3);
  console.log('val=', val3);
  console.log('结果为：', removeElements(headNode3, val3));

};

// 206. 反转链表
export const testReverseList = () => {
  const head1 = [1, 2, 3, 4, 5];
  let headNode1 = arrayToLinkedList(head1);
  console.log('head=', head1);
  console.log('结果为：', reverseList(headNode1));

  const head2 = [1, 2];
  let headNode2 = arrayToLinkedList(head2);
  console.log('head=', head2);
  console.log('结果为：', reverseList(headNode2));

  const head3 = [];
  let headNode3 = arrayToLinkedList(head3);
  console.log('head=', head3);
  console.log('结果为：', reverseList(headNode3));

};

// 面试题 02.07. 链表相交

// 707. 设计链表
export const testMyLinkedList = () => {
  console.log('707. 设计链表:');
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(1);
  myLinkedList.addAtTail(3);
  myLinkedList.addAtIndex(1, 2); // 链表变为 1->2->3
  const val1 = myLinkedList.get(1); // 返回 2
  console.log('myLinkedList.get(1)=', val1);
  myLinkedList.deleteAtIndex(1); // 现在，链表变为 1->3
  const val2 = myLinkedList.get(1); // 返回 3
  console.log('myLinkedList.get(1)=', val2);
  console.log('myLinkedList:', myLinkedList);
};

// 24. 两两交换链表中的节点
export const testSwapPairs = () => {
  const head1 = [1, 2, 3, 4];
  let headNode1 = arrayToLinkedList(head1);
  console.log('head=', head1);
  console.log('结果为：', swapPairs(headNode1));
  const head2 = [1, 2, 3, 4, 5];
  let headNode2 = arrayToLinkedList(head2);
  console.log('head=', head2);
  console.log('结果为：', swapPairs(headNode2));
  const head3 = [];
  let headNode3 = arrayToLinkedList(head3);
  console.log('head=', head3);
  console.log('结果为：', swapPairs(headNode3));
  const head4 = [1];
  let headNode4 = arrayToLinkedList(head4);
  console.log('head=', head4);
  console.log('结果为：', swapPairs(headNode4));
};

// 剑指 Offer II 021. 删除链表的倒数第 n 个结点
export const testRemoveNthFromEnd = () => {
  const head1 = [1, 2, 3, 4, 5];
  const n1 = 2;
  const headNode1 = arrayToLinkedList(head1);
  console.log('head=', head1);
  console.log('n=', n1);
  console.log('结果为：', removeNthFromEnd(headNode1, n1));

  const head2 = [1];
  const n2 = 1;
  const headNode2 = arrayToLinkedList(head2);
  console.log('head=', head2);
  console.log('n=', n2);
  console.log('结果为：', removeNthFromEnd(headNode2, n2));

  const head3 = [1, 2];
  const n3 = 1;
  const headNode3 = arrayToLinkedList(head3);
  console.log('head=', head3);
  console.log('n=', n3);
  console.log('结果为：', removeNthFromEnd(headNode3, n3));

};

// 142. 环形链表 II
