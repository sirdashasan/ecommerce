import React, { useState } from "react";

const ShopPagination = () => {
  const [activePage, setActivePage] = useState(2);
  const totalPages = 3;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };

  return (
    <div className="flex justify-center items-center mb-12 font-sans font-bold">
      <div className="border-2 rounded-lg overflow-hidden flex bg-white">
        <button
          onClick={() => handlePageChange(1)}
          className={`px-4 py-2 text-sm border-r `}
        >
          First
        </button>
        {[1, 2, 3].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 text-sm border-r ${
              number === activePage
                ? "bg-[#23A6F0] text-white"
                : "hover:bg-gray-100 text-[#23A6F0]"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(activePage + 1)}
          className={`px-4 py-2 text-sm `}
          disabled={activePage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopPagination;
