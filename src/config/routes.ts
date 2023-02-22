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

const portalRoutes: RouteItemType[] = [
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: 'async-index' */
        'src/pages/index'
      ),
  },
];

const adminRoutes: RouteItemType[] = [
  {
    path: '/leetcode',
    childRoutes: [
      {
        path: '/array',
        component: () => import('src/pages/array'),
      },
    ],
  },
];

export { portalRoutes, adminRoutes };
