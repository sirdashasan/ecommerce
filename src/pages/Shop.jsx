import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import Kids from "./Kids";
import Header from "../layout/Header";
import ShopTitle from "../components/ShopComponents/ShopTitle";
import ShopCloths from "../components/ShopComponents/ShopCloths";
import ShopFilter from "../components/ShopComponents/ShopFilter";
import ShopFilterCards from "../components/ShopComponents/ShopFilterCards";
import ShopPagination from "../components/ShopComponents/ShopPagination";

const Shop = () => {
  let { path } = useRouteMatch(); // Dinamik yol tanımlamaları için

  return (
    <div>
      <div>
        <Header />
        <div className="mt-48 md:mt-10 md:mx-36">
          <ShopTitle />
          <ShopCloths />
          <ShopFilter />
          <ShopFilterCards />
          <ShopPagination />
        </div>
      </div>

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
