import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import ProductDetailButtons from "./ProductDetailButtons";

const ProductDetailCarouselText = () => {
  return (
    <div className="font-sans mt-12 md:mt-0">
      <h2 className="font-bold text-[#252B42] text-xl">Floating Phone</h2>
      <div className="flex flex-row items-center mt-2">
        <div className="text-[#F3CD03] flex items-center">
          <FontAwesomeIcon icon={solidStar} style={{ marginRight: "4px" }} />
          <FontAwesomeIcon icon={solidStar} style={{ marginRight: "4px" }} />
          <FontAwesomeIcon icon={solidStar} style={{ marginRight: "4px" }} />
          <FontAwesomeIcon icon={solidStar} style={{ marginRight: "4px" }} />
          <FontAwesomeIcon icon={regularStar} />
        </div>
        <p className="ml-2 text-[#737373] font-bold text-sm">10 Reviews</p>
      </div>
      <div className="mt-6">
        <p className="font-bold text-[#252B42] text-2xl">$1,139.33</p>
        <p>
          <span className="text-[#737373] font-bold text-xs pr-2">
            Availability :
          </span>
          <span className="text-[#23A6F0] font-bold text-xs">In Stock</span>
        </p>
      </div>
      <div className="mt-6 md:mr-36">
        <p className="text-[#737373] font-bold">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr className="my-6 border-b-2" />
        <div className="mt-4 flex justify-start space-x-2">
          <div className="w-7 h-7 bg-[#23A6F0] rounded-full"></div>
          <div className="w-7 h-7 bg-[#23856D] rounded-full"></div>
          <div className="w-7 h-7 bg-[#E77C40] rounded-full"></div>
          <div className="w-7 h-7 bg-[#252B42] rounded-full"></div>
        </div>
        <ProductDetailButtons />
      </div>
    </div>
  );
};

export default ProductDetailCarouselText;
