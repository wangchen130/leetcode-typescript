import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testCountPoints, testGenerateMatrix, testGroupThePeople,
  testMaximumTop, testMaxIncreaseKeepingSkyline, testMinOperations, testMinSubArrayLen
} from 'src/code/first/array/array2Test';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10 }} onClick={testMaximumTop}>2202. K 次操作后最大化顶端元素</Button>
        <Button style={{ marginRight: 10 }} onClick={testCountPoints}>1828. 统计一个圆中点的数目</Button>
        <Button style={{ marginRight: 10 }} onClick={testMinOperations}>1769. 移动所有球到每个盒子所需的最小操作数</Button>
        <Button style={{ marginRight: 10 }} onClick={testMaxIncreaseKeepingSkyline}>807. 保持城市天际线</Button>
        <Button style={{ marginRight: 10 }} onClick={testGroupThePeople}>1282. 用户分组</Button>
        <Button style={{ marginRight: 10 }} onClick={testMinSubArrayLen}>209. 长度最小的子数组</Button>
        <Button style={{ marginRight: 10 }} onClick={testGenerateMatrix}>59. 螺旋矩阵 II</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/maximize-the-topmost-element-after-k-moves/" target="_blank">
                  2202. K 次操作后最大化顶端元素
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/" target="_blank">
                  1828. 统计一个圆中点的数目
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/" target="_blank">
                  1769. 移动所有球到每个盒子所需的最小操作数
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/max-increase-to-keep-city-skyline/" target="_blank">
                  807. 保持城市天际线
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/" target="_blank">
                  1282. 用户分组
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/minimum-size-subarray-sum/" target="_blank">
                  209. 长度最小的子数组
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/spiral-matrix-ii/" target="_blank">
                  59. 螺旋矩阵 II
                </Button>
              </li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
