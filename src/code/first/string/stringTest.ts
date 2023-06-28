import {
  reverseString,
  reverseStr,
  replaceSpace,
  reverseLeftWords,
  reverseWords,
  strStr,
  repeatedSubstringPattern, getKMPNext
} from './string';
// 344. 反转字符串
export const testReverseString = () => {
  const s1 = ['h', 'e', 'l', 'l', 'o'];
  console.log('s=', s1.join('，'));
  reverseString(s1);
  console.log('结果为：', s1);
  const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
  console.log('s=', s2.join('，'));
  reverseString(s2);
  console.log('结果为：', s2);
};

// 541. 反转字符串 II
export const testReverseStr = () => {
  const s1 = 'abcdefg';
  const k1 = 2;
  console.log('s=', s1);
  console.log('k=', k1);
  console.log('结果为：', reverseStr(s1, k1));
  const s2 = 'abcd';
  const k2 = 2;
  console.log('s=', s2);
  console.log('k=', k2);
  console.log('结果为：', reverseStr(s2, k2));
};

// 剑指 Offer 05. 替换空格
export const testReplaceSpace = () => {
  const s = 'We are happy.';
  console.log('s=', s);
  console.log('结果为', replaceSpace(s));
};

// 剑指 Offer 58 - II. 左旋转字符串
export const testReverseLeftWords = () => {
  const s1 = 'abcdefg';
  const k1 = 2;
  console.log('s=', s1);
  console.log('k=', k1);
  console.log('结果为：', reverseLeftWords(s1, k1));
  const s2 = 'lrloseumgh';
  const k2 = 6;
  console.log('s=', s2);
  console.log('k=', k2);
  console.log('结果为：', reverseLeftWords(s2, k2));

};

// 151. 反转字符串中的单词
export const testReverseWords = () => {
  const s1 = 'the sky is blue';
  console.log('s=', s1);
  console.log('结果为：', reverseWords(s1));
  const s2 = '  hello world  ';
  console.log('s=', s2);
  console.log('结果为：', reverseWords(s2));
  const s3 = 'a good   example';
  console.log('s=', s3);
  console.log('结果为：', reverseWords(s3));

};

// 28. 找出字符串中第一个匹配项的下标
export const testStrStr = () => {
  const haystack1 = 'sadbutsad';
  const needle1 = 'sad';
  console.log('haystack=', haystack1);
  console.log('needle=', needle1);
  console.log('next=', getKMPNext(needle1));
  console.log('结果为：', strStr(haystack1, needle1));
  const haystack2 = 'leetcode';
  const needle2 = 'leeto';
  console.log('haystack=', haystack2);
  console.log('needle=', needle2);
  console.log('next=', getKMPNext(needle2));
  console.log('结果为：', strStr(haystack2, needle2));
};

// 459. 重复的子字符串
export const testRepeatedSubstringPattern = () => {
  const s1 = 'abab';
  console.log('s=', s1);
  console.log('next=', getKMPNext(s1));
  console.log('结果为：', repeatedSubstringPattern(s1));
  const s2 = 'aba';
  console.log('s=', s2);
  console.log('next=', getKMPNext(s2));
  console.log('结果为：', repeatedSubstringPattern(s2));
  const s3 = 'abcabcabcabc';
  console.log('s=', s3);
  console.log('next=', getKMPNext(s3));
  console.log('结果为：', repeatedSubstringPattern(s3));

};
