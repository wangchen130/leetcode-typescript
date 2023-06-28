import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import {
  testRemoveElements
} from 'src/code/first/linkedList/linkedListTest';

const { Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={[1, 2]}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>102. 二叉树的层序遍历</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>226. 翻转二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>101. 对称二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>104. 二叉树的最大深度</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>111. 二叉树的最小深度</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>222. 完全二叉树的节点个数</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>110. 平衡二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>257. 二叉树的所有路径</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>404. 左叶子之和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>513. 找树左下角的值</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>112. 路径总和</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>106. 从中序与后序遍历序列构造二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>654. 最大二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>617. 合并二叉树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>700. 二叉搜索树中的搜索</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>98. 验证二叉搜索树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>530. 二叉搜索树的最小绝对差</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>501. 二叉搜索树中的众数</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>236. 二叉树的最近公共祖先</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>235. 二叉搜索树的最近公共祖先</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>701. 二叉搜索树中的插入操作</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>450. 删除二叉搜索树中的节点</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>669. 修剪二叉搜索树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>108. 将有序数组转换为二叉搜索树</Button>
        <Button style={{ marginRight: 10, marginBottom: 10 }} onClick={testRemoveElements}>538. 把二叉搜索树转换为累加树</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="题目">
        <Typography>
          <Paragraph>
            <ol>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/binary-tree-level-order-traversal/" target="_blank">
                  102. 二叉树的层序遍历
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/invert-binary-tree/" target="_blank">
                  226. 翻转二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/symmetric-tree/" target="_blank">
                  101. 对称二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/maximum-depth-of-binary-tree/" target="_blank">
                  104. 二叉树的最大深度
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/minimum-depth-of-binary-tree/" target="_blank">
                  111. 二叉树的最小深度
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/count-complete-tree-nodes/" target="_blank">
                  222. 完全二叉树的节点个数
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/balanced-binary-tree/" target="_blank">
                  110. 平衡二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/binary-tree-paths/" target="_blank">
                  257. 二叉树的所有路径
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/sum-of-left-leaves/" target="_blank">
                  404. 左叶子之和
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/find-bottom-left-tree-value/" target="_blank">
                  513. 找树左下角的值
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/path-sum/" target="_blank">
                  112. 路径总和
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" target="_blank">
                  106. 从中序与后序遍历序列构造二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/maximum-binary-tree/" target="_blank">
                  654. 最大二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/merge-two-binary-trees/" target="_blank">
                  617. 合并二叉树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/search-in-a-binary-search-tree/" target="_blank">
                  700. 二叉搜索树中的搜索
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/validate-binary-search-tree/" target="_blank">
                  98. 验证二叉搜索树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/minimum-absolute-difference-in-bst/" target="_blank">
                  530. 二叉搜索树的最小绝对差
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/find-mode-in-binary-search-tree/" target="_blank">
                  501. 二叉搜索树中的众数
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/" target="_blank">
                  236. 二叉树的最近公共祖先
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/" target="_blank">
                  235. 二叉搜索树的最近公共祖先
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/insert-into-a-binary-search-tree/" target="_blank">
                  701. 二叉搜索树中的插入操作
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/delete-node-in-a-bst/" target="_blank">
                  450. 删除二叉搜索树中的节点
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/trim-a-binary-search-tree/" target="_blank">
                  669. 修剪二叉搜索树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/" target="_blank">
                  108. 将有序数组转换为二叉搜索树
                </Button>
              </li>
              <li>
                <Button type="link" href="https://leetcode.cn/problems/convert-bst-to-greater-tree/" target="_blank">
                  538. 把二叉搜索树转换为累加树
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
