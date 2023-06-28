import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testReverseString
} from 'src/code/first/string/stringTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testReverseString}>344. 反转字符串</Button>
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
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
