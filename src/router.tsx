import { Redirect, Route, routerRedux, Switch } from 'dva/router';
import React from 'react';
import { adminRoutes, /* portalRoutes, */ RouteItemType } from 'src/config/routes';
import dynamicRoute from 'src/components/dynamic-route';
import ConfigProvider from 'src/components/config-provider';
import 'src/themes/index.less';

import App from 'src/pages/app';

const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }: any) => {
  const renderRoutes = (routes: any[], parentPath = ''): any[] => {
    return routes.reduce(
      (accumulator, { path, childRoutes, component, models }: RouteItemType, key) => {
        const compiledPath = `${parentPath}${path}`;
        const childRouteComponents = childRoutes ? renderRoutes(childRoutes, compiledPath) : [];

        if (!component) {
          return accumulator.concat(childRouteComponents);
        }
        return accumulator.concat(
          <Route
            key={key}
            exact
            path={compiledPath}
            component={dynamicRoute({
              app,
              component,
              models,
            })}
          />,
          childRouteComponents,
        );
      },
      [],
    );
  };

  // 动态错误处理
  const error = () => <div>404</div>;
  return (
    <ConnectedRouter history={history}>
      <ConfigProvider>
        <Switch>
          {/* {renderRoutes(portalRoutes)} */}
          <Route>
            <App>
              <Switch>
                {renderRoutes(adminRoutes)}
                <Route exact path="/" render={() => <Redirect to="/first/array1" />} />
                <Route component={error} />
              </Switch>
            </App>
          </Route>
        </Switch>
      </ConfigProvider>
    </ConnectedRouter>
  );
};

export default Routers;
