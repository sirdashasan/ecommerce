import React from "react";
import HeaderLogin from "../components/HeaderComponents/HeaderLogin";
import HeaderMenuItems from "../components/HeaderComponents/HeaderMenuItems";
import HeaderLogo from "../components/HeaderComponents/HeaderLogo";

const Header = () => {
  return (
    <header className="bg-white w-full top-0 z-10 md:flex md:items-center">
      <nav className="container mx-auto px-6 md:pb-6 h-16 md:h-20 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <HeaderLogo />
          {/* Desktop'ta her zaman göster, mobilde sadece en üstteyken göster */}
          <div className={`hidden md:block `}>
            <HeaderMenuItems />
          </div>
          {/* Mobil için Login/Register ve Sepet */}
          <div className="md:hidden">
            <HeaderLogin />
          </div>
        </div>

        {/* Masaüstü için Login/Register ve Sepet öğeleri */}
        <div className="hidden md:flex md:items-center md:justify-end">
          <HeaderLogin />
        </div>

        {/* Mobil için Menü öğeleri, sadece en üstteyken göster */}

        <div className="flex justify-center mt-3 md:hidden">
          <HeaderMenuItems />
        </div>
      </nav>
    </header>
  );
};

export default Header;
