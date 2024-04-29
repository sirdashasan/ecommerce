import React from "react";
import ProductDetailBestsellerCard from "./ProductDetailBestsellerCard";

const ProductDetailBestsellerProducts = () => {
  return (
    <div className="mt-12">
      <div className="font-sans font-bold text-[#252B42] text-xl flex justify-center md:flex md:justify-start">
        <h2>BESTSELLER PRODUCTS</h2>
      </div>
      <div className="md:flex md:flex-wrap gap-5">
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
        <ProductDetailBestsellerCard />
      </div>
    </div>
  );
};

export default ProductDetailBestsellerProducts;
