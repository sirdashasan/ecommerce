import React from "react";
import Hero from "../components/HeroComponents/Hero";
import CategoryCard from "../components/EditorsPickComponents/CategoryCard";
import BestsellerProducts from "../components/FeaturedProducts/BestsellerProducts";
import Carousel2 from "../components/Carousel2";
import Neural from "../components/NeuralComponents/Neural";
import PracticeSection from "../components/PracticeAdvice/PracticeSection";

const PageContent = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <BestsellerProducts />
      <Carousel2 />
      <Neural />
      <PracticeSection />
    </div>
  );
};

export default PageContent;
