import React from "react";
import Header from "../layout/Header";
import Hero from "../components/HeroComponents/Hero";
import CategoryCard from "../components/EditorsPickComponents/CategoryCard";
import BestsellerProducts from "../components/FeaturedProducts/BestsellerProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryCard />
      <BestsellerProducts />
    </div>
  );
};

export default Home;
