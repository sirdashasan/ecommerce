import React from "react";
import HeaderLogin from "../components/HeaderComponents/HeaderLogin";
import HeaderMenuItems from "../components/HeaderComponents/HeaderMenuItems";
import HeaderLogo from "../components/HeaderComponents/HeaderLogo";
import useScrollPosition from "../hooks/useScrollPosition";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
  const atTop = useScrollPosition(); // Scroll pozisyonunu kontrol eden hook
  const isMobile = useIsMobile(); // Ekran genişliğini kontrol eden hook

  return (
    <header className="bg-white w-full fixed top-0 z-10">
      <nav className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <HeaderLogo />
          {/* Desktop'ta her zaman göster, mobilde sadece en üstteyken göster. */}
          <div className={`hidden md:block ${isMobile && !atTop && "hidden"}`}>
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
        {isMobile && atTop && (
          <div className="flex justify-center mt-3 md:hidden">
            <HeaderMenuItems />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
