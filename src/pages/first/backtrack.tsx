import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testCombine,
  testCombinationSum3,
  testLetterCombinations,
  testCombinationSum,
  testCombinationSum2,
  testPartition
} from 'src/code/first/backtrack/backtrackTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>77. 组合</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombinationSum3}>216. 组合总和 III</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testLetterCombinations}>17. 电话号码的字母组合</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombinationSum}>39. 组合总和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombinationSum2}>40. 组合总和 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testPartition}>131. 分割回文串</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>93. 复原 IP 地址</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>78. 子集</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>90. 子集 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>491. 递增子序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>46. 全排列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>47. 全排列 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>332. 重新安排行程</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>51. N 皇后</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCombine}>37. 解数独</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li><Button type="link" href="https://leetcode.cn/problems/combinations/description/" target="_blank">77. 组合</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/combination-sum-iii/description/" target="_blank">216. 组合总和 III</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/" target="_blank">17. 电话号码的字母组合</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/combination-sum/description/" target="_blank">39. 组合总和</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/combination-sum-ii/description/" target="_blank">40. 组合总和 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/palindrome-partitioning/description/" target="_blank">131. 分割回文串</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/restore-ip-addresses/description/" target="_blank">93. 复原 IP 地址</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/subsets/description/" target="_blank">78. 子集</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/subsets-ii/description/" target="_blank">90. 子集 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/non-decreasing-subsequences/description/" target="_blank">491. 递增子序列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/permutations/description/" target="_blank">46. 全排列</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/permutations-ii/description/" target="_blank">47. 全排列 II</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/reconstruct-itinerary/description/" target="_blank">332. 重新安排行程</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/n-queens/description/" target="_blank">51. N 皇后</Button></li>
              <li><Button type="link" href="https://leetcode.cn/problems/sudoku-solver/description/" target="_blank">37. 解数独</Button></li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
