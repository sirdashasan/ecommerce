import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import Kids from "./Kids";

const Shop = () => {
  let { path } = useRouteMatch(); // Dinamik yol tanımlamaları için useRouteMatch kullanılır

  return (
    <div>
      <h1>Shop</h1>
      <Switch>
        <Route path={`${path}/men`} component={Men} />
        <Route path={`${path}/women`} component={Women} />
        <Route path={`${path}/accessories`} component={Accessories} />
        <Route path={`${path}/kids`} component={Kids} />
      </Switch>
    </div>
  );
};

export default Shop;
