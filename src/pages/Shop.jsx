import React from "react";
import ShopTitle from "../components/ShopComponents/ShopTitle";
import ShopCloths from "../components/ShopComponents/ShopCloths";
import ShopFilter from "../components/ShopComponents/ShopFilter";
import ShopFilterCards from "../components/ShopComponents/ShopFilterCards";
import ShopPagination from "../components/ShopComponents/ShopPagination";
import ShopBrands from "../components/ShopComponents/ShopBrands";

const Shop = () => {
  return (
    <div>
      <div>
        <div className="md:mx-36">
          <ShopTitle />
          <ShopCloths />
          <ShopFilter />
          <ShopFilterCards />
          <ShopPagination />
          <ShopBrands />
        </div>
      </div>
    </div>
  );
};

export default Shop;
