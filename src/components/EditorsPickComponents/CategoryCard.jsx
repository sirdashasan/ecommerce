import React from "react";

const categories = [
  { name: "MEN", imageUrl: "./images/category-card-men.jpg" },
  { name: "WOMEN", imageUrl: "./images/category-card-women.jpg" },
  { name: "ACCESSORIES", imageUrl: "./images/category-card-men.jpg" },
  { name: "KIDS", imageUrl: "./images/category-card-men.jpg" },
];

const CategoryCard = ({ name, imageUrl }) => {
  return (
    <div className="relative mb-6">
      <img src={imageUrl} alt={name} className="w-full h-auto" />
      <button className="absolute left-4 bottom-6 w-[180px] bg-white text-black py-2 font-sans font-bold">
        {name}
      </button>
    </div>
  );
};

const EditorPickSection = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold mb-4">EDITOR'S PICK</h2>
      <p className="text-sm mb-4">
        Problems trying to resolve the conflict between
      </p>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default EditorPickSection;
