import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testRemoveDuplicates,
  testRemoveElement,
  testSearchInsert,
  testPlusOne,
  testCanPlaceFlowers,
  testHasGroupsSizeX,
  testCanThreePartsEqualSum
} from 'src/code/array/test';

const { Paragraph, Title } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Title level={5}>简单</Title>
        <Button style={{ marginRight: 10 }} onClick={testRemoveDuplicates}>26. 删除有序数组中的重复项</Button>
        <Button style={{ marginRight: 10 }} onClick={testRemoveElement}>27. 移除元素</Button>
        <Button style={{ marginRight: 10 }} onClick={testSearchInsert}>35. 搜索插入位置</Button>
        <Button style={{ marginRight: 10 }} onClick={testPlusOne}>66. 加一</Button>
        <Button style={{ marginRight: 10 }} onClick={testCanPlaceFlowers}>605. 种花问题</Button>
        <Button style={{ marginRight: 10 }} onClick={testHasGroupsSizeX}>914. 卡牌分组</Button>
        <Button style={{ marginRight: 10 }} onClick={testCanThreePartsEqualSum}>1013. 将数组分成和相等的三个部分</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Title level={5}>简单</Title>
          <Paragraph>
            <ul>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array/" target="_blank">
                  26. 删除有序数组中的重复项
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/remove-element/" target="_blank">
                  27. 移除元素
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/search-insert-position/" target="_blank">
                  35. 搜索插入位置
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/plus-one/" target="_blank">
                  66. 加一
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/can-place-flowers/" target="_blank">
                  605. 种花问题
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/x-of-a-kind-in-a-deck-of-cards/" target="_blank">
                  914. 卡牌分组
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum/" target="_blank">
                  1013. 将数组分成和相等的三个部分
                </Button>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
