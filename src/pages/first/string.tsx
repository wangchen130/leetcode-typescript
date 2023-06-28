import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testRepeatedSubstringPattern,
  testReplaceSpace, testReverseLeftWords,
  testReverseStr,
  testReverseString, testReverseWords, testStrStr
} from 'src/code/first/string/stringTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseString}>344. 反转字符串</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseStr}>541. 反转字符串 II</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReplaceSpace}>剑指 Offer 05. 替换空格</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseLeftWords}>剑指 Offer 58 - II. 左旋转字符串</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseWords}>151. 反转字符串中的单词</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testStrStr}>28. 找出字符串中第一个匹配项的下标</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRepeatedSubstringPattern}>459. 重复的子字符串</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/reverse-string/" target="_blank">
                  344. 反转字符串
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/reverse-string-ii/" target="_blank">
                  541. 反转字符串 II
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/ti-huan-kong-ge-lcof/" target="_blank">
                  剑指 Offer 05. 替换空格
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/" target="_blank">
                  剑指 Offer 58 - II. 左旋转字符串
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/reverse-words-in-a-string/" target="_blank">
                  151. 反转字符串中的单词
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/" target="_blank">
                  28. 找出字符串中第一个匹配项的下标
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/repeated-substring-pattern/" target="_blank">
                  459. 重复的子字符串
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
