import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faUser as farUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeaderLogin = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-6">
          <Link
            to="/login"
            className="hidden md:flex items-center md:text-[#23A6F0]"
          >
            <FontAwesomeIcon icon={farUser} size="xs" />
            <span className="ml-1 font-bold text-sm">Login / Register</span>
          </Link>
          <a href="#" className="text-[#252B42] md:text-[#23A6F0]">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
          </a>
          <a
            href="#"
            className="text-[#252B42] md:text-[#23A6F0] flex items-center"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
            <span className="hidden md:inline ml-1 text-xs">1</span>
          </a>
          <a href="#" className="hidden md:flex items-center md:text-[#23A6F0]">
            <FontAwesomeIcon icon={farHeart} size="sm" />
            <span className="ml-1 text-xs">1</span>
          </a>
          <a href="#" className="md:hidden items-center text-[#252B42]">
            <FontAwesomeIcon icon={faBars} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
