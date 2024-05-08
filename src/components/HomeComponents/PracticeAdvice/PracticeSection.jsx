import React from "react";
import PracticeCard from "./PracticeCard";

const PracticeSection = () => {
  return (
    <div>
      {/* Başlık ve açıklama */}
      <div className="p-4 md:p-0 mt-16 text-center font-sans text-[#252B42] md:text-center">
        <h3 className="text-sm font-semibold text-[#23A6F0]">
          Practice Advice
        </h3>
        <h2 className="my-4 p-4 md:p-0 mx-28 md:mx-0 text-3xl font-bold">
          Featured Posts
        </h2>
        <p className="mx-28 md:mx-0 text-xs text-[#737373] font-semibold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="md:flex md:justify-center md:items-center md:flex-wrap md:gap-1">
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
      </div>
    </div>
  );
};

export default PracticeSection;
