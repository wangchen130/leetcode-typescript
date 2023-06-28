/*
* ====================================================哈希表（hashTable）=====================================================
* 1. 什么时候使用hashTable？
*    需要快速判断一个元素是否在集合里出现过时，一般使用hashTable。
* 2. 常见的hashTable有哪些
*    1） 数组
*    2） map
*    3） set
* */

/**
 * @description 242. 有效的字母异位词
 * 因为两个字符串都是由小写字母组成的，最多 26 个字母，所以可以使用数组来作为hashTable，数组存放字母出现的次数，a 为下标 0，b 为下标 1。
 * 例如： 如果 hashTable[0] = 3，则表示字母 a 出现过 3 次
 * @param s
 * @param t
 */
export function isAnagram(s: string, t: string): boolean {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen !== tLen) return false;
  const hashTable = new Array(26).fill(0);
  for (let i = 0; i < sLen; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    hashTable[index] += 1;
  }
  for (let j = 0; j < tLen; j++) {
    const index = t.charCodeAt(j) - 'a'.charCodeAt(0);
    hashTable[index] -= 1;
  }

  for (let k = 0; k < 26; k++) {
    if (hashTable[k] !== 0) return false;
  }
  return true;
}
// 349. 两个数组的交集
export function intersection(nums1: number[], nums2: number[]): number[] {
  const ans = new Set<number>();
  const set = new Set<number>();
  for (let i = 0, len = nums1.length; i < len; i++) {
    set.add(nums1[i]);
  }

  for (let j = 0, len = nums2.length; j < len; j++) {
    if (set.has(nums2[j])) ans.add(nums2[j]);
  }

  return [...ans];
}

// 202. 快乐数
export function isHappy(n: number): boolean {
  const set = new Set<number>();
  while (true) {
    if (n === 1) return true;
    n = String(n).split('').reduce((pre, cur) => pre + Number(cur) ** 2, 0);
    if (set.has(n)) return false;
    set.add(n);
  }
}
/**
 * @description 1. 两数之和
 * 需要求 nums[i] + nums[j] = target，则可将 nums[i] 和下标 i 加入到 map 中，key 为 nums[i], value 为下标 i，然后遍历到 nums[j] 时，判断 target - nums[j] 是否在中即可map
 * @param nums
 * @param target
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  const ans: number[] = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (map.has(target - item)) {
      ans.push(map.get(target - item));
      ans.push(i);
      break;
    } else {
      map.set(item, i);
    }
  }
  return ans;
}

/**
 * @description 454. 四数相加 II
 * 使用一个 map 来存放 a + b 的值和 a + b 出现的次数，然后遍历 nums3 和 nums4，计算 c + d 的值，因为 a + b = 0 - c - d，而 map 中存放的是 a + b 的值，
 * 然后在只需要判断 0 - c - d 的值是否在map中即可，如果在 map 中，则四元组的数量加上  0 - c - d 出现的次数即可，即加上 map 的 value 值
 * @param nums1
 * @param nums2
 * @param nums3
 * @param nums4
 */
export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>();
  const len = nums1.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = nums1[i] + nums2[j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }
  for (let k = 0; k < len; k++) {
    for (let z = 0; z < len; z++) {
      const sum = nums3[k] + nums4[z];
      if (map.has(0 - sum)) {
        count += map.get(0 - sum);
      }
    }
  }
  return count;
}
/**
 * @description 383. 赎金信
 * 使用数组作为哈希表，存放 magazine 中所有每个字母出现的次数，然后遍历 ransomNote，将哈希表中对应的字母的次数 -1，最后遍历哈希表，如果出现了次数小于 0 的情况，
 * 则证明 ransomNote 不能由 magazine 里面的字符构成。
 * @param ransomNote
 * @param magazine
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashTable = new Array(26).fill(0);
  for (let i = 0, len = magazine.length; i < len; i++) {
    const index = magazine.charCodeAt(i) - 'a'.charCodeAt(0);
    hashTable[index] += 1;
  }
  for (let j = 0, len = ransomNote.length; j < len; j++) {
    const index = ransomNote.charCodeAt(j) - 'a'.charCodeAt(0);
    hashTable[index] -= 1;
  }
  for (let k = 0; k < 26; k++) {
    if (hashTable[k] < 0) return false;
  }
  return true;
}
/**
 * @description 15. 三数之和
 * 使用双指针的方式进行求解。先将数组进行从小到大排序，然后开始遍历数组，定义左指针 left = i + 1，即当前遍历的位置的后一个，定义右指针 right = nums.length - 1
 * 这时，判断 nums[i] + nums[left] + nums[right] 与 0 的大小，保证在 left < right 的范围内移动 left 和 right 指针即可
 *  1. 如果 nums[i] + nums[left] + nums[right] > 0 ，则证明需要将值缩小，因为数组已经从小到大进行排序，这时右指针 right 向左移动即可
 *  2. 如果 nums[i] + nums[left] + nums[right] < 0 ，则证明需要将值增大，这时左指针 left 向右移动即可
 *  3. 如果 nums[i] + nums[left] + nums[right] = 0 ，这时即可收获结果，注意再收获结果以后，需要将 left 和 right 指针向中间移动，否则会陷入死循环
 * 注意：
 *  1. 得到一个结果以后，需要将 left 和 right 指针向中间移动！！！
 *  2. 需要进行去重，如 a + b + c = 0，需要对 a 、b 、c 都要进行去重
 * @param nums
 */
export function threeSum(nums: number[]): number[][] {
  // 将 nums 从下到大排序
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const ans = [];
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num > 0) break;
    // 对 a 进行去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = num + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        ans.push([num, nums[left], nums[right]]);
        // 对 b 进行去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 对 c 进行去重
        while (left < right && nums[right] === nums[right - 1]) right--;
        // 得到结果以后，需要将 left 和 right 指针向中间移动，否则就会陷入死循环，因为处理结果以后如果未移动指针，那么继续下次循环之后，还是符合条件的，就会一直循环
        left++;
        right--;
      }
    }
  }
  return ans;
}

/**
 * @description 18. 四数之和
 * 使用双指针进行求解：
 *  1. a + b + c + d = target，a 和 b 使用两层 for 循环得到，c 和 d 使用左右指针 left he right 得到
 *  2. 先将数组进行从小到大排序。
 *  3. 遍历数组。定义左指针 left = i + 1，即当前遍历的位置的后一个，定义右指针 right = nums.length - 1
 * 注意：
 *  1. 需要进行剪枝操作，当 target > 0 且 a > target 或 a + b > target，即可退出循环，因为数组经过了从小到大的排序，a 和 b 是最左边的两个数，即最小的两个数，
 *     最小的 a > target 或者 a + b > target，则 a + b + c + d 一定大于 target
 *  2. 注意去重，a 、b、c、d 都要进行去重
 * @param nums
 * @param target
 */
export function fourSum(nums: number[], target: number): number[][] {
  // 将 nums 从下到大排序
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const numI = nums[i];
    // 剪枝操作
    if (target > 0 && numI > target) break;
    // 去重操作
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len; j++) {
      const numJ = nums[j];
      // 剪枝操作
      if (target > 0 && numI + numJ > target) break;
      // 去重操作
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = numI + numJ + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          ans.push([numI, numJ, nums[left], nums[right]]);
          // 对 c 进行去重
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          // 对 d 进行去重
          // 得到结果以后，需要将 left 和 right 指针向中间移动，否则就会陷入死循环，因为处理结果以后如果未移动指针，那么继续下次循环之后，还是符合条件的，就会一直循环
          left++;
          right--;
        }
      }
    }
  }

  return ans;
}
