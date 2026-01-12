import React, { useEffect, useState } from "react";
import Background from "../components/background";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Product from "./Product";
import OurPolicy from "../components/OurPolicy";
import Footer from "../components/footer";

function Home() {
  let heroData = [
    { text1: "30% OFF LIMITES OFFER", text2: "ON ALL PRODUCTS" },
    { text1: "DISCOVER THE BEST OF BOLD FASHION", text2: "LIIMITED TIME" },
    { text1: "EXCLUSIVE OFFER", text2: "FOR MEMBERS" },
    { text1: "LIMITED TIME", text2: "FLASH SALE" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="
      w-full 
      h-screen 
      bg-gradient-to-r from-black/80 to-gray-800 
      flex  
      md:flex-col
      gap-5
    "
      >
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>

      <Product />
      <OurPolicy />
      <Footer />
    </>
  );
}

export default Home;
