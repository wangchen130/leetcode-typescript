// 26. 删除有序数组中的重复项
export function removeDuplicates(nums: number[]): number {
  // 慢指针
  let slow = 0;
  // 快指针
  let fast = 0;
  while (fast < nums.length) {
    // 两个值相等，则证明重复，快指针向前走一步
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      // 两个值不想等，将快指针的值赋值给慢指针的后一位
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

// 27. 移除元素
export function removeElement(nums: number[], val: number): number {
  // 慢指针
  let slow = 0;
  // 快指针
  let fast = 0;
  while (fast < nums.length) {
    // 遇到需要删除的值时，快指针向前走一步，即跳过需要删除的值
    if (nums[fast] === val) {
      fast++;
    } else {
      // 遇到不需要删除的值时，将快指针的值赋值给慢指针
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
  }
  return slow;
}

// 35. 搜索插入位置
export function searchInsert(nums: number[], target: number): number {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  if (target < nums[left]) return left;
  if (target > nums[right]) return len;
  // 注意：条件是 left <= right，当 left === right时，会再进入一次循环
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
}

// 66. 加一
export function plusOne(digits: number[]): number[] {
  return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(item => Number(item));
}

// 605. 种花问题
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
    return true;
  }
  let slow = 0;
  let fast = 0;
  let count = 0;
  while (fast < flowerbed.length && count < n) {
    if (flowerbed[slow] === 1) {
      slow++;
      fast++;
    } else if (flowerbed[fast] === 0 && fast - slow === 1 && (slow === 0 || fast === flowerbed.length - 1)) {
      count++;
      slow = fast;
    } else if (flowerbed[fast] === 0 && fast - slow === 2 && flowerbed[slow + 1] === 0) {
      count++;
      slow = fast;
    } else if (flowerbed[fast] === 1) {
      slow = fast;
    } else {
      fast++;
    }
  }

  if (count >= n) {
    return true;
  }
  return false;

}

/*
605. 种花问题 解法二
题目要求是否能在不打破规则的情况下插入n朵花，与直接计算不同，采用“跳格子”的解法只需遍历不到一遍数组，处理以下两种不同的情况即可：
【1】当遍历到index遇到1时，说明这个位置有花，那必然从index+2的位置才有可能种花，因此当碰到1时直接跳过下一格。
【2】当遍历到index遇到0时，由于每次碰到1都是跳两格，因此前一格必定是0，此时只需要判断下一格是不是1即可得出index这一格能不能种花，
  1)如果能种则令n减一，然后这个位置就按照遇到1时处理，即跳两格；
  2)如果index的后一格是1，说明这个位置不能种花且之后两格也不可能种花（参照【1】），直接跳过3格。
当n减为0时，说明可以种入n朵花，则可以直接退出遍历返回true；如果遍历结束n没有减到0，说明最多种入的花的数量小于n，则返回false。
*/
export function canPlaceFlowers1(flowerbed: number[], n: number): boolean {
  const len = flowerbed.length;
  for (let i = 0; i < len && n > 0;) {
    let item = flowerbed[i];
    // 如果 flowerbed[i] === 1，因为不能打破规则，所以只可能在 i + 2 位置才能种花，故直接令 i = i + 2
    if (item === 1) {
      i += 2;
      // 遍历到数组的最后一位或者 i 的下一位是 0，因为遇到1时是跳了两格的，所以 i 的前一位必定是0，所以该位置是一定可以种花的
    } else if (i === len - 1 || flowerbed[i + 1] === 0) {
      n--;
      i += 2;
      // 此时说明 i 的下一位是 1，因为遇到1时是需要跳两格的，此时i的下一位才是1，所以需要跳三格
    } else {
      i += 3;
    }
  }
  return n <= 0;
}

// 914. 卡牌分组
export function hasGroupsSizeX(deck: number[]): boolean {
  // 辗转相除法求最大公约数
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
  const map = new Map();
  const set = new Set<number>();
  for (let i = 0, len = deck.length; i < len; i++) {
    let deckItem = deck[i];
    if (map.has(deckItem)) {
      map.set(deckItem, map.get(deckItem) + 1);
    } else {
      map.set(deckItem, 1);
    }
  }
  for (let [, value] of map) {
    if (value < 2) {
      return false;
    }
    set.add(value);
  }
  let temp = 0;
  for (const value of set) {
    temp = gcd(temp, value);
    if (temp < 2) return false;
  }

  return temp >= 2;

}

/**
 * @description: 1013. 将数组分成和相等的三个部分
 * 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
 * @param arr：需要判断是否能被三等分的数组
 * @return {boolean}：是否能被三等分
 */
export function canThreePartsEqualSum(arr: number[]): boolean {
  // 求出数组的和
  const sum = arr.reduce((pre, cur) => pre + cur, 0);
  if (sum % 3 === 0) {
    const oneThirdSum = sum / 3;
    let isFirstPart = false;
    let tempSum = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
      tempSum += arr[i];
      if (tempSum === oneThirdSum) {
        if (isFirstPart) {
          // 注意，此时遍历到了第二部分的的最后一位，因为需要将数组划分为非空的三部分，所以 i 不能是数组的最后一位，即不能等于 len - 1，
          // 所以 i 必须小于 len - 1，才能保证第三个部分非空
          return i < len - 1;
        }
        tempSum = 0;
        isFirstPart = true;
      }

    }
  }
  return false;
}
