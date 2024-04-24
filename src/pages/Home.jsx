import React from "react";
import Header from "../layout/Header";
import Hero from "../components/HeroComponents/Hero";
import CategoryCard from "../components/EditorsPickComponents/CategoryCard";
import BestsellerProducts from "../components/FeaturedProducts/BestsellerProducts";
import Carousel2 from "../components/Carousel2";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryCard />
      <BestsellerProducts />
      <Carousel2 />
    </div>
  );
};

export default Home;
