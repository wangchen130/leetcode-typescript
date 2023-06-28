/**
 * ********************************************************动态规划五部曲*****************************************************************
 * 1、dp数组以及下标 i 的含义
 * 2、递推公式
 * 3、dp数组如何初始化
 * 4、确定遍历顺序
 * 5、排查错误时打印 dp 数组
 */

/**
 * @description 509. 斐波那契数
 * 1、确定 dp[i] 的含义：第 i 个斐波那契数为 dp[i]
 * 2、递推公式：  dp[i] = dp[i - 1] + dp[i - 2]
 * 3、dp数组如何初始化： dp[0] = 1 , dp[1] = 1，后面初始化为：0
 * 4、确定遍历顺序：  从前往后遍历
 * @param n
 */
export function fib(n: number): number {
  if (n < 0) n = 0;
  // 1. 定义 dp 数组，注意，创建 dp 数组时数组的长度为 n + 1，因为 n 是 从 0 开始的，表示下标，如果 n = 2 时，F(2) = F(1) + F(0)，是有三个元素的
  const dp: number[] = new Array<number>(n + 1).fill(0);
  // 2. 初始化 dp 数组
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

/**
 * @description 70. 爬楼梯
 * 思路：第 i 层楼梯只能通过第 i - 1 层或者第 i - 2 层直接到达，即从 i - 1 层直接上一阶或者从 i - 2 层直接上 2 阶，
 * 那么到达 i - 1 层或者 i - 2 层的方式就直接决定了到达第 i 层有多少种方式，因为 i - 1 层或者第 i - 2 层能直接到达第 i 层，
 * 那么到达第 i 层的方式就等于到达第 i - 1 层的方式加上到达第 i - 2 层的方式，即 dp[i] = dp[i - 1] + dp[i - 2]
 * 1. dp[i] 的含义： 爬到第 i 层楼梯共有 dp[i] 种方法
 * 2. 递推公式：dp[i] = dp[i - 1] + dp[i - 2]
 * 3. 初始化 dp 数组：dp[1] = 1 , dp[2] = 2
 * 4. 确定遍历顺序：从前往后遍历，因为后面的数据需要依赖前面的数据结果
 * @param n
 */
export function climbStairs(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

/**
 * @description 746. 使用最小花费爬楼梯
 * 思路：与爬楼梯一样，要爬到第 i 阶，可以由第 i - 1 阶或着第 i - 2 阶直接到达，那么需要判断爬到第 i 阶是从第 i - 1 阶上来花费小，还是从第 i - 2 阶上来花费小，
 * 以 cost = [10,15,20] 为例，楼顶为第 4 阶，爬到第 3 阶由第 1 阶直接上来花费最小，花费为 10，爬到第 4 阶如果由第 3 阶上来，花费为：10 + 20 = 30，
 * 如果由第 2 阶直接爬两层上来，花费为：15，所以爬到楼顶的最小花费为：15
 * 1. dp[i] 的含义：爬到第 i 阶楼梯的最小花费为 dp[i]
 * 2. 递推公式：dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
 * 3. 初始化 dp 数组：全部初始化为 0 即可
 * 4. 遍历顺序：从前往后遍历
 * @param cost
 */
export function minCostClimbingStairs(cost: number[]): number {
  const costLen = cost.length;
  const dp: number[] = new Array(costLen + 1).fill(0);
  for (let i = 2; i <= costLen; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[costLen];
}

/**
 * @description  62. 不同路径
 * 思路：因为只能 向下 或者 向右 移动，起点在左上角，那么第一行和第一列都只能有 1 条路径，那么 [1,1] 这个点就有 2 条路径，是到 [0,1] 的 1 条路径加上到 [1,0] 的 1 条路径的和，
 * 到 [2,1] 这个点的路径数为到 [2,0] 的 1 条路径数加上到 [1,1] 的 2 条路径数，为 3 条路径。以此类推，某个点的路径数可以由这个点的左边点和上边点推出来，
 * 即等于从出发点到该点的左边点的路径数 加上 从出发点到该点的上边点的路径数
 * 1. dp[i][j] 的含义：从出发点 [0,0] 到点 [i,j] 的路径数为 dp[i][j]
 * 2. 递推公式：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * 3. 初始化 dp 数组：第 1 行和第 1 列初始化为 1
 * 4. 遍历顺序：从左到右，从上到下
 * @param m
 * @param n
 */
export function uniquePaths(m: number, n: number): number {
  // 注意：传入的是行数和列数，不是下标，所以创建 dp 数组时数组的长度就为 m 和 n，无需进行加 1
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
/**
 * @description 63. 不同路径 II
 * 1. dp[i][j] 的含义：从起点 [0,0] 到点 [i,j] 共有多少条路径
 * 2. 递推公式：当 obstacleGrid[i][j] === 0 时，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * 3. 初始化 dp 数组：第 1 行和第 1 列障碍之前初始化为 1 ，障碍后全部初始化为 0
 * 4. 遍历顺序：从左到右，从上到下
 * @param obstacleGrid
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const row = obstacleGrid.length;
  if (row === 0) return 0;
  const column = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[row - 1][column - 1] === 1) return 0;
  const dp: number[][] = new Array(row).fill(0).map(() => new Array(column).fill(0));
  // 初始化 dp 数组第一列
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }
  // 初始化 dp 数组第一行
  for (let j = 0; j < column; j++) {
    if (obstacleGrid[0][j] === 1) break;
    dp[0][j] = 1;
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[row - 1][column - 1];
}

/**
 * @description 343. 整数拆分
 * 思路：要想拆分得到的乘积最大，那么需要将整数 n 拆分成很多个近似相等的数，然后在这么多组近似相等的数中取乘积最大的组合
 * 1) 如果拆成两个数：其中一个数为 j (1 <= j <= i - 1)，另一个数为： i - j ，则乘积为：j * (i - j)
 * 2) 如果拆分为 3 个或 3 个以上的数，其中一个数为 j (1 <= j <= i - 1)，则剩余的数为 i - j，那么就是要将 i - j 这个数进行拆分，使得拆分后得到的数的乘积最大，
 * 因为 dp 数组就是存放的拆分整数乘积的最大值，所以将 i - j 这个数进行拆分得到的数的乘积的最大值就为 dp[i - j]，则拆分成 3 个或 3 个以上整数的乘积的最大值为：j * dp[i - j]
 * 3）要得到拆分整数 i 的数的乘积的最大值，那么就是取拆分为 2 个整数和拆分为 3 个及 3 个以上整数这两种情况得到的最大值
 * 1. dp[i] 的含义：将整数 i 拆分成 k 个正整数后，这 k 个正整数乘积的最大值为 dp[i]
 * 2. 初始化 dp 数组：dp[0] = 0,dp[1] = 0, dp[2] = 1
 * 3. 递推公式：dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
 * 为什要放 dp[i]：因为每次都是固定了 i ，然后 j 从 1 开始取拆分 i ，那么就会遇到 dp[i] 已经有值的情况；举个例子：传入的 n 为 10，当遍历到i = 3 时，会求的 dp[3] = 2，
 * 然后遍历到 i = 4 时，这时 dp[3] 已经有值了，值为上一次循环中求的的 dp[3] = 2，如果不将 dp[3] 放进来一起取最大值，就会丢掉 dp[3] 的值
 * 4. 遍历顺序：i 从 3 遍历到 n，j 从 1遍历到 i - 1
 * @param n
 */
export function integerBreak(n: number): number {
  // 定义 dp 数组，dp[i]的含义：将整数 i 拆分成 2 个或 2 个以上的正整数，这些正整数的乘积中值最大的为：dp[i]
  const dp = new Array<number>(n + 1).fill(0);
  // 初始化 dp 数组
  dp[2] = 1;
  // 因为 0，1，2 已经初始化了，所以遍历从 3 开始
  for (let i = 3, len = dp.length; i < len; i++) {
    const temp = Math.floor(i / 2);
    for (let j = 1; j <= temp; j++) { // 用 j 去拆分 i
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i]);
    }
  }
  return dp[n];
}
/**
 * @description 96.不同的二叉搜索树
 * 思路：
 * n = 0 时，为空二叉树，有 1 种情况
 * n = 1 时，有 1 种情况
 * n = 2 时，以 1 为根节点是一种情况，以 2 为根节点为另一种情况，共 2 种情况
 * n = 3 时：1 为根节点，左子树为空节点，有一种情况，右子树有两个节点（2，3），有两种情况，共计 1 * 2 = 2 种情况。
 *          2 为根节点，左子树为 1 节点，有一种情况，右子树为 3 节点，有一种情况，共计 1 * 1 = 1 种情况。
 *          3 为根节点，左子树有两个节点（1，2），有两种情况，右子树为空节点，有一种情况，共计 2 * 1 = 2 种情况
 * 所以 n = 3 共计 2 + 1 + 2 = 5 种情况
 * n = 4 时：1 为根节点，左子树为空节点，有一种情况。右子树有三个节点（2，3，4），这三个节点可以组成不同的二叉树：分别以 2，3，4 为根节点，那么就可以对应 n = 3 的情况，即 5 种情况
 *          2 为根节点，左子树为 1 节点，有一种情况，右子树为（3，4）节点，有两种情况，共计 1 * 2 = 2 种情况
 *          3 为根节点，左子树为（1，2）节点，有 2 种情况，右子树为 4 节点，有 1 种情况，共计 2 * 1 = 2 种情况
 *          4 为根节点，左子树为（1，2，3）节点，对应 n = 3 的情况，有 5 种节点，右子树为空节点，有 1 种情况，共计 5 * 1 = 5 种情况
 * 所以 n = 4 共计 5 + 2 + 2 + 5 = 14 种情况
 * 由此可以推出，当输入 i 时，所有二叉树的种数就为以 1 为根节点，2 为根节点，3 为根节点，。。。。i 为根节点的所有情况相加
 * 而当以 j 为根节点时，左子树有 j - 1 个节点，右子树有 i - j 个节点，那么输入 i 所能组成的二叉树种树 = j - 1 个节点的情况 * i - j 个节点的情况
 * 1. dp[i] 的含义：当输入 i 时，所能组成的二叉树的种数为 dp[i]
 * 2. 递推公式：dp[i] += dp[j - 1] * dp[i - j]
 * 2. 初始化 dp 数组：dp[0] = 1,dp[1] = 1,dp[2] = 2
 * 4. 遍历顺序：i 从 3 遍历到 n，j 每次从 1 遍历到 i
 * @param n
 */
export function numTrees(n: number): number {
  // 定义 dp 数组：dp[i]的含义：当输入 i 时，所有构成的二叉搜索数的种数为： dp[i]
  const dp: number[] = new Array(n + 1).fill(0);
  // 初始化 dp 数组
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3, len = dp.length; i < len; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}

/** ****************************************************背包问题****************************************************
 * 一、二维 dp 数组实现 01 背包
 * 1. dp[i][j]的含义：[0,i] 这么多个物品，物品不能重复取，任取若干个装入容量为 j 的背包，所装物品的最大价值为：dp[i][j]
 *    不放物品 i 的最大价值即为前一个单元格的装入策略，即为：dp[i - 1][j]
 *    放物品 i 时，因为物品的重量为 weight[i]，要想将物品 i 放入背包，那么就需要背包有相应的容量，则背包的容量最大只能为 j - weight[i]，这样才能装下物品 i，
 *    因为这时还未装入物品 i ，所以当背包容量为 j - weight[i] 时最大价值为：dp[i - 1][j - weight[i]]，所以装入物品 i 的最大价值为：dp[i - 1][j - weight[i]] + value[i]
 * 2. 递推公式：放物品 i 和不放物品 i 两种策略的最大值，即：dp[i] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
 * 3. 初始化 dp 数组：容量为 0 时最大价值为 0，即第一列为 0。第一行背包容量能放下物品 0 之前的所以单元格初始化为 0，能放下物品 0 及之后的单元格初始化为物品 0 的价值 value[0]
 * 4. 遍历顺序：先遍历物品再遍历背包容量、先遍历背包容量再遍历物品 都可以
 *
 * 二、一维 dp 数组实现 01 背包 【滚动数组】
 * 1. dp[j]的含义：容量为 j 的背包所能装的物品的最大价值为：dp[j]
 *    不放物品 i 的最大价值为：dp[j]。一维 dp 数组实现 01 背包就是每次遍历物品，然后去覆盖 dp 数组，即当前的 dp 数组就是上一次循环中使用的 dp 数组，dp[j] 也是上一次循环求的最大价值
 *    放物品 i 的最大价值为：dp[j - weight[i]] + value[i]
 * 2. 递推公式：dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
 * 3. 初始化 dp 数组：全部初始化为 0
 * 4. 遍历顺序：先遍历物品，然后倒叙遍历背包容量
 *    为什么需要倒叙遍历背包容量：是为了防止重复添加物品，确保是 01 背包。因为根据递推公式来看，如果是正序遍历背包容量的话，如果背包容量为 5，物品1重量为 1，价值为 1，遍历物品1时，
 *    当遍历到 j = 1 时，添加了该物品，dp[1] = 1，然后遍历到 j = 2 时，此时背包剩余容量为 1，刚好可以放下该物品，这时 dp[j] = dp[2] = 0，
 *    dp[j - weight[i]] + value[i] = dp[2 - 1] + 1 = dp[1] + 1 = 1 + 1 = 2，这时 Math.max(dp[j], dp[j - weight[i]] + value[i]) = Math.max(0, 2) = 2，
 *    dp[2] = 2，即添加了两个物品1。正序的话前面的值已经添加了该物品了，因为递推公式是根据前面的值得到后面的值，所以就会多次添加该物品
 *    所以正序遍历背容量为完全背包，倒叙遍历背包容量为 01背包
 *    for(let i = 0; i < 物品数量; i++){ // 先遍历物品
 *      for(let j = 背包容量; j >= weight[i]; j--) { // 倒叙遍历背包容量
 *        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
 *      }
 *    }
 *
 * 三、一维数组实现完全背包
 * 1. dp[j] 的含义：容量为 j 的背包所能装的物品的最大值为 dp[j]
 * 2. 递推公式：dp[j] = Math.max(dp[j], dp[j - weight[i] + value[i])
 * 3. 初始化 dp 数组：全部初始化为 0
 * 4. 遍历顺序：先遍历物品再遍历背包容量（得到组合） 或者 先遍历背包容量再遍历物品都可以（得到排列），但是需要【正序遍历】背包容量
 *    先遍历物品再正序遍历背包容量（组合）：
 *    for(let i = 0; i < 物品数量; i++) { // 遍历物品
 *      for(let j = weight[i]; j <= 背包容量; j++ ) { // 正序遍历背包容量
 *        dp[j] = Math.max(dp[j], dp[j - weight[i] + value[i])
 *      }
 *    }
 *    先正序遍历背包容量再遍历物品（排列）：
 *    for(let j = 0; j <= 背包容量; j++) {
 *      for(let i = 0; j >= weight[i] && i < 物品数量; i++) {
 *        dp[j] = Math.max(dp[j], dp[j - weight[i] + value[i]])
 *      }
 *    }
 ******************************************************************************************************** */

/**
 * @description 416. 分割等和子集
 * 思路：可以抽象为 0 - 1 背包问题，以 nums = [1,5,11,5] 为例，数组和为：22，22 / 2 = 11，所以只需要找出 nums 中是否存在加起来等于 11 的子集即可
 * 那么，就可以看成是容量为 11 的背包，然后把 nums 中的物品（物品的价值和重量都是 nums 中的元素值）往背包里装，如果最后得到了 dp[11] = 11，那么就说明存在该子集
 * @param nums
 */
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp: number[] = new Array(target + 1).fill(0);
  for (let i = 0, len = nums.length; i < len; i++) { // 遍历物品
    const num = nums[i];
    for (let j = dp.length - 1; j >= num; j--) { // 倒叙遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - num] + num);
    }
  }
  return dp[target] === target;
}

/**
 * @description 1049. 最后一块石头的重量 II
 * 思路：抽象成 0 - 1 背包即可：要想最后留下的石头重量最小，那么可以将石头分成近似相等的两堆石头，因为近似相等了，那么这两堆石头一相撞，剩下的石头重量就最小、
 * 以 stones = [2,7,4,1,8,1] 为例： sum = 2 + 7 + 4 + 1 + 8 + 1 = 23，23 / 2 = 11，这样就可以将这一堆石头分成近似相等于 11 的两堆石头，即 一堆 11，另一堆 12
 * 那么就是一个容量为 11 的背包，将 stones 中的物品往里面装，得到所装物品的最大的价值 dp[11]，那么最后一块石头的重量为：(sum - dp[11]) - dp[11]
 * @param stones
 */
export function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((pre, cur) => pre + cur, 0);
  const target = Math.floor(sum / 2);
  const dp: number[] = new Array(target + 1).fill(0);
  for (let i = 0, len = stones.length; i < len; i++) { // 先遍历物品
    const stone = stones[i];
    for (let j = dp.length - 1; j >= stone; j--) { // 倒序遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - stone] + stone);
    }
  }
  return sum - dp[target] * 2;
}
/**
 * @description 494. 目标和
 * 思路：可以将数组分成两部分，正数（positiveList）为一个部分，负数（negativeList）为一个部分。整数和为：positiveSum，负数和为：negativeSum，则：
 * positiveSum - negativeSum = target  ==> negativeSum = positiveSum - target
 * positiveSum + negativeSum = sum  ==> positiveSum + positiveSum - target = sum ==> 2 * positiveSum = sum + target ==> positiveSum = (sum + target) / 2
 * 因为 positiveSum 为正整数，所以 sum + target 必须为偶数，不为偶数则证明不存在 positiveSum ，即返回 0 即可
 * 以 nums = [1,1,1,1,1], target = 3 为例：sum = 5，则 positiveSum = (sum + target) / 2 = (5 + 3) / 2 = 8 / 2 = 4
 * 则可以抽象为 01 背包问题，背包容量为：positiveSum = 4，物品为 nums，求装满背包共有多少种方法
 * 1. dp[j] 的含义： 装满容量为 j 的背包共有 dp[j] 种方法。
 * 2. 递推公式：dp[j] += dp[j - nums[i]]
 *    如何理解这个递推公式：首先要记住 dp[j] 的含义，dp[j] 表示装满容量为 j 的背包共有 dp[j] 种方法。例如：背包容量为 4，物品为 nums =  [1, 2, 3, 2, 1]，
 *    当遍历完前两个物品后，即添加了前两个物品 [1, 2] 后，dp数组为：[1, 1, 1, 1, 0]，然后开始遍历第 3 个物品，即物品 3，此时 i = 2，因为是倒序遍历背包容量，所以
 *    j = 4 时，因为这时可以将物品 3 放入背包，背包容量为 4，物品占了 3 个容量，此时背包剩余容量为 1，因为 dp 数组表示的是装满背包共有多少种方法，背包剩余容量为 1，
 *    所以放入了物品 3 后，共有 dp[1] 种方法，故：dp[j] += dp[j - nums[i]] ==> dp[4] = dp[4] + dp[4 - nums[2]] = dp[4] + dp[4 - 3] = 0 + dp[1] = 1，
 * 3. 初始化 dp 数组： dp[0] = 1
 * 4. 遍历顺序：先遍历 nums，再倒序遍历背包容量
 * @param nums
 * @param target
 */
export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  if ((sum + target) % 2 !== 0) return 0;
  const positiveSum = (sum + target) / 2;
  // ！！！输入值可能会是 nums = [100], target = -200，此时求出的 positiveSum 为负数
  if (positiveSum < 0) return 0;
  const dpLength = positiveSum + 1;
  const dp: number[] = new Array(dpLength).fill(0);
  dp[0] = 1;
  for (let i = 0, len = nums.length; i < len; i++) {
    let num = nums[i];
    for (let j = dpLength - 1; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[dpLength - 1];
}

/**
 * @description 474. 一和零
 * 思路：可以抽象为 01 背包问题，不过背包有两个维度，不再是一个维度。此时的背包为一个最多能装 i 个 0 和 j 个 1 的背包。则此时问题就变为，从一个物品列表中取物品，
 * 每个物品包含 x 个 0 和 y 个 1，任取其中的物品放入一个最多能装最多能装 i 个 0 和 j 个 1 的背包，问装满这个背包最多可以放多少件物品？
 * 1. dp[i][j] 的含义：装满最多能装 i 个 0 和 j 个 1 的背包的物品数最多为：dp[i][j]
 * 标准 01 背包的递推公式为：dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
 * 2. 递推公式: dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1)
 *    含义：x：当前取出的物品有 x 个 0，y：当前取出的物品有 y 个 1，dp[i - x][j - y]：清理出当前物品所需的空间（x 个 0 和 y 个 1 的空间）后，剩余空间最多能装的物品数。
 * 3. 初始化 dp 数组：全部初始化为 0
 * 4. 遍历顺序：先遍历物品，再倒叙遍历背包容量
 * @param strs
 * @param m
 * @param n
 */
export function findMaxForm(strs: string[], m: number, n: number): number {
  // 定义 dp 数组
  const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (const str of strs) { // 遍历物品
    let zeroSum = 0;
    let oneSum = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let strElement = str[i];
      if (strElement === '0') {
        zeroSum++;
      } else {
        oneSum++;
      }
    }
    // 倒叙遍历背包容量
    for (let i = m; i >= zeroSum; i--) { // 背包能装多少个 0
      for (let j = n; j >= oneSum; j--) { // 背包能装多少个 1
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroSum][j - oneSum] + 1);
      }
    }

  }
  return dp[m][n];
}
/**
 * @description 518. 零钱兑换 II
 * 思路：因为零钱可以使用多次，所以可以抽象为完全背包问题。即为可以从 coins 数组中任意选取物品，每个物品可以多次选取，求装满容量为 amount 的背包共有多少种方法。
 * 而且 [2, 1, 2] 和 [2, 2, 1] 是同一中方法，即求的是组合数，那么遍历顺序就为先遍历物品，在正序遍历背包容量。
 * 1. dp[j] 的含义：装满容量为 j 的背包共有 dp[j] 种方法
 * 2. 递推公式： dp[j] += dp[j - coins[i]]
 * 3. 初始化 dp 数组：dp[0] = 1，其他为 0
 * 4. 遍历顺序：先遍历物品，再正序遍历背包容量
 * @param amount
 * @param coins
 */
export function change(amount: number, coins: number[]): number {

}
/**
 * @description 377. 组合总和 Ⅳ
 * 思路：可以抽象为一个完全背包的问题，且求的是【排列】数。即为从数组 nums 中任意选取物品，物品可以多次选取，求装满容量为 target 的背包共有多少种方法。
 * 1. dp[j] 的含义：装满容量为 j 的背包共有 dp[j] 种方法
 * 2. 递推公式： dp[j] += dp[j - nums[i]]
 * 3. 初始化 dp 数组： dp[0] = 1
 * 4. 遍历顺序：先正序遍历背包容量，再遍历物品
 * @param nums
 * @param target
 */
export function combinationSum4(nums: number[], target: number): number {

}

/**
 * @description 70. 爬楼梯 进阶版
 * @param n: 需要爬多少阶楼梯
 * @param m: 一次最多能爬 m 阶楼梯
 */
export function climbStairs1(n: number, m: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  // 遍历背包
  for (let i = 1; i <= n; i++) {
    // 遍历物品
    for (let j = 1; j <= m; j++) {
      if (j <= i) {
        dp[i] += dp[i - j];
      }
    }
  }
  return dp[n];
}

/**
 * @description 322. 零钱兑换
 * 思路：抽象为完全背包问题，即为：从数组 coins 中任务物品，物品可以多次使用，求装满容量为 amount 的背包最少要用多少件物品。
 * 1. dp[j] 的含义：装满容量为 j 的背包最少要用 dp[j] 件物品
 * 2. 递推公式：dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
 *    dp[j - coins[i]]: 装满容量为 j - coins[i] 的背包最少需要 dp[j - coins[i]] 件物品，这时背包的剩余容量刚好可以放下物品 i，这时放入物品 i 就有 dp[j - coins[i]] + 1 件物品
 * 3. 初始化 dp 数组：dp[0] = 0，其他初始化为 Infinity
 * 4. 遍历顺序：先遍历物品再遍历背包 或者 先遍历背包再遍历物品都可以
 * @param coins
 * @param amount
 */
export function coinChange(coins: number[], amount: number): number {

}

/**
 * @description 279. 完全平方数
 * 思路：抽象为完全背包问题，即为：从 1，4，9，16，..., i * i , ... , 中任意选取物品，求装满容量为 n 的背包最少需要多少件物品。
 * 1. dp[j] 的含义：装满容量 j 的背包最少需要 dp[j] 件物品。
 * 2. 递推公式：dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
 * 3. 初始化 dp 数组：dp[0] = 0，其他初始化为：Infinity
 * 4. 遍历顺序：先遍历物品再遍历背包 或者 先遍历背包再遍历物品都可以
 * @param n
 */
export function numSquares(n: number): number {

}

/**
 * @description 139. 单词拆分
 * 以 s = "applepenapple", wordDict = ["apple", "pen"] 为例：可以抽象为完全背包问题，即从 wordDict 任意选取物品，且是否能装满背包 s，背包容量为字符串的长度
 * j 为背包容量，正序遍历，i 遍历 j 之前的的所有元素，一次对字符串 s 进行截取，只要截取下来的子串在 wordDict 中存在，那么就证明从 i 到 j 这一段是可以有 wordDict 中的单词组成的
 * 那么就可以把 dp[j] 设置为 true
 * 1. dp[j] 的含义：字符串的长度为 j，如果能由 wordDict 中的单词组成，则 dp[j] = true
 * 2. 递推公式：
 *    if(wordDict.includes(s.substring(i, j - i)) && dp[i] === true) {
 *      dp[i] = true
 *    }
 * 3. 初始化 dp 数组：dp[0] = true，其他初始化为 false
 * 4. 先正序遍历背包容量，再遍历物品，因为求的是排列数
 * @param s
 * @param wordDict
 */
export function wordBreak(s: string, wordDict: string[]): boolean {

}

/**
 * @description 198. 打家劫舍
 * 思路：不能偷相邻的房间，那么从前往后偷的话，当前房间偷和不偷只取决于前两个房间。
 * 如果偷当前房间，因为相邻房间不能偷，所以前面第一个房间直接不考虑，那么获得的钱就是 当前房间的钱加上前面第二个房间的钱
 * 如果不偷当前房间，那么获得的钱就是前面第一个房间的钱
 * 所以当前房间所能获得的钱的最大值就是 偷当前房间和不偷当前房间两种状态获得的钱取最大值
 * 1. dp[i] 的含义：考虑下标 i （包含 i）的房间所能获得的最大钱币数为 dp[i]
 * 2. 递推公式：dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
 * 3. 初始化 dp 数组：dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1])
 * 4. 遍历顺序：从前往后遍历
 * @param nums
 */
export function rob(nums: number[]): number {

}

/**
 * @description 213. 打家劫舍 II
 * 思路：所有的房间连成了一个环，那么偷首元素就不能偷尾元素，偷尾元素就不能偷首元素。那么就可以拆解为 3 种情况：
 * 一、不考虑首尾元素，那么只需要考虑中间元素即可
 * 二、考虑首元素不考虑尾元素，那么就是考虑首元素和中间元素
 * 三、考虑尾元素不考虑首元素，那么那么就是考虑尾元素和中间元素
 * 可以看出，第二和第三种情况包含了第一种情况，即都包含了中间元素，所以可以拆分成第二和第三种情况即可，
 * 那么就可以利用打家劫舍1的方法，将包含首元素不包含尾元素的数组和不包含首元素包含尾元素的数组分别传入打家劫舍1的函数中，分别得到两种情况所得的钱币数，然后再取两种情况的最大值即可
 * @param nums
 */
export function rob1(nums: number[]): number {

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
 * @description 337. 打家劫舍 III
 * 思路：房间为树结构的话，就需要确定一个遍历顺序，因为相邻节点不能偷，所以这种遍历顺序在遍历当前节点时需要知道父节点的状态或者知道子节点的状态。那么就只能是后序遍历。
 * 后续遍历父节点可以拿到左子节点和右子节点的状态，如果偷当前节点，然后最大钱币数就等于当前节点的钱币数加上不考虑左右子节点的钱币数之和，
 * 如果不偷当前节点，那么最大钱币数就等于考虑左右子节点的钱币数之和，最后结果在根节点上汇总。
 * 1. dp 数组的含义：dp[0]：考虑当前节点的最大钱币数，dp[1]：不考虑当前节点的最大钱币数
 * 2. 递推公式： dp[0] = node.val + leftDp[1] + rightDp[1]
 *              dp[1] = leftDp[0] + right[0]
 * 3. 初始化 dp 数组：空节点 dp = [0,0]
 * 4. 遍历顺序：后序遍历
 * @param root
 */
export function rob3(root: TreeNode | null): number {

}

/**
 * @description 121. 买卖股票的最佳时机
 * 思路：每天都有两个状态，一个是持有当前股票，一个是不持有当前股票
 * 持有当前股票有两种状态，1、之前就买入了股票，但是一直没有卖出。2、当天买入股票
 * 不持有当前股票有两种情况。1、之前就卖出了股票。2、当天卖出股票。所以 dp 数组需要定义成二维的 dp 数组，这样才能表示两种状态。
 * 1. dp 数组的含义： dp[i][0]：第 i 天持有股票的最大利润，dp[i][1]：第 i 天不持有股票的最大收益
 * 2. 递推公式：dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
 *             dp[i - 1][0]：前一天就持有了股票
 *             -prices[i]：当天买入股票，因为只能买卖一次，所以买入的话，手头的现金一定是 0，所以买入股票的利润为 0 - prices[i] = -prices[i]
 *             dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
 *             dp[i - 1][1]：前一天就不持有股票
 *             dp[i - 1][0] + prices[i]：当天卖出股票，那么前一天肯定是持有股票的，那么利润就等于前一天持有股票的利润在加上当天的股票价格
 * 3. 初始化 dp 数组：dp[0][0] = -prices[0]，dp[0][1] = 0
 * 4. 遍历顺序：从前往后
 * @param prices
 */
export function maxProfit(prices: number[]): number {

}

/**
 * @description 122. 买卖股票的最佳时机 II
 * 思路：于买卖股票1相比，现在可以买卖多次，如果当天买入股票，那么利润就为前一天不持有股票的利润再减去当天的股票价格
 * 于是递推公式就为：dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
 *                 dp[i - 1][1]：前一天不持有股票的利润
 *                 - prices[i]：当天的股票价格
 * 1. dp 数组的含义：dp[i][0]：第 i 天持有股票的最大利润。dp[i][1]：第 i 天不持有股票的最大利润。
 * 2. 递推公式：dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
 *            dp[i][0] = Math.max(dp[]i - 1[1], dp[i - 1][0] + prices[1])
 * 3. 初始化 dp 数组：dp[0][0] = -prices[0], dp[0][1] = 0
 * 4. 遍历顺序：从前往后遍历
 * @param prices
 */
export function maxProfit2(prices: number[]): number {

}

/**
 * @description 123. 买卖股票的最佳时机 III，至多买卖两次股票
 * 思路：至多买卖两次，那么就是可能买卖一次，也可能买卖两次。那么就可以将状态进行拆解。拆解为不操作、第一持有、第一次不持有、第二次持有和第二次不持有。这样就包含了所有情况。
 * 1. dp 数组的含义：dp[i][0]: 不操作
 *                 dp[i][1]：第一次持有，可能是之前就持有了，也可能是当天买入，如果是当天买入就是不操作 减去 当天的股票价格
 *                 dp[i][2]：第一次不持有，可能是之前就不持有，也可能是当天卖出，如果是当天卖出就是第一次持有 加上 当天股票价格
 *                 dp[i][3]：第二次持有，可能是之前就持有了，也可能是当天买入，如果是买入就是第一次不持有 减去 当天股票价格
 *                 dp[i][4]：第二次不持有，可能是之前就不持有，也可能是当天卖出，如果是卖出就是第二次持有 加上 当天股票价格
 * 2. 递推公式：dp[i][0] = dp[i - 1][0]
 *            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
 *            dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
 *            dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
 *            dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
 * 3. 初始化 dp 数组：dp[0][0] = 0
 *                  dp[0][1] = -prices[0]
 *                  dp[0][2] = 0
 *                  dp[0][3] = -prices[0]
 *                  dp[0][4] = 0
 * 4. 遍历顺序：从前往后遍历
 * @param prices
 */
export function maxProfit3(prices: number[]): number {

}

/**
 * @description 188. 买卖股票的最佳时机 IV
 * 思路：可以拆分为第1次持有、第1次不持有、第2次持有、第2次不持有、第3次持有、第3次不持有，。。。。，第k次持有，第k次不持有
 * 1. dp 数组的含义：dp[i][0]：不操作
 *                 dp[i][1]：第1次持有
 *                 dp[i][2]：第1次不持有
 *                 dp[i][3]：第2次持有
 *                 dp[i][4]：第2次不持有
 *                 。。。
 *                 dp[i][2 * k - 1]：第 k 次持有
 *                 dp[i][2 * k]：第 k 次不持有
 * 2. 递推公式：
 *    for(let i = 1, pLen = prices.length; i < pLen; i++) {
 *         for(let j = 1;j < 2 * k; j +=2){
 *            // 持有
 *            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i])
 *            // 不持有
 *            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i])
 *        }
 *    }
 * 3. 初始话 dp 数组：
 *    for(let z = 1, len = 2 * k; z < len; z += 2) {
 *      dp[0][z] = -prices[0]
 *    }
 * 4. 遍历顺序：从前往后遍历
 * @param k
 * @param prices
 */
export function maxProfit4(k: number, prices: number[]): number {

}

/**
 * @description 309. 最佳买卖股票时机含冷冻期
 * 思路：同样是可以买卖多次，则每天的状态就为：
 *      1、持有股票：可以是之前就持有，也可以是当天买入股票
 *      2、保持卖出股票：就是冷冻期之后的时间一直卖友买入股票，都是保持卖出股票的状态
 *      2、卖出股票：具体卖出股票，后面一天就是冷冻期了
 *      3、冷冻期：前一天一定是卖出股票
 * 1. dp 数组的含义： dp[i][0]：持有股票
 *                  dp[i][1]: 保持卖出股票
 *                  dp[i][2]: 卖出股票
 *                  dp[i][3]: 冷冻期
 * 2. 递推公式：dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i], dp[i - 1][3] - prices[i])
 *            dp[i - 1][0]: 前一天就是持有股票的状态
 *            dp[i - 1][1] - prices[i]：前一天是保持卖出股票的状态，然后在当天买入股票
 *            dp[i - 1][3] - prices[i]：前一天是冷冻期，然后当天买入股票
 *            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
 *            dp[i][2] = dp[i - 1][0] + prices[i]  // 要想卖出股票，前一天必须是持有股票的
 *            dp[i][3] = dp[i - 1][2] // 冷冻期的前一天必须是卖出股票
 * 3. 初始化 dp 数组：dp[0][0] = -prices[0]
 *                  dp[0][1] = 0
 *                  dp[0][2] = 0
 *                  dp[0][3] = 0
 * 4. 遍历顺序：从前往后遍历
 * @param prices
 */
export function maxProfitHave(prices: number[]): number {

}

/**
 * @description 714. 买卖股票的最佳时机含手续费
 * 含手续费时，在卖出股票是，不仅需要用前一天不持有股票的利润 加上 当天的股票价格，还要减去手续费。
 * 1. dp 数组的含义： dp[i][0]：持有股票的最大利润，dp[i][1]：不持有股票的最大利润
 * 2. 递推公式：dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
 *            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
 * 3. 初始化 dp 数组：dp[0][0] = -prices[0], dp[0][1] = 0
 * 4. 遍历顺序：从前往后遍历
 * @param prices
 * @param fee
 */
export function maxProfit1(prices: number[], fee: number): number {

}
/**
 * @description 300. 最长递增子序列
 * @param nums
 */
export function lengthOfLIS(nums: number[]): number {

}
/**
 * @description 674. 最长连续递增序列
 * @param nums
 */
export function findLengthOfLCIS(nums: number[]): number {

}
/**
 * @description 718. 最长重复子数组
 * @param nums1
 * @param nums2
 */
export function findLength(nums1: number[], nums2: number[]): number {

}

/**
 * @description 1143. 最长公共子序列
 * @param text1
 * @param text2
 */
export function longestCommonSubsequence(text1: string, text2: string): number {

}

/**
 * @description 1035. 不相交的线
 * @param nums1
 * @param nums2
 */
export function maxUncrossedLines(nums1: number[], nums2: number[]): number {

}
/**
 * @description 53. 最大子数组和
 * @param nums
 */
export function maxSubArray(nums: number[]): number {

}

/**
 * @description 392. 判断子序列
 * @param s
 * @param t
 */
export function isSubsequence(s: string, t: string): boolean {

}
/**
 * @description 115. 不同的子序列
 * @param s
 * @param t
 */
export function numDistinct(s: string, t: string): number {

}

/**
 * @description 583. 两个字符串的删除操作
 * @param word1
 * @param word2
 */
export function minDistance(word1: string, word2: string): number {

}

/**
 * @description 72. 编辑距离
 * @param word1
 * @param word2
 */
export function minDistance1(word1: string, word2: string): number {

}
/**
 * @description 647. 回文子串
 * @param s
 */
export function countSubstrings(s: string): number {

}

/**
 * @description 516. 最长回文子序列
 * @param s
 */
export function longestPalindromeSubseq(s: string): number {

}
