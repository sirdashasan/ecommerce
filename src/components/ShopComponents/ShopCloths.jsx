import React from "react";
import ShopClothsCard from "./ShopClothsCard";

const ShopCloths = () => {
  return (
    <div className="mx-12 mt-12 flex justify-center flex-col gap-5 md:flex md:flex-row md:flex-wrap">
      <ShopClothsCard />
      <ShopClothsCard />
      <ShopClothsCard />
      <ShopClothsCard />
      <ShopClothsCard />
    </div>
  );
};

export default ShopCloths;
