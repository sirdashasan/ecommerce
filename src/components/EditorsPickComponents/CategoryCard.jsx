import React from "react";

const CategoryCard = () => {
  return (
    <>
      {/* Başlık ve açıklama */}
      <div className="p-4 mt-8 text-center font-sans text-[#252B42]">
        <h2 className="text-lg font-semibold">EDITOR'S PICK</h2>
        <p className="text-sm text-[#737373] font-semibold">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="max-w-sm mx-auto md:max-w-[800px] bg-white overflow-hidden mt-6 md:flex md:flex-row">
        {/* Resim */}
        <div className="relative">
          <img
            src="./images/category-card-men.jpg"
            alt="Men's Fashion"
            className="w-full h-[480px] md:h-[400px] md:w-[500px] object-cover"
          />
          {/* Buton */}
          <button className="absolute left-16 right-0 bottom-8 w-[140px] bg-white text-black py-2 font-sans font-bold md:left-4 md:bottom-4">
            MEN
          </button>
        </div>

        <div className="relative mt-8 md:mt-0 md:ml-4">
          <img
            src="./images/category-card-women.jpg"
            alt="Women's Fashion"
            className="w-full h-[480px] md:h-[400px] md:w-[250px] object-cover"
          />
          {/* Buton */}
          <button className="absolute left-32 right-0 bottom-8 w-[120px] bg-white text-black py-2 font-sans font-bold md:left-4 md:bottom-4">
            WOMEN
          </button>
        </div>

        <div className="md:flex md:flex-col md:ml-4">
          <div className="relative mt-8 md:mt-0">
            <div className="overflow-hidden">
              <img
                src="./images/category-card-accessories.jpg"
                alt="Accessories Fashion"
                className="w-full h-[240px] object-cover md:h-[195px] md:w-[250px]"
              />
            </div>
            {/* Buton */}
            <button className="absolute left-8 right-0 bottom-8 w-[160px] bg-white text-black py-2 font-sans font-bold md:left-4 md:bottom-4">
              ACCESSORIES
            </button>
          </div>

          <div className="relative mt-8 md:mt-[10px]">
            <div className="overflow-hidden">
              <img
                src="./images/category-card-kids.jpg"
                alt="Kid's Fashion"
                className="w-full h-[240px] object-cover md:h-[195px] md:w-[250px]"
              />
            </div>
            {/* Buton */}
            <button className="absolute left-8 right-0 bottom-8 w-[120px] bg-white text-black py-2 font-sans font-bold md:left-4 md:bottom-4">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
