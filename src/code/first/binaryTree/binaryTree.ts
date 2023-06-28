class TreeNode {
  val: number

  left: TreeNode | null

  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// 102. 二叉树的层序遍历
function levelOrder(root: TreeNode | null): number[][] {

}
// 226. 翻转二叉树
function invertTree(root: TreeNode | null): TreeNode | null {

}
// 101. 对称二叉树
function isSymmetric(root: TreeNode | null): boolean {

}
// 104. 二叉树的最大深度
function maxDepth(root: TreeNode | null): number {

}
// 111. 二叉树的最小深度
function minDepth(root: TreeNode | null): number {

}
// 222. 完全二叉树的节点个数
function countNodes(root: TreeNode | null): number {

}
// 110. 平衡二叉树
function isBalanced(root: TreeNode | null): boolean {

}
// 257. 二叉树的所有路径
function binaryTreePaths(root: TreeNode | null): string[] {

}
// 404. 左叶子之和
function sumOfLeftLeaves(root: TreeNode | null): number {

}
// 513. 找树左下角的值
function findBottomLeftValue(root: TreeNode | null): number {

}
// 112. 路径总和
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

}
// 106. 从中序与后序遍历序列构造二叉树
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

}
// 654. 最大二叉树
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {

}
// 617. 合并二叉树
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {

}

// 700. 二叉搜索树中的搜索
function searchBST(root: TreeNode | null, val: number): TreeNode | null {

}
// 98. 验证二叉搜索树
function isValidBST(root: TreeNode | null): boolean {

}
// 530. 二叉搜索树的最小绝对差
function getMinimumDifference(root: TreeNode | null): number {

}
// 501. 二叉搜索树中的众数
function findMode(root: TreeNode | null): number[] {

}
// 236. 二叉树的最近公共祖先
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

}
// 235. 二叉搜索树的最近公共祖先
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

}
// 701. 二叉搜索树中的插入操作
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {

}
// 450. 删除二叉搜索树中的节点
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

}
// 669. 修剪二叉搜索树
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {

}
// 108. 将有序数组转换为二叉搜索树
function sortedArrayToBST(nums: number[]): TreeNode | null {

}
// 538. 把二叉搜索树转换为累加树
function convertBST(root: TreeNode | null): TreeNode | null {

}
