// import React from 'react';
// import { HomeOutlined, BulbOutlined } from '@ant-design/icons';
import { treeToArray, arrayToTree } from '../utils';

export interface MenuItemType {
  // 名称
  name: string;
  // 唯一标识，与后端数据一致(部分后端不存在数据的模块例外，例如个人中心)
  id: string;
  // 图标
  icon?: string;
  // 孩子
  children?: MenuItemType[];
  // 路由
  route?: string;
}
const menuTreeOrigin = [
  {
    id: 'first',
    name: '第一遍',
    children: [
      {
        id: 'firstArray1',
        name: '数组1',
        route: '/first/array1',
      },
      {
        id: 'firstArray2',
        name: '数组2',
        route: '/first/array2',
      },
      {
        id: 'firstLinkedList',
        name: '链表',
        route: '/first/linkedList',
      },
      {
        id: 'firstHashTable',
        name: '哈希表',
        route: '/first/hashTable',
      },
      {
        id: 'string',
        name: '字符串',
        route: '/first/string',
      },
      {
        id: 'stackAndQueue',
        name: '栈和队列',
        route: '/first/stackAndQueue',
      },
      {
        id: 'binaryTree',
        name: '二叉树',
        route: '/first/binaryTree',
      },
      {
        id: 'backtrack',
        name: '回溯算法',
        route: '/first/backtrack',
      },
      {
        id: 'greedy',
        name: '贪心算法',
        route: '/first/greedy',
      },
      {
        id: 'dynamicProgramming',
        name: '动态规划算法',
        route: '/first/dynamicProgramming',
      },
    ],
  },
];

export const menu = treeToArray(menuTreeOrigin);
export const menuTree = arrayToTree(menu);
