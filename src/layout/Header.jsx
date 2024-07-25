import React, { useState } from "react";
import HeaderLogin from "../components/HeaderComponents/HeaderLogin";
import HeaderMenuItems from "../components/HeaderComponents/HeaderMenuItems";
import HeaderLogo from "../components/HeaderComponents/HeaderLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`bg-white w-full top-0 z-10 md:flex md:items-center ${
        menuOpen ? "h-24" : "h-12 md:h-16"
      } transition-all duration-400 py-2`}
    >
      <nav className="container mx-auto px-6 h-full md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="relative z-20">
            <HeaderLogo />
          </div>
          <div className="hidden md:block">
            <HeaderMenuItems />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#252B42] ml-4">
              <FontAwesomeIcon icon={faBars} size="sm" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end">
          <HeaderLogin />
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden absolute top-12 pb-6 left-0 w-full bg-white z-10">
          <HeaderMenuItems />
        </div>
      )}
    </header>
  );
};

export default Header;
