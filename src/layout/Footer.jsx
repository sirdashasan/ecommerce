import React from "react";
import FooterTitle from "../components/FooterComponents/FooterTitle";
import FooterLogos from "../components/FooterComponents/FooterLogos";
import FooterMenuItems from "../components/FooterComponents/FooterMenuItems";
import FooterEmail from "../components/FooterComponents/FooterEmail";
import FooterBottomText from "../components/FooterComponents/FooterBottomText";

const Footer = () => {
  return (
    <div className="ml-12 mt-16">
      <div>
        <div className="md:flex md:justify-between md:items-center md:ml-28 md:mr-48 md:mb-8">
          <FooterTitle />
          <FooterLogos />
        </div>
        <div className="md:flex md:ml-28 md:mb-8">
          <FooterMenuItems />
          <FooterEmail />
        </div>
        <FooterBottomText />
      </div>
    </div>
  );
};

export default Footer;
