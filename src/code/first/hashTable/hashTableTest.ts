import { canConstruct, fourSum, fourSumCount, intersection, isAnagram, isHappy, threeSum, twoSum } from './hashTable';

// 242. 有效的字母异位词
export const testIsAnagram = () => {
  console.log('242. 有效的字母异位词:');
  const s1 = 'anagram';
  const t1 = 'nagaram';
  console.log('s=', s1);
  console.log('t=', t1);
  console.log('j结果为：', isAnagram(s1, t1));
  const s2 = 'rat';
  const t2 = 'car';
  console.log('s=', s2);
  console.log('t=', t2);
  console.log('j结果为：', isAnagram(s2, t2));

};

// 349. 两个数组的交集
export const testIntersection = () => {
  const nums11 = [1, 2, 2, 1];
  const nums21 = [2, 2];
  console.log('nums1=', nums11);
  console.log('nums2=', nums21);
  console.log('结果为：', intersection(nums11, nums21));
  const nums12 = [4, 9, 5];
  const nums22 = [9, 4, 9, 8, 4];
  console.log('nums1=', nums12);
  console.log('nums2=', nums22);
  console.log('结果为：', intersection(nums12, nums22));
};

// 202. 快乐数
export const testIsHappy = () => {
  const n1 = 19;
  console.log('n=', n1);
  console.log('结果为：', isHappy(n1));
  const n2 = 2;
  console.log('n=', n2);
  console.log('结果为：', isHappy(n2));
};

// 1. 两数之和
export const testTwoSum = () => {
  const nums1 = [2, 7, 11, 15];
  const target1 = 9;
  console.log('nums=', nums1);
  console.log('target=', target1);
  console.log('结果为：', twoSum(nums1, target1));

  const nums2 = [3, 2, 4];
  const target2 = 6;
  console.log('nums=', nums2);
  console.log('target=', target2);
  console.log('结果为：', twoSum(nums2, target2));

  const nums3 = [3, 3];
  const target3 = 6;
  console.log('nums=', nums3);
  console.log('target=', target3);
  console.log('结果为：', twoSum(nums3, target3));
};

// 454. 四数相加 II
export const testFourSumCount = () => {
  const nums11 = [1, 2];
  const nums21 = [-2, -1];
  const nums31 = [-1, 2];
  const nums41 = [0, 2];
  console.log('nums1=', nums11);
  console.log('nums2=', nums21);
  console.log('nums3=', nums31);
  console.log('nums4=', nums41);
  console.log('结果为：', fourSumCount(nums11, nums21, nums31, nums41));
  const nums12 = [0];
  const nums22 = [0];
  const nums32 = [0];
  const nums42 = [0];
  console.log('nums1=', nums12);
  console.log('nums2=', nums22);
  console.log('nums3=', nums32);
  console.log('nums4=', nums42);
  console.log('结果为：', fourSumCount(nums12, nums22, nums32, nums42));
};

// 383. 赎金信
export const testCanConstruct = () => {
  const ransomNote1 = 'a';
  const magazine1 = 'b';
  console.log('ransomNote=', ransomNote1);
  console.log('magazine=', magazine1);
  console.log('结果为：', canConstruct(ransomNote1, magazine1));
  const ransomNote2 = 'aa';
  const magazine2 = 'ab';
  console.log('ransomNote=', ransomNote2);
  console.log('magazine=', magazine2);
  console.log('结果为：', canConstruct(ransomNote2, magazine2));
  const ransomNote3 = 'aa';
  const magazine3 = 'aab';
  console.log('ransomNote=', ransomNote3);
  console.log('magazine=', magazine3);
  console.log('结果为：', canConstruct(ransomNote3, magazine3));
};

// 15. 三数之和
export const testThreeSum = () => {
  const nums1 = [-1, 0, 1, 2, -1, -4];
  console.log('nums=', nums1);
  console.log('结果为：', threeSum(nums1));
  const nums2 = [0, 1, 1];
  console.log('nums=', nums2);
  console.log('结果为：', threeSum(nums2));
  const nums3 = [0, 0, 0];
  console.log('nums=', nums3);
  console.log('结果为：', threeSum(nums3));

};

// 18. 四数之和
export const testFourSum = () => {
  const nums1 = [1, 0, -1, 0, -2, 2];
  const target1 = 0;
  console.log('nums=', nums1);
  console.log('target=', target1);
  console.log('结果为：', fourSum(nums1, target1));
  const nums2 = [2, 2, 2, 2, 2];
  const target2 = 8;
  console.log('nums=', nums2);
  console.log('target=', target2);
  console.log('结果为：', fourSum(nums2, target2));

};
