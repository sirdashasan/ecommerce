import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeaderMenuItems = () => {
  return (
    <div>
      <div className="flex justify-center md:flex items-center md:mx-16">
        <div className="flex flex-col md:flex-row md:mx-6">
          <a href="#" className="font-bold my-1 text-[#737373] md:mx-2 md:my-0">
            Home
          </a>
          <a
            href="#"
            className="font-semibold my-1 text-[#252B42] md:mx-2 md:my-0"
          >
            Shop{" "}
            <FontAwesomeIcon icon={faChevronDown} size="xs" className="ml-2" />
          </a>
          <a href="#" className="font-bold my-1 text-[#737373] md:mx-2 md:my-0">
            About
          </a>
          <a href="#" className="font-bold my-1 text-[#737373] md:mx-2 md:my-0">
            Blog
          </a>
          <a href="#" className="font-bold my-1 text-[#737373] md:mx-2 md:my-0">
            Contact
          </a>
          <a href="#" className="font-bold my-1 text-[#737373] md:mx-2 md:my-0">
            Pages
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuItems;
