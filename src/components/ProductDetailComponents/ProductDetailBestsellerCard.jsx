import React from "react";

const ProductDetailBestsellerCards = () => {
  return (
    <div>
      <div className="bg-white overflow-hidden mt-6 mx-auto md:mx-0 md:max-w-full md:flex md:items-center md:flex-col cursor-pointer">
        {/* Resim */}
        <div className="relative">
          <img
            src="./images/product-detail-bestseller.jpg"
            alt=""
            className="flex justify-center w-full h-[427px] md:h-[340px] md:w-[300px] object-cover"
          />
        </div>
        <div className="pt-4 mt-4 text-start font-sans text-[#252B42]">
          <h3 className="text-lg font-semibold">Graphic Design</h3>
          <h2 className="text-base font-bold text-[#737373] mt-4">
            English Department
          </h2>
          <p className="mt-4 md:mx-0 text-base text-[#737373] font-semibold">
            <span className="text-[#BDBDBD]">$16.48</span>{" "}
            <span className="text-[#23856D] pl-2">$6.48</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailBestsellerCards;
