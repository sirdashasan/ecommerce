import React from "react";

const ShopClothsCard = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center  ">
        <span className="absolute text-center text-white text-lg font-bold py-1 px-3 rounded-sm font-sans ">
          <p>CLOTHS</p>
          <p className="mt-6">5 Items</p>
        </span>
        <img
          className="w-[332px] h-[300px] md:w-[210px] md:h-[210px] object-cover  "
          src="/images/hero-image-2.jpg"
          alt="Sample Image"
        />
      </div>
    </div>
  );
};

export default ShopClothsCard;
