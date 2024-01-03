import {
  combine,
  combinationSum3,
  letterCombinations,
  combinationSum,
  combinationSum2,
  partition
} from './backtrack';

// 77. 组合
export const testCombine = () => {
  const n1 = 4;
  const k1 = 2;
  console.log('n1=', n1);
  console.log('k1=', k1);
  console.log('结果为：', combine(n1, k1));
  const n2 = 7;
  const k2 = 4;
  console.log('n=', n2);
  console.log('k=', k2);
  console.log('结果为：', combine(n2, k2));
  const n3 = 10;
  const k3 = 5;
  console.log('n=', n3);
  console.log('k=', k3);
  console.log('结果为：', combine(n3, k3));
};

// 216. 组合总和 III
export const testCombinationSum3 = () => {
  const k1 = 3;
  const n1 = 7;
  console.log('k=', k1);
  console.log('n=', n1);
  console.log('结果为：', combinationSum3(k1, n1));
  const k2 = 3;
  const n2 = 9;
  console.log('k=', k2);
  console.log('n=', n2);
  console.log('结果为：', combinationSum3(k2, n2));
  const k3 = 4;
  const n3 = 1;
  console.log('k=', k3);
  console.log('n=', n3);
  console.log('结果为：', combinationSum3(k3, n3));
};

// 17. 电话号码的字母组合
export const testLetterCombinations = () => {
  const digits1 = '23';
  console.log('digits=', digits1);
  console.log('结果为：', letterCombinations(digits1));
  const digits2 = '';
  console.log('digits=', digits2);
  console.log('结果为：', letterCombinations(digits2));
  const digits3 = '2';
  console.log('digits=', digits3);
  console.log('结果为：', letterCombinations(digits3));
  const digits4 = '39';
  console.log('digits=', digits4);
  console.log('结果为：', letterCombinations(digits4));
};

// 39. 组合总和
export const testCombinationSum = () => {
  const candidates1 = [2, 3, 6, 7];
  const target1 = 7;
  console.log('candidates=', candidates1);
  console.log('target=', target1);
  console.log('结果为：', combinationSum(candidates1, target1));
  const candidates2 = [2, 3, 5];
  const target2 = 8;
  console.log('candidates=', candidates2);
  console.log('target=', target2);
  console.log('结果为：', combinationSum(candidates2, target2));
  const candidates3 = [2];
  const target3 = 1;
  console.log('candidates=', candidates3);
  console.log('target=', target3);
  console.log('结果为：', combinationSum(candidates3, target3));
};

// 40. 组合总和 II
export const testCombinationSum2 = () => {
  const candidates1 = [10, 1, 2, 7, 6, 1, 5];
  const target1 = 8;
  console.log('candidates=:', candidates1);
  console.log('target=:', target1);
  console.log('结果为：', combinationSum2(candidates1, target1));
  const candidates2 = [2, 5, 2, 1, 2];
  const target2 = 5;
  console.log('candidates=:', candidates2);
  console.log('target=:', target2);
  console.log('结果为：', combinationSum2(candidates2, target2));
};

// 131. 分割回文串
export const testPartition = () => {

};

// 93. 复原 IP 地址

// 78. 子集

// 90. 子集 II

// 491. 递增子序列

// 46. 全排列

// 47. 全排列 II

// 332. 重新安排行程

// 51. N 皇后

// 37. 解数独
