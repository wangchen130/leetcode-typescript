import { evalRPN, isValid, MyQueue, MyStack, removeDuplicates } from './stackAndQueue';
// 232. 用栈实现队列
export const testMyQueue = () => {
  const myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  console.log('myQueue:', myQueue);
  console.log(' myQueue.peek():', myQueue.peek());
  console.log(' myQueue.pop():', myQueue.pop());
  console.log(' myQueue.empty():', myQueue.empty());
};
// 225. 用队列实现栈
export const testMyStack = () => {
  const myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  console.log('push 1,2:');
  console.log('myStack.top():', myStack.top());
  console.log('myStack.pop():', myStack.pop());
  console.log('myStack.empty():', myStack.empty());
};

// 20. 有效的括号
export const testIsValid = () => {
  const s1 = '()';
  console.log('s=', s1);
  console.log('结果为：', isValid(s1));
  const s2 = '()[]{}';
  console.log('s=', s2);
  console.log('结果为：', isValid(s2));
  const s3 = '(]';
  console.log('s=', s3);
  console.log('结果为：', isValid(s3));
};

// 1047. 删除字符串中的所有相邻重复项
export const testRemoveDuplicates = () => {
  const s = 'abbaca';
  console.log('s=', s);
  console.log('结果为：', removeDuplicates(s));
};

// 150. 逆波兰表达式求值
export const testEvalRPN = () => {
  const tokens1 = ['2', '1', '+', '3', '*'];
  console.log('tokens=', tokens1);
  console.log('结果为：', evalRPN(tokens1));
  const tokens2 = ['4', '13', '5', '/', '+'];
  console.log('tokens=', tokens2);
  console.log('结果为：', evalRPN(tokens2));
  const tokens3 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
  console.log('tokens=', tokens3);
  console.log('结果为：', evalRPN(tokens3));
};

// 239. 滑动窗口最大值

// 347. 前 K 个高频元素
