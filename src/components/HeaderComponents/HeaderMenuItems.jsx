import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderMenuItems = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const replaceTurkishCharacters = (str) => {
    const map = {
      ç: "c",
      Ç: "C",
      ğ: "g",
      Ğ: "G",
      ı: "i",
      İ: "I",
      ö: "o",
      Ö: "O",
      ş: "s",
      Ş: "S",
      ü: "u",
      Ü: "U",
    };

    return str.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match] || match);
  };

  const womenCategories = categories.filter((category) => category.id <= 8);
  const menCategories = categories.filter((category) => category.id > 8);

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

          <div
            className="md:flex items-center font-semibold my-1 text-[#252B42] md:mx-2 md:my-0 cursor-pointer"
            onClick={() => {
              toggleDropdown();
            }}
          >
            Shop{" "}
            <FontAwesomeIcon icon={faChevronDown} size="xs" className="ml-2" />
          </div>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute mt-6 ml-20 bg-white shadow-md z-10 flex"
            >
              <div className="w-1/2">
                <div className="font-semibold text-[#252B42] mt-2 mb-2 mx-2">
                  Kadın
                </div>
                {womenCategories.map(
                  (category) =>
                    category.gender === "k" && (
                      <Link
                        key={category.id}
                        to={`/shop/kadin/${replaceTurkishCharacters(
                          category?.title?.toLowerCase()
                        )}/${category.id}`}
                        className="md:block my-1 text-[#737373] md:mx-2 md:my-0"
                      >
                        {category.title}
                      </Link>
                    )
                )}
              </div>
              <div className="w-1/2">
                <div className="font-semibold text-[#252B42] mt-2 mb-2 mx-2">
                  Erkek
                </div>
                {menCategories.map(
                  (category) =>
                    category.gender === "e" && (
                      <Link
                        key={category.id}
                        to={`/shop/erkek/${replaceTurkishCharacters(
                          category.title.toLowerCase()
                        )}/${category.id}`}
                        className="md:block my-1 text-[#737373] md:mx-2 md:my-0"
                      >
                        {category.title}
                      </Link>
                    )
                )}
              </div>
            </div>
          )}

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
