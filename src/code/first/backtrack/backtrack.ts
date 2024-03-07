/**
 * 回溯算法：与递归相辅相成，有递归才有回溯，回溯一般体现在递归函数调用结束后，用于进行操作或者变量的回退，回溯算法都可以抽象为一棵 N 叉树，
 * 树的宽度为元素的个数，树的深度为所求解的结果的大小（数组的长度或字符串的长度），例如求包含 2 个元素的组合，那么树的深度就为 2
 * 回溯三步曲：
 *  1. 确定递归函数的参数和返回值：一般参数较多，一般无返回值。
 *  2. 确定递归函数的终止条件：终止时就是收获结果的时候
 *  3. 确定单层循环的逻辑：对每个元素进行处理
 * 回溯模板：
 *  function backtracking(参数): void {
 *    // 终止条件
 *    if(满足终止条件) {
 *      收获结果
 *      return
 *    }
 *
 *    // 单层循环逻辑
 *    for(每个元素) {
 *      // 对应操作，如将当前元素增加到结果中
 *      。。。
 *      // 递归调用
 *      backtracking(参数)
 *
 *      // 回溯过程，将对应的操作进行回退
 *      。。。
 *    }
 *
 *  }
 */

/**
 * @description 77. 组合: 当 n = 4, k = 2 时，结果为：[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
 * @param n
 * @param k
 */
export function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const combineList: number[] = [];

  const backtracking = (startIndex: number) => {
    // 确定终止条件
    if (combineList.length === k) { // 当收集到的组合的长度等于 k 时，即满足要求，即可退出递归函数
      result.push([...combineList]);
      return;
    }
    // 单层循环逻辑
    for (let i = startIndex; i <= n - (k - combineList.length) + 1; i++) {
      // 将收集的元素添加到集合数组中
      combineList.push(i);
      // 开始递归，当将 1 加入到集合中时，然后下一次循环从 2 开始
      backtracking(i + 1);
      // 回溯过程，进行回退，例如：将 2 加入到集合后，集合数组 combineList 为 [1, 2]，符合需求，然后将集合收集到结果数组 result，
      // 收集到 result 后，需要将 2 进行弹出，这样才能将 3 加入到集合中，得到 集合 [1, 3]
      combineList.pop();
    }
  };

  backtracking(1);

  return result;
}

/**
 * @description 216. 组合总和 III:  k = 3, n = 7
 * 注意项：当组合大小为 k 时，无论和是否等于 n ，都需要终止当前的递归函数，只是如果和为 n 时才收集结果
 * 剪枝操作：
 *  1. 当和大于 n 时直接终止递归函数
 *  2. 单层循环中：i <= 9 - (k - combineList.length) + 1
 * @param k
 * @param n
 */
export function combinationSum3(k: number, n: number): number[][] {
  // 收集结果的数组
  const result: number[][] = [];
  const combineList: number[] = [];
  let sum = 0;

  const backtracking = (startIndex: number) => {
    if (sum > n) return;
    // 终止递归
    if (combineList.length === k) {
      // 当和等于 n 时就可以收获结果了
      if (sum === n) result.push([...combineList]);
      return;
    }
    // 单层循环逻辑
    for (let i = startIndex; i <= 9 - (k - combineList.length) + 1; i++) {
      // 尝试添加组合
      combineList.push(i);
      // 计算组合的和
      sum += i;
      backtracking(i + 1);
      // 回溯逻辑，弹出组合中的元素，和减去响应的值
      combineList.pop();
      sum -= i;
    }
  };

  backtracking(1);

  return result;
}

/**
 * @description 17. 电话号码的字母组合
 * @param digits
 */
export function letterCombinations(digits: string): string[] {
  const digitsLen = digits.length;
  if (digitsLen === 0) return [];
  const leterList: string[] = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];
  const result: string[] = [];
  const letterCombineList: string[] = [];

  // index 为处理 digits 字符串时的下标，如当 digits = '23' 时，首先处理 '2' ，即下标为 0，然后处理 '3' ，即下标为 1
  // 当下标 为 2 时，则代表 digits 已经处理完了，这时就需要收获结果，然后退出递归
  const backtracking = (index: number) => {
    // 终止递归函数，收集结果
    if (index === digitsLen) {
      result.push(letterCombineList.join(''));
      return;
    }
    // 获取当前位置的数字，即为在 leterList 中的下标，例如：当 digits = '23'， index = 0 时，digit = 2，则对应 leterList 中的 'abc'
    const digit = digits[index];
    // 获取输入的数字对应的字符串，如 digit = 2 时，leter 为 'abc'
    const leter = leterList[digit];
    // 单层循环对应的逻辑，当 digits = '23' 时，index === 0 时，leter 为 'abc'，这时进入循环，先将 'a' 加入到 letterCombineList 中，然后进入递归，进入递归后，
    // 这时 index = 1，leter = 'def'，这时再次进入循环，将 'd' 加入到 letterCombineList 中，然后再次进入递归，index 为 2，index 为 2 时收获结果，结束递归，
    // 递归结束后，进入回溯，这时弹出 'd'，然后进入下次循环，i = 1，则将 'e' 加入到 letterCombineList 中。。。。
    for (let i = 0, len = leter.length; i < len; i++) {
      // 获取单子字符，当 leter 为 'abc' 时，则分别获取 'a', 'b', 'c'
      let leterElement = leter[i];
      // 将单个字符加入集合数组
      letterCombineList.push(leterElement);
      // 处理 digits 的下一位，如当 digits = '23' 时，这时则是处理 '3'，即 下标为 1
      backtracking(index + 1);
      // 回溯过程，将加入到 letterCombineList 的元素弹出
      letterCombineList.pop();
    }
  };
  // 调用递归函数
  backtracking(0);

  return result;
}

/**
 * @description  39. 组合总和: candidates = [2,3,5], target = 8，结果为：[[2,2,2,2],[2,3,3],[3,5]]
 * 可以重复使用元素，那么一下次循环就不是从下一个位置开始，而是从当前位置开始，当组合的和大于等于 target 时终止递归
 * @param candidates
 * @param target
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  if (candidates.length === 0) return [];
  const result: number[][] = [];
  const backtracking = (candidates: number[], target: number, sum: number, index: number, combineList: number[]) => {
    // 确定递归条件：当和大于等于 target 时，终止递归
    if (sum >= target) {
      // 当和等于 target 时，收获结果
      if (sum === target) result.push([...combineList]);
      return;
    }

    for (let i = index, len = candidates.length; i < len; i++) {
      let candidate = candidates[i];
      combineList.push(candidate);
      sum += candidate;
      // 元素可以使用多次，所以 index 从当前位置开始，以 candidates = [2,3,5], target = 8 为例：
      // 第一递归时：combineList = [2], sum = 2, index = 0
      // 第二递归时：combineList = [2， 2], sum = 4, index = 0
      // 第三递归时：combineList = [2, 2, 2], sum = 6, index = 0
      // 第四递归时：combineList = [2， 2， 2， 2], sum = 8, index = 0
      // 然后进入第五次循环，这时满足条件，终止递归，然后回到第四次循环的回溯过程，弹出 combineList 末尾的 2，sum 减去加上的 2，则 combineList = [2, 2, 2]，sum = 6，然后进入下一个 for 循环
      // 这时 i = 1， candidate = 3，将 3 加入到 combineList 中，sum 加上 3，这时 combineList = [2, 2, 2, 3]， sum = 9，再次进入递归，这时 index = i = 1
      // 然后本次递归 sum > target，退出递归，进入回溯过程，combineList 弹出 3，sum 减去 3，则 combineList = [2, 2, 2]， sum = 6，然后再次进入下一个 for 循环
      // 这时 i = 2， candidate = 5，将 5 加入到 combineList 中，sum 加上 5，这时 combineList = [2, 2, 2, 5]，sum = 11，再次进入递归，这时 index = i = 2
      backtracking(candidates, target, sum, i, combineList);
      // 回溯过程
      sum -= candidate;
      combineList.pop();
    }
  };

  backtracking(candidates, target, 0, 0, []);

  return result;
}

/**
 * @description 40. 组合总和 II: candidates = [2,5,2,1,2], target = 5，结果为：[ [ 1, 2, 2 ], [ 5 ] ]
 * 思路：将 candidates 从小到大进行排序，得到 candidates = [1, 2, 2, 2, 5]，查找 2 个元素的组合，可以看到，使用 1 时，得到组合：
 * [[1, 2], [1, 2], [1, 2], [1, 5]],使用第第一个 2 时，得到的组合为：[[2, 2], [2, 2], [2, 5]]，
 * 使用第二个 2 ，得到的组合为：[[2, 2], [2, 5]]，使用第三个 2 时，得到的组合为：[[2, 5]]，这时就可以发现，使用重复元素时，前面的组合包含了后面的组合，
 * 也就是说，如果存在重复元素，分别用重复元素查找组合，那么重复元素 前面的元素 查找的结果会包含重复元素后面的元素查找的结果，所以，遇到有重复元素时，
 * 只需要用重复元素的第一个元素进行查找即可，后面的元素不能用，不然就会存在重复的组合，这就是去重的方法。同时，按照这样的方法，使用 1 时，得到 1 和 第一个 2 组成的组合[1, 2]时，
 * 这时已经使用了重复元素的第一个，所以后面的第二个 2 和第三个 2 不再使用，得到的组合为：[[1, 2], [1, 5]]，达到了去重的目的
 * 只使用重复元素中的第一个元素，不使用后面的元素进行去重的方法是一个承上启下的去重方式，
 * 呈上：前面不管选择了多少个元素，因为现在是重复元素，如果分别使用多个，那么构成的组合就是重复的，所以只使用一个
 * 启下：现在是重复元素，不管怎么选，值是一样的，那么和后面的元素构成的组合就是重复的
 * 所以在本题中，我们需要将 candidates 进行排序，然后在查找组合时，遇到重复元素，只使用重复元素的第一个进行查找即可，后面的直接跳过就行
 * @param candidates
 * @param target
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const candidatesLen = candidates.length;
  if (candidatesLen === 0) return [];

  // 先按照从小到大排序
  candidates.sort((a, b) => a - b);

  const result: number[][] = [];

  const backtracking = (candidates: number[], target: number, sum: number, startIndex: number, tempArr: number[]) => {
    if (sum > target) return;
    if (sum === target) {
      // 当 sum === target 时，即可收获结果
      result.push([...tempArr]);
      return;
    }

    for (let i = startIndex; i < candidatesLen; i++) {
      let candidate = candidates[i];
      // 去重,去重是通过查找组合时，遇到重复元素，只使用重复元素的第一个进行查找，后面的元素直接跳过，因为 i 是从 startIndex 开始的，如果有重复元素，
      // 重复元素的第一个就是 i = startIndex ，后面的就是 i > startIndex，当 i > startIndex 且 candidates[i] === candidates[i - 1] 时，
      // 就说明当前位置是重复元素中的第一个元素后面的元素，所以需要直接跳过
      if (i > startIndex && candidate === candidates[i - 1]) {
        continue;
      }

      tempArr.push(candidate);
      sum += candidate;
      backtracking(candidates, target, sum, i + 1, tempArr);
      // 回溯逻辑
      tempArr.pop();
      sum -= candidate;
    }

  };

  backtracking(candidates, target, 0, 0, []);

  return result;
}

/**
 * @description 131. 分割回文串 s = "aab"
 * 思路：以字符串 'aab' 为例：首先分割第一个 a ,a 为回文串，然后分割第二个 a ，也为回文串，然后分割 b，为回文串，此时分割点来到了字符串末尾，这样就得到了一个结果，然后进行回溯，
 * 将字符串 a 和 b 弹出，然后直接分割 ab，发现不是回文串，然后再回溯，然后分割 aa，然后分割 b，就得到了结果 ['aa', 'b']，那么怎么表示分割线呢？startIndex 就是分割线的起点，
 * 而 [start, i] 的闭区间就是分割出来的字符串，判断这个字符串是否是回文的，如果是回文的，就加入结果集，然后进入下次递归，如果不是回文的，就开始下一次分割
 * @param s
 */
export function partition(s: string): string[][] {
  const sLen = s.length;
  if (sLen === 0) return [];
  /**
   * @description 检查字符串是否为回文串
   * @param s
   * @return {boolean}：是否为回文串
   */
  const isValid = (s: string): boolean => {
    const sLen = s.length;
    if (sLen === 0) return false;
    let left: number = 0;
    let right: number = sLen - 1;

    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;

  };

  const result: string[][] = [];

  const backtracking = (s: string, startIndex: number) => {

  };

  return result;

}

/**
 * @description 93. 复原 IP 地址 s = "25525511135"
 * 思路：进行分割，每次分割时判断分割出来的字符串是否符合 IP 规则，即 大于 0，小于 256，多位数字时不能全为 0 或者非 0 数字前面不能有 0 ，如果符合，就加入结果集，
 * 如果不符合，就开始下一次分割（进入下一次 for 循环）
 * 递归终止条件：以添加的点数作为递归的终止条件，加的点的数量等于 3，因为 IP 只有三个点，例如：127.0.0.1，只有 3 个点
 * @param s
 */
export function restoreIpAddresses(s: string): string[] {

}

/**
 * @description 78. 子集：nums = [1,2,3]，结果：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 思路：可以看出，结果在每个节点上，而每个节点就是在每次进入递归函数之时，所以，收集结果就在每次进入递归函数时收获结果
 * @param nums
 */
function subsets(nums: number[]): number[][] {

}

/**
 * @description 90. 子集 II：nums = [1,2,2]，结果：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 思路：包含了重复元素，而收获的子集又不能重复，所以需要去重，就需要对 nums 进行递增排序，然后在进行去重，去重的操作就是在每次 for 循环之时，
 * 先判断当前元素是否与前一个元素相同，如果相同就退出本次循环，开始下一次循环，因为重复元素中前面的元素搜索到的结果包含了后面元素搜索到的结果
 * @param nums
 */
export function subsetsWithDup(nums: number[]): number[][] {

}

/**
 * @description 491. 递增子序列：nums = [4,6,7,7]，结果：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 * 思路：有重复元素，而且结果中不能含有重复的子序列，所以需要去重，但是不能按照之前对 nums 进行排序的方式进行去重，以 nums = [4,6,7,7] 为例，如果排序，
 * 得到的结果会包含 [4, 6, 7, 7] 这个结果，很明显这个结果是不对的，这个是因为我们对 nums 进行了递增排序，所以排序后的结果自然就符合题目要求，但却不是结果，
 * 因为子序列是要求元素顺序的，子序列的元素顺序需要和父序列一样，排序改变了元素额顺序，所以不能用排序来进行去重，这时就可以用 Set 或者 数组 来进行去重，
 * 将使用过的元素放入到 Set 或 数组 中，这样在后面就可以查到当前遍历的元素是否在 Set 或 数组 中而知道之前是否使用过相同元素，如果使用过就跳出本次 for 循环，
 * 从而达到去重的目前，但是 Set 或数组需要在每次递归函数里定义
 * @param nums
 */
export function findSubsequences(nums: number[]): number[][] {

}

/**
 * @description 46. 全排列：nums = [1,2,3]，结果：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 思路：去排列每个元素都会用上，不再需要 startIndex 限制每次从那个元素开始 for 循环，因为每次都是从 0 开始，通过 usedList 数组知道当前元素是否使用过，
 * 例如如果 2 使用过，usedList[1] 就为 true，从而跳出本次循环，因为同一个元素不能使用多次
 * @param nums
 */
export function permute(nums: number[]): number[][] {

}

/**
 * @description 47. 全排列 II：nums = [1,1,2]，结果：[[1,1,2], [1,2,1], [2,1,1]]
 * 思路：有相同元素，但是不能有相同的排列，需要进行去重，因为排列跟子序列不同，子序列需要和父序列的元素顺序相同，不能通过排序去重，但是排列不要求元素顺序，
 * 所以排列可以使用排序去重，排序后，如果 i > 0 && nums[i] === nums[i - 1] && !usedList[i - 1]，那么说明当前遍历的元素在与前一个相同，就跳出本次循环
 * @param nums
 */
export function permuteUnique(nums: number[]): number[][] {

}

/**
 * @description 332. 重新安排行程
 * @param tickets
 */
export function findItinerary(tickets: string[][]): string[] {

}

/**
 * @description 51. N 皇后：n = 4，结果：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 思路：棋盘需要用二位数组来表示，不使用递归时，二维数组的遍历需要用两层 for 循环，第一层 for 循环遍历行，第二层 for 循环遍历列。但是，如果使用递归的话，
 * 那么每次进入递归，就是遍历行，需要一个参数来记录当前遍历到多少行，而递归里面的 for 循环，就是遍历列。当某次进入递归函数时，发现参数中记录的行大于了二维数组的的行，
 * 那么就说明遍历完了，就需要结束递归。
 * 注意：递归函数的参数中记录的行需要与二维数组对应，如：参数中用 row 记录遍历到多少行，而 row 是从 0 开始的，那么二位数组的行也需要从 0 开始，如果 n = 4，
 * 那么二位数组的行数就为 n - 1 = 3 行，当 row > n -1 时，即 row = 4 时就需要退出递归。或者 row = n，即 row = 4，两者的效果是一样的。
 * @param n
 */
export function solveNQueens(n: number): string[][] {

}

/**
 Do not return anything, modify board in-place instead.
 */
/**
 * @description 37. 解数独
 * board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
 * 结果：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
 * 思路：这是一个二维递归的情况，跟 n 皇后问题最明显的区别就是，n 皇后每一行 或者 每一列都只有一个元素，那么只需要在遍历时，确定当前位置可以放皇后，就可以进行下次递归的了，
 * 因为 n 皇后的递归是遍历行，所以每进入一次递归，就表示遍历到下一行了，但是解数独不是，解数独需要每个位置都放元素，例如遍历到第 0 行的第 2 列，该位置是空的，然后尝试放置元素，
 * 发现可以放置 1，然后就在这个位置放入 1，进入下次递归，因为第 0 行的第 3 列也是空的，所以下次递归应该是要尝试向该位置放元素，如果按照 n 皇后的处理方式，进入下次递归，
 * 递归函数里记录的行数进行 +1，那么下次递归就到第 1 行了，跳过了第 0 行，由此就可以确认，解数独是一个二维递归的问题，不使用递归函数的参数表示遍历到第几行，而是使用两个 for 循环，
 * 第一个 for 循环遍历行，第二个 for 循环遍历列，这样在我们向 board[0][2] 位置放入 1 时，进入下次递归，又是从第 0 行开始遍历，遍历到 board[0][2] 时发现有值了，遍历到
 * board[0][3] 时，发现该位置为空，又可以尝试放入元素，放入元素后再次递归，遍历到 board[0][4] 再放入元素，如此，直到遍历完整个棋盘
 * @param board
 */
export function solveSudoku(board: string[][]): void {

}
