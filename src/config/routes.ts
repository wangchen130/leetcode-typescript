import React from 'react';

export interface RouteItemType {
  // 路由路径
  path: string;
  // 组件
  component?: () => Promise<React.ReactNode>;
  // dva model
  models?: () => Promise<any>[];
  // 子路由
  childRoutes?: RouteItemType[];
}

const adminRoutes: RouteItemType[] = [
  {
    path: '/first',
    childRoutes: [
      {
        path: '/array1',
        component: () => import('src/pages/first/array1'),
      },
      {
        path: '/array2',
        component: () => import('src/pages/first/array2'),
      },
      {
        path: '/linkedList',
        component: () => import('src/pages/first/linkedList'),
      },
      {
        path: '/hashTable',
        component: () => import('src/pages/first/hashTable'),
      },
      {
        path: '/string',
        component: () => import('src/pages/first/string'),
      },
      {
        path: '/stackAndQueue',
        component: () => import('src/pages/first/stackAndQueue'),
      },
      {
        path: '/binaryTree',
        component: () => import('src/pages/first/binaryTree'),
      },
      {
        path: '/backtrack',
        component: () => import('src/pages/first/backtrack'),
      },
      {
        path: '/greedy',
        component: () => import('src/pages/first/greedy'),
      },
      {
        path: '/dynamicProgramming',
        component: () => import('src/pages/first/dynamicProgramming'),
      },
    ],
  },
];

export { adminRoutes };
