/**
 * @description 455. 分发饼干
 * 贪心思路：每次都用尺寸较大的饼干去投喂胃口较大的孩子，这样即不会过度浪费饼干，也能投喂更多的孩子。因为如果使用尺寸大的饼干投喂了胃口小的孩子，
 * 那么最后就会剩下胃口大的孩子和尺寸小的饼干，尺寸小的饼干无法满足胃口大的孩子，造成了饼干的浪费，所以投喂的孩子数量就会很少
 * @param g：孩子的胃口
 * @param s：饼干的尺寸
 */
export function findContentChildren(g: number[], s: number[]): number {
  // 将 g 从小到大排序
  g.sort((a, b) => a - b);
  // 将 s 从小到大排序
  s.sort((a, b) => a - b);
  let result = 0;
  // 定义一个指针，指向最大尺寸的饼干。因为 s 已经按照从小到大排序了，所以数组的最后一个就是最大值
  let sIndex = s.length - 1;
  // 从后往前遍历，这样依次获得的孩子的胃口就是从大到小的
  for (let i = g.length - 1; i >= 0; i--) {
    // 当 s[sIndex] >= g[i] 时，就是目前的饼干尺寸能满足的胃口最大的孩子
    if (sIndex >= 0 && s[sIndex] >= g[i]) {
      result++;
      sIndex--;
    }
  }
  return result;
}
/**
 * @description 376. 摆动序列
 * 贪心思路：将连续坡或者平坡中的多余的数据删除，这样就能得到最大的摆动序列，如 [1,17,5,10,13,15,10,5,16,8]： 5,10,13,15 为连续上坡，如果将 10 和 13 删除掉，
 * 15,10,5 为连续下坡，如果将 10 删除掉，这样就得到了 5，15，5，这样就得到了一个摆动
 * @param nums
 */
export function wiggleMaxLength(nums: number[]): number {

}

/**
 * @description 53. 最大子数组和
 * 贪心思路：定义一个累加连续和 sum 和 累加过程中的最大值 max ，sum初始化为 0 ，max 初始化为最小的负数 -Infinity，然后每次计算完连续和 sum 后，都与 max 进行比较，
 * 如果 sum > max ，就更新 max，然后判断连续和是否为负数，如果为负数，就舍弃这个连续和，将 sum 初始化为 0，然后从下一个位置开始重新进行累加
 * 局部最优为： 当连续和为负数时就舍弃，然后从下一个位置重新累加，因为如果连续和 sum 为负数了，那么 sum 加上下一个数只会使得下一个数变得更小，所以需要将 sum 进行舍弃
 * @param nums
 */
export function maxSubArray(nums: number[]): number {

}

/**
 * @description 122. 买卖股票的最佳时机 II
 * 贪心思路：计算出每天的利润，第一天：prices[1] - prices[0]，第二天：prices[2] - prices[2]，第三天：prices[3] - prices[2],第n天：prices[n] - prices[n -1],
 * 然后选择利润为正的进行相加，这样就能得到最大的利润了。
 * 例如：prices = [7, 1, 5, 3, 6, 4]，计算完每天的利润为： [-6, 4, -2, 3, -2]，然后选择利润为正的进行相加就得到利润为：4 + 3 = 7，即最大利润为 7
 * @param prices
 */
export function maxProfit(prices: number[]): number {

}
/**
 * @description 55. 跳跃游戏
 * 贪心思路：不必关心如何跳，只需要关心跳跃的最大覆盖范围 maxCoverIndex，只要最大的覆盖范围 maxCoverIndex 大于等于数组最后一个下标，那么就能跳到最后一个下标。
 * 以i <= maxCoverIndex 作为遍历结束的条件，每次遍历时都更新最大的覆盖范围，只要 maxCoverIndex >= nums.length - 1，就说明可以跳到最后一个下标。
 * 例如：nums = [2, 3, 1, 1, 4]，初始化最大覆盖范围 maxCoverIndex = 0，当位于第一个元素时，可跳 2 步，即最大的覆盖范围为：maxCoverIndex = Math.max(maxCoverIndex,0 + 2)，为 2，
 * 位于第二个元素时，可跳 3 步，即最大的覆盖范围为 maxCoverIndex = Math.max(maxCoverIndex,1 + 3)，为 4，4 大于等于 nums.length = 4，所以能够跳到最后一个下标
 * @param nums
 */
export function canJump(nums: number[]): boolean {

}

// 45. 跳跃游戏 II
export function jump(nums: number[]): number {

}

/**
 * 1005. K 次取反后最大化的数组和
 * 贪心思路：将数组按照绝对值由大到小的顺序进行排序，然后开始遍历数组，当遇到负数时，将负数取反，然后将 k 减 1，k 减 1 后若等于 0 便退出循环，如果最后的 k 为奇数便对数组最后一位进行取反即可
 * 将数组按绝对值有大到小排序，这样从前往后遍历，将负数取反，则对数组和影响最大，而最后即使 k 没有用完，因为数组最后一个元素的绝对值最小，对数组最后一个元素进行取反时，影响也最小
 * @param nums
 * @param k
 */
export function largestSumAfterKNegations(nums: number[], k: number): number {

}

// 134. 加油站
export function canCompleteCircuit(gas: number[], cost: number[]): number {

}

// 135. 分发糖果
export function candy(ratings: number[]): number {

}

// 860. 柠檬水找零
export function lemonadeChange(bills: number[]): boolean {

}

// 406. 根据身高重建队列
export function reconstructQueue(people: number[][]): number[][] {

}

// 452. 用最少数量的箭引爆气球
export function findMinArrowShots(points: number[][]): number {

}
// 435. 无重叠区间
export function eraseOverlapIntervals(intervals: number[][]): number {

}
// 763. 划分字母区间
export function partitionLabels(s: string): number[] {

}

// 56. 合并区间
export function merge(intervals: number[][]): number[][] {

}

// 738. 单调递增的数字
export function monotoneIncreasingDigits(n: number): number {

}

class TreeNode {
  val: number

  left: TreeNode | null

  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @description 968. 监控二叉树
 * @param root {TreeNode}
 */
export function minCameraCover(root: TreeNode | null): number {

}
