import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testEvalRPN,
  testIsValid,
  testMyQueue,
  testMyStack,
  testRemoveDuplicates
} from 'src/code/first/stackAndQueue/stackAndQueueTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMyQueue}>232. 用栈实现队列</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMyStack}>225. 用队列实现栈</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testIsValid}>20. 有效的括号</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveDuplicates}>1047. 删除字符串中的所有相邻重复项</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testEvalRPN}>150. 逆波兰表达式求值</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMyQueue}>239. 滑动窗口最大值</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMyQueue}>347. 前 K 个高频元素</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/implement-queue-using-stacks/" target="_blank">
                  232. 用栈实现队列
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/implement-stack-using-queues/" target="_blank">
                  225. 用队列实现栈
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/valid-parentheses/" target="_blank">
                  20. 有效的括号
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/" target="_blank">
                  1047. 删除字符串中的所有相邻重复项
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/evaluate-reverse-polish-notation/" target="_blank">
                  150. 逆波兰表达式求值
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/sliding-window-maximum/" target="_blank">
                  239. 滑动窗口最大值
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/top-k-frequent-elements/" target="_blank">
                  347. 前 K 个高频元素
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
