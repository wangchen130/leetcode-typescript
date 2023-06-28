import { canJump, findContentChildren, maxProfit, maxSubArray, wiggleMaxLength } from './greedy';
// 455. 分发饼干
export const testFindContentChildren = () => {
  const g1 = [1, 2, 3];
  const s1 = [1, 1];
  console.log('g=', g1);
  console.log('s=', s1);
  console.log('结果为：', findContentChildren(g1, s1));
  const g2 = [1, 2];
  const s2 = [1, 2, 3];
  console.log('g=', g2);
  console.log('s=', s2);
  console.log('结果为：', findContentChildren(g2, s2));
};

// 376. 摆动序列
export const testWiggleMaxLength = () => {
  const nums1 = [1, 7, 4, 9, 2, 5];
  console.log('nums=', nums1);
  console.log('结果为：', wiggleMaxLength(nums1));
  const nums2 = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
  console.log('nums=', nums2);
  console.log('结果为：', wiggleMaxLength(nums2));
  const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('nums=', nums3);
  console.log('结果为：', wiggleMaxLength(nums3));
};

// 53. 最大子数组和
export const testMaxSubArray = () => {
  const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log('nums=', nums1);
  console.log('结果为：', maxSubArray(nums1));
  const nums2 = [1];
  console.log('nums=', nums2);
  console.log('结果为：', maxSubArray(nums2));
  const nums3 = [5, 4, -1, 7, 8];
  console.log('nums=', nums3);
  console.log('结果为：', maxSubArray(nums3));
};

// 122. 买卖股票的最佳时机 II
export const testMaxProfit = () => {
  const prices1 = [7, 1, 5, 3, 6, 4];
  console.log('prices=', prices1);
  console.log('结果为：', maxProfit(prices1));
  const prices2 = [1, 2, 3, 4, 5];
  console.log('prices=', prices2);
  console.log('结果为：', maxProfit(prices2));
  const prices3 = [7, 6, 4, 3, 1];
  console.log('prices=', prices3);
  console.log('结果为：', maxProfit(prices3));
};

// 55. 跳跃游戏
export const testCanJump = () => {
  const nums1 = [2, 3, 1, 1, 4];
  console.log('nums=', nums1);
  console.log('结果为：', canJump(nums1));
  const nums2 = [3, 2, 1, 0, 4];
  console.log('nums=', nums2);
  console.log('结果为：', canJump(nums2));
};

// 45. 跳跃游戏 II

// 1005. K 次取反后最大化的数组和

// 134. 加油站

// 135. 分发糖果

// 860. 柠檬水找零

// 406. 根据身高重建队列

// 452. 用最少数量的箭引爆气球

// 435. 无重叠区间

// 763. 划分字母区间

// 56. 合并区间

// 738. 单调递增的数字

// 968. 监控二叉树
