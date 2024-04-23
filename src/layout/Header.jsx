import React from "react";
import HeaderLogin from "../components/HeaderComponents/HeaderLogin";
import HeaderMenuItems from "../components/HeaderComponents/HeaderMenuItems";
import HeaderLogo from "../components/HeaderComponents/HeaderLogo";

const Header = () => {
  return (
    <header className="bg-white w-full fixed top-0 z-10">
      <nav className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        {/* Mobil ve Desktop için Logo ve marka adı */}
        <div className="flex justify-between items-center w-full md:w-auto md:flex md:items-center">
          <HeaderLogo />
          <div className="hidden md:block">
            <HeaderMenuItems />
          </div>
          {/* Mobil için Login/Register ve Sepet, masaüstü için bu bölüm görünmez */}
          <div className="md:hidden">
            <HeaderLogin />
          </div>
        </div>

        {/* Masaüstü için Login/Register ve Sepet öğeleri */}
        <div className="hidden md:flex md:items-center md:justify-end">
          <HeaderLogin />
        </div>

        {/* Mobil için Menü öğeleri */}
        <div className="flex justify-center mt-3 md:hidden">
          <HeaderMenuItems />
        </div>
      </nav>
    </header>
  );
};

export default Header;
