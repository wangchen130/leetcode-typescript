import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testCanJump,
  testFindContentChildren, testMaxProfit, testMaxSubArray, testWiggleMaxLength
} from 'src/code/first/greedy/greedyTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>3455. 分发饼干</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testWiggleMaxLength}>376. 摆动序列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMaxSubArray}>53. 最大子数组和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMaxProfit}>122. 买卖股票的最佳时机 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCanJump}>55. 跳跃游戏</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>45. 跳跃游戏 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>1005. K 次取反后最大化的数组和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>134. 加油站</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>135. 分发糖果</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>860. 柠檬水找零</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>406. 根据身高重建队列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>452. 用最少数量的箭引爆气球</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>435. 无重叠区间</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>763. 划分字母区间</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>56. 合并区间</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>738. 单调递增的数字</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFindContentChildren}>968. 监控二叉树</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/assign-cookies/" target="_blank">455. 分发饼干</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/wiggle-subsequence/" target="_blank">376. 摆动序列</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/maximum-subarray/" target="_blank">53. 最大子数组和</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank">122. 买卖股票的最佳时机 II</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/jump-game/" target="_blank">55. 跳跃游戏</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/jump-game-ii/" target="_blank">45. 跳跃游戏 II</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/" target="_blank">1005. K 次取反后最大化的数组和</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/gas-station/" target="_blank">134. 加油站</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/candy/" target="_blank">135. 分发糖果</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/lemonade-change/" target="_blank">860. 柠檬水找零</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/queue-reconstruction-by-height/" target="_blank">406. 根据身高重建队列</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/" target="_blank">452. 用最少数量的箭引爆气球</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/non-overlapping-intervals/" target="_blank">435. 无重叠区间</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/partition-labels/" target="_blank">763. 划分字母区间</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/merge-intervals/" target="_blank">56. 合并区间</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/monotone-increasing-digits/" target="_blank">738. 单调递增的数字</Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/binary-tree-cameras/" target="_blank">968. 监控二叉树</Button>
              </li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
