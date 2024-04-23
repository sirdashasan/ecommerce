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
      <nav className="container mx-auto px-6 py-3 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <HeaderLogo />
          {/* Desktop'ta her zaman göster, mobilde sadece en üstteyken göster */}
          <div className={`hidden lg:block ${isMobile && !atTop && "hidden"}`}>
            <HeaderMenuItems />
          </div>
          {/* Mobil için Login/Register ve Sepet */}
          <div className="lg:hidden">
            <HeaderLogin />
          </div>
        </div>

        {/* Masaüstü için Login/Register ve Sepet öğeleri */}
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <HeaderLogin />
        </div>

        {/* Mobil için Menü öğeleri, sadece en üstteyken göster */}
        {isMobile && atTop && (
          <div className="flex justify-center mt-3 lg:hidden">
            <HeaderMenuItems />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
