/**
 * @description 2202. K 次操作后最大化顶端元素
 * 思路： 贪心取出前 k−1 个元素，第 k 次操作有两种
 *  1、将已经移除的最大的元素放回栈顶，
 *  2、取出第 k 个元素，此时栈顶为第 k+1 个元素
 * 分类讨论：
 *  1、当 nums.length =1 时，若 k 为奇数则会把唯一元素拿出，返回 −1
 *  2、当 k >nums.length 时，可以取出所有元素，做一些无效操作浪费次数，并保证最后将最大的元素放在栈顶，返回最大数 max
 *  3、当 k <nums.length 时，取出前 k−1 个元素，放回已取出的最大数或将第 k 个元素取出
 *  4、当 k =nums.length 时，取出前 k−1 个元素后，再取出一个会导致空栈，此时只能将最大的元素放回栈顶
 * @param nums
 * @param k
 */
export function maximumTop(nums: number[], k: number): number {
  if (k === 0) return nums[0];
  const len = nums.length;
  if (len === 1) return k % 2 === 0 ? nums[0] : -1;
  let max = -Infinity;
  for (let i = 0; k <= len ? i < k - 1 : i < len; i++) {
    if (nums[i] > max) max = nums[i];
  }
  if (k < len) {
    return Math.max(max, nums[k]);
  }
  return max;
}

/**
 * @description 1828. 统计一个圆中点的数目
 * @param points
 * @param queries
 */
export function countPoints(points: number[][], queries: number[][]): number[] {
  const pNum = points.length;
  const qNum = queries.length;
  const ans = new Array(qNum).fill(0);
  for (let i = 0; i < qNum; i++) {
    const [xi, yi, ri] = queries[i];
    let sum = ans[i];
    for (let j = 0; j < pNum; j++) {
      const [xj, yj] = points[j];
      const dis = Math.sqrt((xj - xi) ** 2 + (yj - yi) ** 2);
      if (dis <= ri) sum++;
    }
    ans[i] = sum;
  }
  return ans;
}

// 1769. 移动所有球到每个盒子所需的最小操作数
export function minOperations(boxes: string): number[] {
  const len = boxes.length;
  const map = new Map<number, number>();
  const ans = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    let boxNum = Number(boxes[i]);
    if (boxNum === 1) {
      map.set(i, boxNum);
    }
  }

  for (let j = 0; j < len; j++) {
    let count = 0;
    for (const [key] of map) {
      count += Math.abs(key - j);
    }
    ans[j] = count;
  }
  return ans;
}

/**
 * @description 1769. 移动所有球到每个盒子所需的最小操作数，通过动态规划方法求解
 *  说明：假设 i 位置，将左侧所有球移动到 i 位置所需的操作数为 IOperationLeft，将右侧所有的球移动到 i 位置所需的操作数为 IOperationRight
 *  则将左右两边所有的球移动到 i 位置所需的操作数 IOperation = IOperationLeft + IOperationRight
 *  若 i 位置和 i 位置左侧共有有 ILeftCount 个球，右侧有 IRightCount 个球，则将所有球移动到 i+1 位置上时，所有左侧的球会个增加一次操作数，即总共增加 ILeftCount 个操作数
 *  所有右侧的球会减少 IRightCount 个操作数，即 i+1 位置的操作数为 IOperationLeft + ILeftCount + IOperationRight - IRightCount
 *  因为 IOperationLeft + IOperationRight 为将所有球移动到 i 位置的操作数 IOperation，所有 i+1 位置的操作数为 IOperation + ILeftCount - IRightCount
 *  即根据前一个操作数就可以得到后一个操作数，同时过程中需要不断更新 ILeftCount 和 IRightCount
 * @param boxes
 */
export function minOperationsByDp(boxes: string): number[] {
  const len = boxes.length;
  let leftCount = Number(boxes[0]);
  let rightCount = 0;
  let operateCount0 = 0;
  const ans = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    let boxNum = Number(boxes[i]);
    if (boxNum === 1) {
      rightCount++;
      operateCount0 += Math.abs(i - 0);
    }
  }
  ans[0] = operateCount0;
  for (let j = 1; j < len; j++) {
    let boxNum = Number(boxes[j]);
    ans[j] = ans[j - 1] + leftCount - rightCount;
    if (boxNum === 1) {
      leftCount++;
      rightCount--;
    }
  }
  return ans;
}
// 807. 保持城市天际线

export function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const row = grid.length;
  const column = grid[0].length;
  const rowMaxList = new Array(row).fill(0);
  const columnMaxList = new Array(column).fill(0);
  let ans = 0;
  for (let i = 0; i < row; i++) {
    const rowItem = grid[i];
    rowMaxList[i] = Math.max(...rowItem);
  }
  for (let j = 0; j < column; j++) {
    const columnItem = [];
    for (let k = 0; k < column; k++) {
      columnItem[k] = grid[k][j];
    }
    columnMaxList[j] = Math.max(...columnItem);
  }

  for (let i = 0; i < row; i++) {
    const curRow = grid[i];
    for (let j = 0; j < column; j++) {
      const curItem = curRow[j];
      let curMax = Math.min(rowMaxList[i], columnMaxList[j]);
      ans += (curMax - curItem);
    }
  }

  return ans;
}
/**
 * @description 1282. 用户分组
 * 哈希表：
 * 由于给定的输入一定存在有效的解，因此对于数组 groupSizes 中的每个元素 x，当 x 在数组中出现 y 次时，y 一定能被 x 整除，且大小为 x 的组有 y / x 个。
 * 首先将每个人的编号按照组的大小划分，使用哈希表记录每个组的大小对应的所有人的编号。然后遍历哈希表，对于大小为 x 的组，得到对应的所有人编号列表，将列表的大小记为 y，则
 * y 一定能被 x 整除，将列表分成 y / x 个大小为 x 的组，并将每个组添加到答案中。遍历结束之后，即完成分组。
 * 考虑示例 1 的分组:
 * 1. 根据数组 groupSizes 得到每个组的大小对应的所有人的编号：大小为 1 的组对应的编号列表是 [5]，大小为 3 的组对应的编号列表是 [0,1,2,3,4,6]。
 * 2. 将每个组的大小对应的编号列表分成特定大小的列表。
 *     1. 大小为 1 的组对应的编号列表的长度是 1，因此有 1 个大小为 1 的组：[5]。
 *  2. 大小为 3 的组对应的编号列表的长度是 6，因此有 2 个大小为 3 的组：[0,1,2],[3,4,6]。
 * 3. 最终分组情况是: [[5],[0,1,2],[3,4,6]。
 * @param groupSizes
 */
export function groupThePeople(groupSizes: number[]): number[][] {
  const ans = [];
  const len = groupSizes.length;
  const map = new Map<number, number[]>();
  for (let i = 0; i < len; i++) {
    let groupSize = groupSizes[i];
    if (map.get(groupSize)) {
      map.get(groupSize).push(i);
    } else {
      map.set(groupSize, [i]);
    }
  }

  for (const [groupSize, indexList] of map.entries()) {
    const n = indexList.length / groupSize;
    for (let i = 0; i < n; i++) {
      ans.push(indexList.slice(i * groupSize, (i + 1) * groupSize));
    }
  }

  return ans;
}

// 209. 长度最小的子数组
export function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let minLen = Infinity;
  for (let left = 0, right = 0, len = nums.length; right < len; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen < Infinity ? minLen : 0;
}

// 59. 螺旋矩阵 II
export function generateMatrix(n: number): number[][] {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push([]);
  }
  let x = 0;
  let y = 0;
  let offset = 1;
  let count = 1;
  for (let i = 0, len = Math.floor(n / 2); i < len; i++) {
    while (x < n - offset) {
      ans[y][x++] = count++;
    }
    while (y < n - offset) {
      ans[y++][x] = count++;
    }
    while (x >= offset) {
      ans[y][x--] = count++;
    }
    while (y >= offset) {
      ans[y--][x] = count++;
    }
    x++;
    y++;
    offset++;
  }

  if (n % 2 !== 0) ans[x][y] = count;

  return ans;
}
