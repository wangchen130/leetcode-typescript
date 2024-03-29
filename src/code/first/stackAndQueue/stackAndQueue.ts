/**
 * @description 232. 用栈实现队列
 * 用两个栈实现队列，一个入栈一个出栈，进行push操作时，将元素 push 到入栈中，进行 pop 操作时，先判断出栈中是否有元素，如果有就直接弹出，
 * 如果没有就将入栈中的全部元素依次弹出，然后依次加入到出栈中，然后再弹出出栈中的元素
 */
export class MyQueue {
  private inStack: number[]

  private outStack: number[]

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  peek(): number {
    const res: number = this.pop();
    this.outStack.push(res);
    return res;
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

/**
 * @description 225. 用队列实现栈
 * 使用一个队列即可实现栈，在 push 操作时，直接将元素push到队列中，在 pop 操作时，先将队列里的 queue.length - 1 个元素先依次出队列再依次入队列，
 * 然后将队头的元素出队列后在返回即可
 */
export class MyStack {
  private queue: number[]

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  // 移除并返回栈顶元素。
  pop(): number {
    const len = this.queue.length;
    if (len === 0) return undefined;
    for (let i = 0; i < len - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
  }

  // 返回栈顶元素。
  top(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * @description 20. 有效的括号
 * 使用栈进行求解，只要遇到左括号，就将其加入到栈中，只要遇到右括号，就将其与栈顶的括号相对比，一旦相匹配
 * 就将栈顶的元素弹出，不相匹配就直接返回 false，循环结束后如果栈为空则为优先括号，否则不是
 * @param s
 */
export function isValid(s: string): boolean {
  const len = s.length;
  if (len % 2 !== 0) return false;
  const stack: string[] = [];
  for (let i = 0; i < len; i++) {
    const sItem = s[i];
    if (sItem === '(' || sItem === '[' || sItem === '{') {
      stack.push(sItem);
    } else if (
      (sItem === ')' && stack[stack.length - 1] === '(') ||
      (sItem === ']' && stack[stack.length - 1] === '[') ||
      (sItem === '}' && stack[stack.length - 1] === '{')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

/**
 * @description 1047. 删除字符串中的所有相邻重复项 s = "abbaca"
 * 思路：使用栈进行解答，因为会存在 s = "abbaca" 这种情况，当删除了 bb 两个字符后，第一个字符 a 和 第四个字符 a 就会变成相邻的字符，这时又需要将两个 a 删除，
 * 所以，可以使用栈这种数据结构，当依次将 a，b 压入栈后，当准备将第三个字符 b 压入栈时，发现该字符与栈顶的字符相同，这时将栈顶的字符弹出栈，然后开始下一轮循环，
 * 当准备将第四个字符 a 压入栈时，发现该字符与栈顶字符 a 相同，这时再将栈顶元素弹出栈，这样就能达到删除字符串中所有相邻重复项的目的
 * @param s
 */
export function removeDuplicates(s: string): string {
  const len = s.length;
  const stack: string[] = [];
  for (let i = 0; i < len; i++) {
    const sItem = s[i];
    if (stack.length === 0 || stack[stack.length - 1] !== sItem) {
      stack.push(sItem);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}
// 150. 逆波兰表达式求值
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (let i = 0, len = tokens.length; i < len; i++) {
    const tokensItem = tokens[i];
    if (tokensItem === '+' || tokensItem === '-' || tokensItem === '*' || tokensItem === '/') {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (tokensItem === '+') stack.push(num2 + num1);
      if (tokensItem === '-') stack.push(num2 - num1);
      if (tokensItem === '*') stack.push(num2 * num1);
      if (tokensItem === '/') stack.push(Math.trunc(num2 / num1));
    } else {
      stack.push(Number(tokensItem));
    }
  }
  return stack.pop();
}

/**
 * @description 239. 滑动窗口最大值 nums = [1,3,-1,-3,5,3,6,7], k = 3
 * @param nums
 * @param k
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {

}

/**
 * @description 347. 前 K 个高频元素 nums = [1,1,1,2,2,3], k = 2
 * @param nums
 * @param k
 */
export function topKFrequent(nums: number[], k: number): number[] {

}
