/**
 * @description 344. 反转字符串
 * 反转字符串就是将第一个字符与倒数第一个字符交换，第二个字符与倒数第二个字符交换，第三个字符与倒数第三个字符交换，以此类推。。。
 * 使用双指针进行求解：定义左右指针 left 和 right，left = 0，right = s.length - 1，将 left 和 right 进行交换，然后将左右指针向中间进行移动即可，
 * 注意循环的条件为 left < right，因为当 left = right 时为中间字符，中间字符无需处理
 * @param s
 */
export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

/**
 * @description 541. 反转字符串 II
 * 使用双指针进行求解：将字符串转换成数组，然后开始遍历，注意下一次循环开始时的 i = i + 2 * k，即每次都跳 2k 步，减少循环的次数
 * 注意：右指针 right 的取值，需要判断 i + k - 1 是否大于 s.length - 1，因为要对区间 [i, i + k - 1] 内的字符进行交换，所以需要保证不越界，如果越界则右指针只能指向字符的最后一位
 *      如果 i + k - 1 >= s.length - 1，则 right = s.length - 1
 *      如果 i + k - 1 < s.length - 1，则 right = i + k - 1
 * @param s
 * @param k
 */
export function reverseStr(s: string, k: number): string {
  const sArr = s.split('');
  for (let i = 0, len = sArr.length; i < len; i += 2 * k) {
    let left = i;
    let right = (i + k - 1) >= len - 1 ? len - 1 : i + k - 1;
    while (left < right) {
      const tempStr = sArr[left];
      sArr[left] = sArr[right];
      sArr[right] = tempStr;
      left++;
      right--;
    }
  }
  return sArr.join('');
}

/**
 * @description 剑指 Offer 05. 替换空格
 * @param s
 */
export function replaceSpace(s: string): string {
  const sArr = s.split('');
  for (let i = 0, len = sArr.length; i < len; i++) {
    if (sArr[i] === ' ') sArr[i] = '%20';
  }
  return sArr.join('');
}

// 剑指 Offer 58 - II. 左旋转字符串
export function reverseLeftWords(s: string, n: number): string {
  const len = s.length;
  if (n >= len) return s;
  return s.slice(n) + s.slice(0, n);
}
// 151. 反转字符串中的单词
export function reverseWords(s: string): string {
  const sArr: string[] = [];
  // 去除字符串中多余的空格，如： "    the   sky is  blue   "，当遍历完 the 的字母 e 后，进入下一次循环时，当前遍历的字符时空格，即 s[i] === ' '，但是此时 i 不为 0，
  // s[i - 1] 不为空格而是字母 e，所以会将空格添加到数组中。
  // 然后到下一次循环时，这次遍历的字符依旧是空格，即  s[i] === ' '，而此时前一位是上次循环加入到空格，符合条件，便会结束本次循环，进入到下次循环
  // 而遍历完 blue 的字母 e 后，进入下次循环会将空格添加到数组，所以可能会出现遍历后数组末尾存在多余空格的情况。
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === ' ' && (i === 0 || s[i - 1] === ' ')) {
      continue;
    } else {
      sArr.push(s[i]);
    }
  }
  // 遍历结束后，末尾可能会有多余的空格，需要去除
  if (sArr[sArr.length - 1] === ' ') sArr.pop();
  const len = sArr.length;
  let left = 0;
  let right = len - 1;
  // 反转所有字符
  while (left < right) {
    const tempStr = sArr[left];
    sArr[left] = sArr[right];
    sArr[right] = tempStr;
    left++;
    right--;
  }
  // 反转所有单词
  left = 0;
  right = 0;
  while (right < len) {
    if (sArr[right] !== ' ' && right !== len - 1) {
      right++;
    } else {
      let j = right === len - 1 ? right : right - 1;
      while (left < j) {
        const temp = sArr[left];
        sArr[left] = sArr[j];
        sArr[j] = temp;
        left++;
        j--;
      }
      right++;
      left = right;
    }
  }
  return sArr.join('');
}

export function reverseWords1(s: string): string {
  const sArr = s.trim().split(/\s+/);
  let left = 0;
  let right = sArr.length - 1;
  while (left < right) {
    const temp = sArr[left];
    sArr[left] = sArr[right];
    sArr[right] = temp;
    left++;
    right--;
  }
  return sArr.join(' ');
}

export function getKMPNext(str: string): number[] {
  const len = str.length;
  // ===========================================1、初始化==========================================================
  // 初始化 next 数组
  const next = new Array<number>(len).fill(0);
  // 初始化 j 为0, j 指向前缀的末尾位置，同时也表示 i 及 i 之前的子串的最长相等前后缀的长度
  // 因为前缀是【包含第一个字符】，但是【不包含最后一个字符】的的子串，因为必须包含第一个字符，所以应该初始化为 0，即指向第一个字符
  let j = 0;
  // 初始 i 为 1，i 指向后缀末尾。因为后缀为【包含最后一个字符】，不包含【第一个字符】的子串。因为 不包含第一个字符，所以需要初始化为 1，这样才能不包含第一个字符
  for (let i = 1; i < len; i++) {
    //= ======================================= 2、前后缀不相同的情况  ======================================================
    while (j > 0 && str[i] !== str[j]) j = next[j - 1];
    //= ======================================= 3、前后缀相同的情况   =======================================================
    if (str[i] === str[j]) j++;
    //= ======================================= 4、更新next数组      =======================================================
    next[i] = j;
  }
  return next;
}

/**
 * @description 28. 找出字符串中第一个匹配项的下标
 * @param haystack
 * @param needle
 */
export function strStr(haystack: string, needle: string): number {
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  const next = getKMPNext(needle);
  let j = 0;
  for (let i = 0; i < haystackLen; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) j++;
    if (j === needleLen) return i - needleLen + 1;
  }
  return -1;
}

/**
 * @description 459. 重复的子字符串
 * 重复子串即为最长相等前后缀不包含的那一部分，即为 s.length - next[s.length - 1]
 * @param s
 */
export function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;
  const next = getKMPNext(s);
  const substringLength = len - next[len - 1];
  if (substringLength === len) return false;
  return (len % substringLength) === 0;
}
