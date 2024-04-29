import React from "react";
import ProductDetailCarousel from "../components/ProductDetailComponents/ProductDetailCarousel";
import ProductDetailCarouselText from "../components/ProductDetailComponents/ProductDetailCarouselText";
import ShopTitle from "../components/ShopComponents/ShopTitle";
import ProductDetailDescription from "../components/ProductDetailComponents/ProductDetailDescription";
import ProductDetailBestsellerProducts from "../components/ProductDetailComponents/ProductDetailBestsellerProducts";
import ShopBrands from "../components/ShopComponents/ShopBrands";

const ProductDetail = () => {
  return (
    <div className="md:mx-12 mx-12">
      <div>
        <ShopTitle />
      </div>
      <div className="md:mx-12 mt-0 md:mt-16 md:flex md:flex-row gap-20">
        <ProductDetailCarousel />
        <ProductDetailCarouselText />
      </div>
      <div className="md:mx-12 ">
        <ProductDetailDescription />
      </div>
      <div className="md:mx-12">
        <ProductDetailBestsellerProducts />
      </div>
      <div className="md:mx-28 mt-6 md:mt-12">
        <ShopBrands />
      </div>
    </div>
  );
};

export default ProductDetail;
