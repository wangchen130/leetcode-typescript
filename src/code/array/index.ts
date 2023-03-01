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

  // if (count >= n) return true;
  // return false;
  return count >= n;
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

// 941. 有效的山脉数组 [0,2,3,4,5,2,1,0]
export function validMountainArray(arr: number[]): boolean {
  const len = arr.length;
  if (len < 3 || arr[0] >= arr[1]) return false;
  let isRight = false;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
    if (isRight && arr[i] < arr[i + 1]) return false;
    if (arr[i] > arr[i + 1] && !isRight) isRight = true;
  }
  return isRight;
}

/**
 * @description: 使用双指针实现 941. 有效的山脉数组
 * @param arr
 * @return {boolean}：是否为山脉数组
 */
export function validMountainArray1(arr: number[]): boolean {
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  while (left + 1 < len && arr[left] < arr[left + 1]) left++;
  while (right - 1 >= 0 && arr[right] < arr[right - 1]) right--;
  return left > 0 && right < len - 1 && left === right;
}

// 414. 第三大的数
export function thirdMax(nums: number[]): number {
  function swap(array: number[], m: number, n: number) {
    if (m < 0 || m > array.length - 1 || n < 0 || n > array.length - 1 || m === n) return;
    const temp = array[m];
    array[m] = array[n];
    array[n] = temp;
  }
  function quickSort(array: number[], left: number, right: number) {
    if (left >= right) return;
    const pivot = array[right];
    let l = left;
    let r = right;
    while (l < r) {
      while (l < right && array[l] >= pivot) l++;
      while (r > left && array[r] <= pivot) r--;
      if (l < r) {
        swap(array, l, r);
      } else {
        break;
      }
    }
    if (l <= right) {
      swap(array, l, right);
    }
    quickSort(array, left, l - 1);
    quickSort(array, l + 1, right);
  }
  const arr = [...new Set(nums)];
  const len = arr.length;
  quickSort(arr, 0, len - 1);
  if (arr.length < 3) {
    return arr[0];
  }
  return arr[2];
}

/**
 * @description 645. 错误的集合
 * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，
 * 导致集合丢失了一个数字, 并且有一个数字重复。
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。
 * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 * 思路为：
 *  1）重复的数字 = 原数组所有数字的和 - 原数组去重后所有数字的和（只有一个重复数字，去重后的和就少加了这个数字）
 *  2）丢失的数字 = 从 1 到 数组长度 length 所有连续整数的和 - 原数组去重后所有数字的和
 *  举个栗子：
 *  数组 nums = [1, 2, 2, 4], 去重后为 [1, 2, 4]，正确的数组应该为 1，2，3，4 这4个数子构成的数组，如[3, 4, 1, 2]
 * @param nums
 */
export function findErrorNums(nums: number[]): number[] {
  const len = nums.length;
  const numsSum = nums.reduce((pre, cur) => pre + cur, 0);
  const deduplicatedSum = [...new Set(nums)].reduce((pre, cur) => pre + cur, 0);
  let correctSum = 0;
  for (let i = 1; i <= len; i++) {
    correctSum += i;
  }
  return [numsSum - deduplicatedSum, correctSum - deduplicatedSum];
}

// 1346. 检查整数及其两倍数是否存在
export function checkIfExist(arr: number[]): boolean {
  const arrItemSet = new Set();
  let zeroSum = 0;
  const doubleArr = arr.map(item => {
    arrItemSet.add(item);
    if (item === 0) zeroSum++;
    return item * 2;
  });
  if (zeroSum > 1) return true;
  for (let i = 0, len = doubleArr.length; i < len; i++) {
    if (arrItemSet.has(doubleArr[i]) && zeroSum < 2 && doubleArr[i] !== 0) return true;
  }
  return false;
}

/**
 * @description 1346. 检查整数及其两倍数是否存在 解法二：使用哈希表
 * 给你一个整数数组arr，请你检查是否存在两个整数N 和 M，满足N是M的两倍（即，N = 2 * M）。
 * 更正式地，检查是否存在两个下标i 和 j 满足：
 *  1）i != j
 *  2）0 <= i, j < arr.length
 *  3）arr[i] == 2 * arr[j]
 * 原理：遍历数组，然后判断当前数的两倍或者当前数的二分之一是否是哈希表的key，如果存在，就返回 true，
 * 如果不存在，就将该值作为 key 加入都哈希表中，在将数组遍历完以后，返回false，即不存在
 * 举个栗子：
 *  1）arr = [7, 1, 14, 11]，当遍历到 14 时，哈希表中已经有 key 为 7 的值，此时 map.has(14 / 2) = map.has(7) 为 true，所以存在，返回ture
 *  2）arr = [14, 2, 7, 22]，当遍历到 7 时，哈希表中已有 key 为 14 的值了，此时 map.has(7 * 2) = map.has(14) 为 true，所以存在，返回true
 * @param arr
 */
export function checkIfExist1(arr: number[]): boolean {
  const itemMap = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    let item = arr[i];
    if (itemMap.has(item / 2) || itemMap.has(item * 2)) return true;
    itemMap.set(item, item);
  }
  return false;
}

/**
 * @description 2383. 赢得比赛需要的最少训练时长
 * 你正在参加一场比赛，给你两个 正 整数 initialEnergy 和 initialExperience 分别表示你的初始精力和初始经验。
 *
 * 另给你两个下标从 0 开始的整数数组 energy 和 experience，长度均为 n 。
 *
 * 你将会 依次 对上 n 个对手。第 i 个对手的精力和经验分别用 energy[i] 和 experience[i] 表示。当你对上对手时，需要在经验和精力上都 严格 超过对手才能击败他们，然后在可能的情况下继续对上下一个对手。
 *
 * 击败第 i 个对手会使你的经验 增加 experience[i]，但会将你的精力 减少 energy[i] 。
 *
 * 在开始比赛前，你可以训练几个小时。每训练一个小时，你可以选择将增加经验增加 1 或者 将精力增加 1 。
 *
 * 返回击败全部 n 个对手需要训练的 最少 小时数目。
 *
 * @param initialEnergy
 * @param initialExperience
 * @param energy
 * @param experience
 */
export function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
  // 定义需要训练的时长
  let sum = 0;
  const len = energy.length;
  for (let i = 0; i < len; i++) {
    const energyItem = energy[i];
    const experienceItem = experience[i];
    // 如果当前的精力小于等于当前对手的精力，就需要进行训练
    if (initialEnergy <= energyItem) {
      const energyDiff = energyItem - initialEnergy + 1;
      sum += energyDiff;
      initialEnergy += energyDiff;
    }
    // 如果当前的经验小于等于当前对手的经验，则需要进行训练
    if (initialExperience <= experienceItem) {
      const experienceDiff = experienceItem - initialExperience + 1;
      sum += experienceDiff;
      initialExperience += experienceDiff;
    }
    // 对决结束后，精力需要减去对手的精力
    initialEnergy -= energyItem;
    // 对决结束后，获得对手的经验
    initialExperience += experienceItem;
  }

  return sum;
}

// 643. 子数组最大平均数 I
export function findMaxAverageBySlidingWindow(nums: number[], k: number): number {
  let sum = 0;
  const len = nums.length;
  // 求出初始滑动窗口内的元素的和，初始窗口为 0 到 k
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  /*
  进行窗口滑动，滑动过程中，窗口右边的元素会滑入窗口，而窗口左边的元素会滑出窗口，此时滑入窗口的元素为 nums[i]，滑出窗口的元素为 nums[i - k]，
  举个栗子：当 k = 3 时，初始窗口为 0 到 2，窗口开始滑动时，因为 i = k = 3，此时nums[3]进入滑动窗口，而 nums[i - k] = nums[3 - 3] = nums[0] 滑出窗口
  */
  for (let i = k; i < len; i++) {
    // 求的是和，所以需要减去滑出窗口的值 nums[i - k]，然后在加上滑入窗口的值 nums[i]
    sum = sum - nums[i - k] + nums[i];
    // 如果当前窗口内的元素之和大于了 maxSum，则需要将maxSum置为sum
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum / k;
}

/**
 * 今天题目让求最大平均数，由于 k 是不变的，因此可以先求区间的最大和，然后再除以 k。
 *
 * 上周我在题解中已经说过，求区间的和可以用 preSum。preSum 方法还能快速计算指定区间段 i ~ j 的元素之和。它的计算方法是从左向右遍历数组，当遍历到数组的 i 位置时，preSum 表示 i 位置左边的元素之和。
 *
 * 假设数组长度为 N，我们定义一个长度为 N+1 的 preSum 数组，preSum[i] 表示该元素左边所有元素之和（不包含当前元素）。然后遍历一次数组，累加区间 [0, i) 范围内的元素，可以得到 preSum 数组。
 * 利用 preSum 数组，可以在 O(1) 的时间内快速求出 nums  任意区间 [i, j] (两端都包含) 的各元素之和。
 *
 * sum(i, j) = preSum[j + 1] - preSum[i]
 *
 * 对于本题，可以先遍历一次，求数组每个位置的 preSum，然后再遍历一次，求长度为 k 的每个区间的最大和。最终除以 k 得到最大平均数。
 *
 * 举个栗子：
 *  如果 nums = [1, 12, -5, -6, 50, 3]，则 preSum = [0, 1, 13, 8, 2, 52, 55]，preSum[1] 表示 nums 前 1 个数的和
 *  preSum[2] 表示 nums 前 2 个数的和，那么就可以知道，nums中第二个数为： nums[1]，nums中第三个数为： nums[2]，
 *  第二个数到第三个数的和为 preSum[2 + 1] - preSum[1 + 1]，因为preSum 比 nums 多一个元素，所以需要加一
 *
 * @param nums
 * @param k
 */
export function findMaxAverageByPreSum(nums: number[], k: number): number {
  const len = nums.length;
  const preSum = new Array(len + 1).fill(0);
  // 求出 preSum数组的所有值
  for (let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  // 和可能会小于0，所以初始值定义为最小的数，即 -Infinity
  let maxSum = -Infinity;
  // console.log('preSum==', preSum);
  for (let i = k; i < len + 1; i++) {
    const sum = preSum[i] - preSum[i - k];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum / k;
}
