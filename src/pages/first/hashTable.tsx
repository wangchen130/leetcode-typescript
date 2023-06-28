import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testCanConstruct, testFourSum,
  testFourSumCount,
  testIntersection,
  testIsAnagram,
  testIsHappy, testThreeSum,
  testTwoSum
} from 'src/code/first/hashTable/hashTableTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testIsAnagram}>242. 有效的字母异位词</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testIntersection}>349. 两个数组的交集</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testIsHappy}>202. 快乐数</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testTwoSum}>1. 两数之和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFourSumCount}>454. 四数相加 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testCanConstruct}>383. 赎金信</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testThreeSum}>15. 三数之和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testFourSum}>18. 四数之和</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/valid-anagram/" target="_blank">
                  242. 有效的字母异位词
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/intersection-of-two-arrays/" target="_blank">
                  349. 两个数组的交集
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/happy-number/" target="_blank">
                  202. 快乐数
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/two-sum/" target="_blank">
                  1. 两数之和
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/4sum-ii/" target="_blank">
                  454. 四数相加 II
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/ransom-note/" target="_blank">
                  383. 赎金信
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/3sum/" target="_blank">
                  15. 三数之和
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/4sum/" target="_blank">
                  18. 四数之和
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
