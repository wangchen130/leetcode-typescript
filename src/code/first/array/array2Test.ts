import {
  maximumTop,
  countPoints,
  minOperations, minOperationsByDp, maxIncreaseKeepingSkyline, groupThePeople, minSubArrayLen, generateMatrix
} from './array2';

export const testMaximumTop = () => {
  console.log('2202. K 次操作后最大化顶端元素:');
  const nums1 = [5, 2, 2, 4, 0, 6];
  const k1 = 4;
  console.log('nums=', nums1);
  console.log('k=', k1);
  console.log('结果为：', maximumTop(nums1, k1));
  const nums2 = [2];
  const k2 = 1;
  console.log('nums=', nums2);
  console.log('k=', k2);
  console.log('结果为：', maximumTop(nums2, k2));
};
// 1828. 统计一个圆中点的数目
export const testCountPoints = () => {
  console.log('1828. 统计一个圆中点的数目:');
  const points1 = [[1, 3], [3, 3], [5, 3], [2, 2]];
  const queries1 = [[2, 3, 1], [4, 3, 1], [1, 1, 2]];
  console.log('points=', points1);
  console.log('queries=', queries1);
  console.log('结果为：', countPoints(points1, queries1));
  const points2 = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
  const queries2 = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]];
  console.log('points=', points2);
  console.log('queries=', queries2);
  console.log('结果为：', countPoints(points2, queries2));
};
// 1769. 移动所有球到每个盒子所需的最小操作数
export const testMinOperations = () => {
  console.log('1769. 移动所有球到每个盒子所需的最小操作数');
  const boxes1 = '110';
  console.log('boxes=', boxes1);
  console.log('常规解法结果为：', minOperations(boxes1));
  console.log('动态规划解法结果为：', minOperationsByDp(boxes1));
  const boxes2 = '001011';
  console.log('boxes=', boxes2);
  console.log('常规解法结果为：', minOperations(boxes2));
  console.log('动态规划解法结果为：', minOperationsByDp(boxes2));
};
// 807. 保持城市天际线
export const testMaxIncreaseKeepingSkyline = () => {
  console.log('807. 保持城市天际线:');
  const grid1 = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];
  console.log('grid=', grid1);
  console.log('结果为：', maxIncreaseKeepingSkyline(grid1));
  const grid2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  console.log('grid=', grid2);
  console.log('结果为：', maxIncreaseKeepingSkyline(grid2));
};
// 1282. 用户分组

export const testGroupThePeople = () => {
  const groupSizes1 = [3, 3, 3, 3, 3, 1, 3];
  console.log('groupSizes=', groupSizes1);
  console.log('结果为：', groupThePeople(groupSizes1));
  const groupSizes2 = [2, 1, 3, 3, 3, 2];
  console.log('groupSizes=', groupSizes2);
  console.log('结果为：', groupThePeople(groupSizes2));
};
// 209. 长度最小的子数组
export const testMinSubArrayLen = () => {
  const target1 = 7;
  const nums1 = [2, 3, 1, 2, 4, 3];
  console.log('target=', target1);
  console.log('nums=', nums1);
  console.log('结果为：', minSubArrayLen(target1, nums1));
  const target2 = 4;
  const nums2 = [1, 4, 4];
  console.log('target=', target2);
  console.log('nums=', nums2);
  console.log('结果为：', minSubArrayLen(target2, nums2));
  const target3 = 11;
  const nums3 = [1, 1, 1, 1, 1, 1, 1, 1];
  console.log('target=', target3);
  console.log('nums=', nums3);
  console.log('结果为：', minSubArrayLen(target3, nums3));
};

// 59. 螺旋矩阵 II
export const testGenerateMatrix = () => {
  const n1 = 3;
  console.log('n=', n1);
  console.log('结果为：', generateMatrix(n1));
  const n2 = 1;
  console.log('n=', n2);
  console.log('结果为：', generateMatrix(n2));
  const n3 = 4;
  console.log('n=', n3);
  console.log('结果为：', generateMatrix(n3));
  const n4 = 5;
  console.log('n=', n4);
  console.log('结果为：', generateMatrix(n4));
};
