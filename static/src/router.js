import React from "react";
import PropTypes from "prop-types";
import { Router, Switch, Route, Redirect, routerRedux } from "dva/router";
import dynamic from "dva/dynamic";
import App from "./routes/app";

const { ConnectedRouter } = routerRedux;

const Routers = function({ history, app }) {
  const error = dynamic({
    app,
    component: () => import("./routes/error")
  });
  const routes = [
    {
      path: "/showApi",
      models: () => [import("./models/showApi")],
      component: () => import("./routes/showApi/index")
    },
    {
      path: "/tableManager",
      models: () => [import("./models/tableManager")],
      component: () => import("./routes/tableManager/index")
    },
    {
      path: "/tableManager/create",
      models: () => [import("./models/tableForm")],
      component: () => import("./routes/tableManager/TableForm")
    },
    {
      path: "/tableManager/edit/:id",
      models: () => [import("./models/tableForm")],
      component: () => import("./routes/tableManager/TableForm")
    }
  ];

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/tableManager" />}
          />
          {routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key}
              exact
              path={path}
              component={dynamic({ app, ...dynamics })}
            />
          ))}
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default Routers;
