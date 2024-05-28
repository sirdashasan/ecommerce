import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShopClothsCard = () => {
  const categories = useSelector((state) => state.product.categories);

  // Kategorileri rating değerine göre büyükten küçüğe sırala
  const sortedCategories = categories.sort((a, b) => b.rating - a.rating);

  // En yüksek 5 ratinge sahip kategorileri al
  const top5Categories = sortedCategories.slice(0, 5);

  const history = useHistory();

  const handleCardClick = (category) => {
    const gender = category.gender === "k" ? "kadin" : "erkek";
    const title = category.title
      .toLowerCase()
      .replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => {
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
        return map[match] || match;
      });
    history.push(`/shop/${gender}/${title}/${category.id}`);
  };

  return (
    <div className="flex flex-wrap">
      {top5Categories.map((category, index) => (
        <div key={category.id} className="w-1/5 p-2">
          <div
            className="relative flex justify-center items-center cursor-pointer"
            onClick={() => handleCardClick(category)}
          >
            <span className="absolute text-center text-white text-lg font-bold py-1 px-3 rounded-sm font-sans">
              <p>{category.title}</p>
              <p className="mt-6">{category.rating}</p>
            </span>
            <img
              className="w-[332px] h-[300px] md:w-[210px] md:h-[210px] object-cover"
              src={category.img}
              alt={category.title}
            />
          </div>
          {/* Eğer son kategori değilse, bir boşluk bırak */}
          {index !== top5Categories.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </div>
  );
};

export default ShopClothsCard;
