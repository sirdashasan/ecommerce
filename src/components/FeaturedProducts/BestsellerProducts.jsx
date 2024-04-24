import React from "react";
import ProductCard from "./ProductCard";

const BestsellerProducts = () => {
  return (
    <>
      {/* Başlık ve açıklama */}
      <div className="p-4 mt-16 text-center font-sans text-[#252B42]">
        <h3 className="text-xl font-semibold text-[#737373]">
          Featured Products
        </h3>
        <h2 className="p-4 mx-32 text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="mx-32 text-sm text-[#737373] font-semibold">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-4 md:pl-72 md:pr-72 mb-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default BestsellerProducts;
