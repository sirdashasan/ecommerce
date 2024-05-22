import React, { useEffect } from "react";
import ShopTitle from "../components/ShopComponents/ShopTitle";
import ShopCloths from "../components/ShopComponents/ShopCloths";
import ShopFilter from "../components/ShopComponents/ShopFilter";
import ShopFilterCards from "../components/ShopComponents/ShopFilterCards";
import ShopPagination from "../components/ShopComponents/ShopPagination";
import ShopBrands from "../components/ShopComponents/ShopBrands";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { getProducts } from "../store/thunks/productThunks";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const sort = useSelector((state) => state.product.sort);
  const filter = useSelector((state) => state.product.filter);
  const total = useSelector((state) => state.product.total);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);

  console.log(location);

  const { pathname } = location;
  const pathnameArr = pathname.split("/");
  const categoryId = pathnameArr[pathnameArr.length - 1];
  console.log(pathnameArr[pathnameArr.length - 1]);

  useEffect(() => {
    dispatch(getProducts(categoryId, filter, sort, limit, offset));
  }, [categoryId, filter, sort, limit, offset]);

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
