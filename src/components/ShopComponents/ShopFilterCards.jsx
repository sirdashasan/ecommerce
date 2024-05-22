import React from "react";
import ProductCard from "../HomeComponents/FeaturedProducts/ProductCard";

const ShopFilterCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-4 mt-12 mb-16">
      <ProductCard />
    </div>
  );
};

export default ShopFilterCards;
