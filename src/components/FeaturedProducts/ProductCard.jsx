import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="bg-white overflow-hidden mt-6 mx-auto md:mx-0 md:max-w-full md:flex md:items-center md:flex-col">
        {/* Resim */}
        <div className="relative">
          <img
            src="./images/product-card-image.jpg"
            alt="Men's Fashion"
            className="flex justify-center w-full h-[427px] md:h-[427px] md:w-[239px] object-cover"
          />
        </div>
        <div className="pt-4 mt-4 text-center font-sans text-[#252B42]">
          <h3 className="text-lg font-semibold">Graphic Design</h3>
          <h2 className="p-2 text-base font-bold text-[#737373]">
            English Department
          </h2>
          <p className="mt-4 mx-24 md:mx-0 text-base text-[#737373] font-semibold">
            <span className="text-[#BDBDBD]">$16.48</span>{" "}
            <span className="text-[#23856D] pl-2">$6.48</span>
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-5 h-5 bg-[#23A6F0] rounded-full"></div>
            <div className="w-5 h-5 bg-[#23856D] rounded-full"></div>
            <div className="w-5 h-5 bg-[#E77C40] rounded-full"></div>
            <div className="w-5 h-5 bg-[#252B42] rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
