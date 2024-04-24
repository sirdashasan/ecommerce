import React from "react";
import {
  faCalendar,
  faChartSimple,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PracticeCard = () => {
  return (
    <div>
      <div>
        <div className="mt-10 mx-12 md:mx-2 max-w-sm rounded overflow-hidden shadow-lg bg-white font-sans">
          <div className="relative">
            <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold py-1 px-3 rounded-sm">
              NEW
            </span>
            <img
              className="w-full h-[300px]"
              src="/images/practice.jpg"
              alt="Sample Image"
            />
          </div>
          <div className="px-6 py-4">
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 font-semibold">
              <span className="text-[#8EC2F2]">Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="font-bold text-xl mt-4 mb-2 text-[#252B42]">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className="mt-4 text-[#737373] text-base font-semibold">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-row items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <FontAwesomeIcon icon={faCalendar} className="text-[#23A6F0]" />
              <span className="ml-1 font-semibold">22 April 2021</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-green-500"
              />
              <span className="ml-1 font-semibold">10 comments</span>
            </div>
          </div>
          <div className="px-2 pt-4 pb-2">
            <button className="bg-transparent text-[#737373] py-2 px-4 rounded-full text-sm font-bold">
              Learn More
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#23A6F0] fa-xl ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
