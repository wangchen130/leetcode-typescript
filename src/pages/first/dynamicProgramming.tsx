import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testCanPartition,
  testClimbStairs,
  testFib, testFindMaxForm, testFindTargetSumWays,
  testIntegerBreak,
  testLastStoneWeightII,
  testMinCostClimbingStairs,
  testNumTrees,
  testUniquePaths,
  testUniquePathsWithObstacles
} from 'src/code/first/dynamicProgramming/dynamicProgrammingTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>509. 斐波那契数</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testClimbStairs}>70. 爬楼梯</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMinCostClimbingStairs}>746. 使用最小花费爬楼梯</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testUniquePaths}>62. 不同路径</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testUniquePathsWithObstacles}>63. 不同路径 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testIntegerBreak}>343. 整数拆分</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testNumTrees}>96. 不同的二叉搜索树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCanPartition}>416. 分割等和子集</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testLastStoneWeightII}>1049. 最后一块石头的重量 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindTargetSumWays}>494. 目标和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindMaxForm}>474. 一和零</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>518. 零钱兑换 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>377. 组合总和 Ⅳ</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>70. 爬楼梯 进阶版</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>322. 零钱兑换</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>279. 完全平方数</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>139. 单词拆分</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>198. 打家劫舍</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>213. 打家劫舍 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>337. 打家劫舍 III</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>121. 买卖股票的最佳时机</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>122. 买卖股票的最佳时机 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>123. 买卖股票的最佳时机 III</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>188. 买卖股票的最佳时机 IV</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>309. 最佳买卖股票时机含冷冻期</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>714. 买卖股票的最佳时机含手续费</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>300. 最长递增子序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>674. 最长连续递增序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>718. 最长重复子数组</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>1143. 最长公共子序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>1035. 不相交的线</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>53. 最大子数组和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>392. 判断子序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>115. 不同的子序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>583. 两个字符串的删除操作</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>72. 编辑距离</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>647. 回文子串</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFib}>516. 最长回文子序列</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li><Button type="link" href="https://leetcode.cn/problems/fibonacci-number/" target="_blank">509. 斐波那契数</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/climbing-stairs/" target="_blank">70. 爬楼梯</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/min-cost-climbing-stairs/" target="_blank">746. 使用最小花费爬楼梯</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/unique-paths/" target="_blank">62. 不同路径</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/unique-paths-ii/" target="_blank">63. 不同路径 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/integer-break/" target="_blank">343. 整数拆分</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/unique-binary-search-trees/" target="_blank">96. 不同的二叉搜索树</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/partition-equal-subset-sum/" target="_blank">416. 分割等和子集</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/last-stone-weight-ii/" target="_blank">1049. 最后一块石头的重量 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/target-sum/" target="_blank">494. 目标和</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/ones-and-zeroes/" target="_blank">474. 一和零</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/coin-change-ii/" target="_blank">518. 零钱兑换 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/combination-sum-iv/" target="_blank">377. 组合总和 Ⅳ</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/climbing-stairs/" target="_blank">70. 爬楼梯 进阶版</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/coin-change/" target="_blank">322. 零钱兑换</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/perfect-squares/" target="_blank">279. 完全平方数</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/word-break/" target="_blank">139. 单词拆分</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/house-robber/" target="_blank">198. 打家劫舍</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/house-robber-ii/" target="_blank">213. 打家劫舍 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/house-robber-iii/" target="_blank">337. 打家劫舍 III</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/" target="_blank">121. 买卖股票的最佳时机</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank">122. 买卖股票的最佳时机 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/" target="_blank">123. 买卖股票的最佳时机 III</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/" target="_blank">188. 买卖股票的最佳时机 IV</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/" target="_blank">1309. 最佳买卖股票时机含冷冻期</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/" target="_blank">714. 买卖股票的最佳时机含手续费</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/longest-increasing-subsequence/" target="_blank">300. 最长递增子序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/longest-continuous-increasing-subsequence/" target="_blank">674. 最长连续递增序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/maximum-length-of-repeated-subarray/" target="_blank">718. 最长重复子数组</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/longest-common-subsequence/" target="_blank">1143. 最长公共子序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/uncrossed-lines/" target="_blank">1035. 不相交的线</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/maximum-subarray/" target="_blank">53. 最大子数组和</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/is-subsequence/" target="_blank">392. 判断子序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/distinct-subsequences/" target="_blank">115. 不同的子序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/delete-operation-for-two-strings/" target="_blank">583. 两个字符串的删除操作</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/edit-distance/" target="_blank">72. 编辑距离</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/palindromic-substrings/" target="_blank">647. 回文子串</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/longest-palindromic-subsequence/" target="_blank">516. 最长回文子序列</Button></li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
