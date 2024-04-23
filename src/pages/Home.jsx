import React from "react";
import Header from "../layout/Header";
import Hero from "../components/HeroComponents/Hero";
import CategoryCard from "../components/EditorsPickComponents/CategoryCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryCard />
    </div>
  );
};

export default Home;
