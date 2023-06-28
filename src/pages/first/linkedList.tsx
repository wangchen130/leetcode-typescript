import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testRemoveElements, testReverseList,
  testMyLinkedList, testSwapPairs, testRemoveNthFromEnd
} from 'src/code/first/linkedList/linkedListTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>203. 移除链表元素</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseList}>206. 反转链表</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseList}>面试题 02.07. 链表相交</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testMyLinkedList}>707. 设计链表</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testSwapPairs}>24. 两两交换链表中的节点</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveNthFromEnd}>剑指 Offer II 021. 删除链表的倒数第 n 个结点</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }}>142. 环形链表 II</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/remove-linked-list-elements/" target="_blank">
                  203. 移除链表元素
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank">
                  206. 反转链表
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank">
                  面试题 02.07. 链表相交
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/design-linked-list/" target="_blank">
                  707. 设计链表
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/swap-nodes-in-pairs/" target="_blank">
                  24. 两两交换链表中的节点
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/SLwz0R/" target="_blank">
                  剑指 Offer II 021. 删除链表的倒数第 n 个结点
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank">
                  142. 环形链表 II
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
