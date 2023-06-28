import {
  canPartition,
  climbStairs,
  fib, findMaxForm, findTargetSumWays,
  integerBreak, lastStoneWeightII,
  minCostClimbingStairs, numTrees,
  uniquePaths,
  uniquePathsWithObstacles
} from './dynamicProgramming';

// 509. 斐波那契数
export const testFib = () => {
  const n1 = 2;
  console.log('n=', n1);
  console.log('结果为：', fib(n1));
  const n2 = 3;
  console.log('n=', n2);
  console.log('结果为：', fib(n2));
  const n3 = 4;
  console.log('n=', n3);
  console.log('结果为：', fib(n3));
};

// 70. 爬楼梯
export const testClimbStairs = () => {
  const n1 = 2;
  console.log('n=', n1);
  console.log('结果为：', climbStairs(n1));
  const n2 = 3;
  console.log('n=', n2);
  console.log('结果为：', climbStairs(n2));
  const n3 = 4;
  console.log('n=', n3);
  console.log('结果为：', climbStairs(n3));
};

// 746. 使用最小花费爬楼梯
export const testMinCostClimbingStairs = () => {
  const cost1 = [10, 15, 20];
  console.log('cost=', cost1);
  console.log('结果为：', minCostClimbingStairs(cost1));
  const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  console.log('cost=', cost2);
  console.log('结果为：', minCostClimbingStairs(cost2));
};

// 62. 不同路径
export const testUniquePaths = () => {
  const m1 = 3;
  const n1 = 7;
  console.log('m=', m1);
  console.log('n=', n1);
  console.log('结果为：', uniquePaths(m1, n1));
  const m2 = 3;
  const n2 = 2;
  console.log('m=', m2);
  console.log('n=', n2);
  console.log('结果为：', uniquePaths(m2, n2));
  const m3 = 7;
  const n3 = 3;
  console.log('m=', m3);
  console.log('n=', n3);
  console.log('结果为：', uniquePaths(m3, n3));
  const m4 = 3;
  const n4 = 3;
  console.log('m=', m4);
  console.log('n=', n4);
  console.log('结果为：', uniquePaths(m4, n4));
};

// 63. 不同路径 II
export const testUniquePathsWithObstacles = () => {
  const obstacleGrid1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
  console.log('obstacleGrid=', obstacleGrid1);
  console.log('结果为：', uniquePathsWithObstacles(obstacleGrid1));
  const obstacleGrid2 = [[0, 1], [0, 0]];
  console.log('obstacleGrid=', obstacleGrid2);
  console.log('结果为：', uniquePathsWithObstacles(obstacleGrid2));
};

// 343. 整数拆分
export const testIntegerBreak = () => {
  const n1 = 2;
  console.log('n=', n1);
  console.log('结果为：', integerBreak(n1));
  const n2 = 6;
  console.log('n=', n2);
  console.log('结果为：', integerBreak(n2));
  const n3 = 10;
  console.log('n=', n3);
  console.log('结果为：', integerBreak(n3));
};

// 96. 不同的二叉搜索树
export const testNumTrees = () => {
  const n1 = 1;
  console.log('n=', n1);
  console.log('结果为：', numTrees(n1));
  const n2 = 3;
  console.log('n=', n2);
  console.log('结果为：', numTrees(n2));
  const n3 = 5;
  console.log('n=', n3);
  console.log('结果为：', numTrees(n3));
  const n4 = 10;
  console.log('n=', n4);
  console.log('结果为：', numTrees(n4));
};

// 416. 分割等和子集
export const testCanPartition = () => {
  const nums1 = [1, 5, 11, 5];
  console.log('nums=', nums1);
  console.log('结果为：', canPartition(nums1));
  const nums2 = [1, 2, 3, 5];
  console.log('nums=', nums2);
  console.log('结果为：', canPartition(nums2));
};

// 1049. 最后一块石头的重量 II
export const testLastStoneWeightII = () => {
  const stones1 = [2, 7, 4, 1, 8, 1];
  console.log('stones=', stones1);
  console.log('结果为：', lastStoneWeightII(stones1));
  const stones2 = [31, 26, 33, 21, 40];
  console.log('stones=', stones2);
  console.log('结果为：', lastStoneWeightII(stones2));
};

// 494. 目标和
export const testFindTargetSumWays = () => {
  const nums1 = [1, 1, 1, 1, 1];
  const target1 = 3;
  console.log('nums=', nums1);
  console.log('target=', target1);
  console.log('结果为：', findTargetSumWays(nums1, target1));
  const nums2 = [1, 2, 3, 2, 1];
  const target2 = 3;
  console.log('nums=', nums2);
  console.log('target=', target2);
  console.log('结果为：', findTargetSumWays(nums2, target2));
  const nums3 = [1];
  const target3 = 1;
  console.log('nums=', nums3);
  console.log('target=', target3);
  console.log('结果为：', findTargetSumWays(nums3, target3));
};

// 474. 一和零
export const testFindMaxForm = () => {
  const strs1 = ['10', '0001', '111001', '1', '0'];
  const m1 = 5;
  const n1 = 3;
  console.log('strs=', strs1);
  console.log('m=', m1);
  console.log('n=', n1);
  console.log('结果为：', findMaxForm(strs1, m1, n1));
  const strs2 = ['10', '0', '1'];
  const m2 = 1;
  const n2 = 1;
  console.log('strs=', strs2);
  console.log('m=', m2);
  console.log('n=', n2);
  console.log('结果为：', findMaxForm(strs2, m2, n2));
};

// 518. 零钱兑换 II

// 377. 组合总和 Ⅳ

// 70. 爬楼梯 进阶版

// 322. 零钱兑换

// 279. 完全平方数

// 139. 单词拆分

// 213. 打家劫舍 II

// 337. 打家劫舍 III

// 121. 买卖股票的最佳时机

// 122. 买卖股票的最佳时机 II

// 123. 买卖股票的最佳时机 III

// 188. 买卖股票的最佳时机 IV

// 309. 最佳买卖股票时机含冷冻期

// 714. 买卖股票的最佳时机含手续费

// 300. 最长递增子序列

// 674. 最长连续递增序列

// 718. 最长重复子数组

// 1143. 最长公共子序列

// 1035. 不相交的线

// 53. 最大子数组和

// 392. 判断子序列

// 115. 不同的子序列

// 583. 两个字符串的删除操作

// 72. 编辑距离

// 647. 回文子串

// 516. 最长回文子序列
