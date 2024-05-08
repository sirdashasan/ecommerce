import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeaderMenuItems = () => {
  return (
    <div>
      <div className="flex justify-center md:flex items-center md:mx-16">
        <div className="flex flex-col md:flex-row md:mx-6 font-sans">
          <Link
            to="/"
            className="font-bold my-1 text-[#737373] md:mx-2 md:my-0"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="md:flex items-center font-semibold my-1 text-[#252B42] md:mx-2 md:my-0"
          >
            Shop{" "}
            <FontAwesomeIcon icon={faChevronDown} size="xs" className="ml-2" />
          </Link>

          <Link
            to="/about"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="font-bold my-1 text-[#737373] md:mx-2 md:my-0"
          >
            Contact
          </Link>
          <Link
            to="/team"
            className="md:block font-bold my-1 text-[#737373] md:mx-2 md:my-0"
          >
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuItems;
