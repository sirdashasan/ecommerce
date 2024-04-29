import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";

const ProductDetailButtons = () => {
  return (
    <div className="flex flex-row items-center gap-5 mt-6">
      <div>
        <button className="bg-[#23A6F0] text-white rounded-lg w-36 h-12 font-bold text-sm">
          Select Options
        </button>
      </div>
      <div className="flex flex-row gap-3">
        <button className="flex items-center justify-center bg-white text-black border-2 w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={heartRegular} className=" text-[#252B42]" />
        </button>
        <button className="flex items-center justify-center bg-white text-black border-2 w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={faShoppingCart} className=" text-[#252B42]" />
        </button>
        <button className="flex items-center justify-center bg-white text-black border-2 w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={faEye} className=" text-[#252B42]" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailButtons;
